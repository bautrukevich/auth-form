import { createContext, PropsWithChildren, useContext, useReducer } from "react";

import { AuthActionType, authStateReducer } from "./authStateReducer/authStateReducer";

import { AccessToken } from "../../domain/auth/AccessToken";
import { AuthStateKey } from "../../domain/auth/AuthStateKey";

import { FakeAuth } from "../FakeAuth";
import { CookiesSecureStorage } from "../CookiesSecureStorage";

import * as SignInWithEmailAndPassword from "../../application/auth/useCase/signInWithEmailAndPassword";
import * as SignOut from "../../application/auth/useCase/signOut";
import * as RestoreToken from "../../application/auth/useCase/restoreToken";
import * as GetUserInfo from "../../application/user/useCase/getUserInfo";
import { User } from "../../domain/user/User";
import { FakeUserApi } from "../FakeUserApi";

export interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  hasError: string | false;
  accessToken: string | null;
  user: User | null;
}

export const SECURE_AUTH_STATE_KEY = "access_token";

interface AuthStateContextProps {
  isLoading: boolean;
  isLoggedIn: boolean;
  hasError: string | false;
  accessToken: string | null;

  signInWithEmailAndPassword(email: string, password: string): Promise<void>;
  signOut(): Promise<void>;
  restoreToken(): Promise<void>;
}

const initialState: AuthState = {
  isLoading: true,
  isLoggedIn: false,
  hasError: false,
  accessToken: null,
  user: null,
};

const AuthStateContext = createContext<AuthStateContextProps>({} as AuthStateContextProps);

export const useAuthState = () => {
  return useContext(AuthStateContext);
};

const auth = new FakeAuth();
const storage = new CookiesSecureStorage<AuthStateKey, AccessToken>(AccessToken.fromString);

export const AuthStateProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(authStateReducer, initialState);

  const signInWithEmailAndPassword = async (email: string, password: string): Promise<void> => {
    clearError();
    showLoader();
    try {
      // In a production app, we need to send some data (usually email, password) to server and get a token
      // We will also need to handle errors if sign in failed
      // After getting token, we need to persist the token using `Secure Store`
      const query = SignInWithEmailAndPassword.Query.create({
        email,
        password,
        authStateKey: SECURE_AUTH_STATE_KEY,
      });
      const handler = new SignInWithEmailAndPassword.Handler({ auth, storage });
      const accessToken = await handler.handle(query);

      dispatch({
        type: AuthActionType.SIGN_IN,
        payload: {
          accessToken,
        },
      });
    } catch (e) {
      showError(e);
    } finally {
      hideLoader();
    }
  };
  const signOut = async (): Promise<void> => {
    clearError();
    showLoader();
    try {
      const command = SignOut.Command.create({ authStateKey: SECURE_AUTH_STATE_KEY });
      const handler = new SignOut.Handler({ auth, storage });

      await handler.handle(command);

      dispatch({ type: AuthActionType.SIGN_OUT });
    } catch (e) {
      showError(e);
    } finally {
      hideLoader();
    }
  };

  const restoreToken = async (): Promise<void> => {
    clearError();
    showLoader();

    try {
      // After restoring token, we may need to validate it
      const query = RestoreToken.Query.create({ authStateKey: SECURE_AUTH_STATE_KEY });
      const handler = new RestoreToken.Handler({ auth, storage });

      const accessToken = await handler.handle(query);

      if (accessToken !== null) {
        const userApi = new FakeUserApi(accessToken);
        const handler = new GetUserInfo.Handler({ userApi });

        const user = await handler.handle();

        dispatch({
          type: AuthActionType.RESTORE_SESSION,
          payload: {
            accessToken,
            user,
          },
        });
      } else {
        dispatch({
          type: AuthActionType.SIGN_OUT,
        });
      }
    } catch (e) {
      // Restoring token failed
      showError(e);
    } finally {
      hideLoader();
    }
  };

  const showLoader = () => dispatch({ type: AuthActionType.SHOW_LOADER });
  const hideLoader = () => dispatch({ type: AuthActionType.HIDE_LOADER });

  const showError = (error: string | false): void =>
    dispatch({ type: AuthActionType.SHOW_ERROR, payload: { hasError: error } });
  const clearError = (): void => dispatch({ type: AuthActionType.CLEAR_ERROR });

  return (
    <AuthStateContext.Provider
      value={{
        isLoading: state.isLoading,
        isLoggedIn: state.isLoggedIn,
        hasError: state.hasError,
        accessToken: state.accessToken,
        signInWithEmailAndPassword,
        signOut,
        restoreToken,
      }}
    >
      {children}
    </AuthStateContext.Provider>
  );
};
