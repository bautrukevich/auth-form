import { Reducer } from "react";
import { AuthState } from "../AuthStateContext";
import { AccessToken } from "../../../domain/auth/AccessToken";

export enum AuthActionType {
  SIGN_IN,
  SIGN_OUT,
  RESTORE_TOKEN,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR,
}

type AuthAction =
  | {
      type: AuthActionType.SIGN_IN;
      payload: {
        accessToken: AccessToken;
      };
    }
  | {
      type: AuthActionType.SIGN_OUT;
    }
  | {
      type: AuthActionType.RESTORE_TOKEN;
      payload: {
        accessToken: AccessToken;
      };
    }
  | {
      type: AuthActionType.SHOW_LOADER;
    }
  | {
      type: AuthActionType.HIDE_LOADER;
    }
  | {
      type: AuthActionType.SHOW_ERROR;
      payload: {
        hasError: string | false;
      };
    }
  | {
      type: AuthActionType.CLEAR_ERROR;
    };

const signIn = (
  prevState: AuthState,
  payload: {
    accessToken: AccessToken;
  }
): AuthState => ({
  ...prevState,
  isLoggedIn: true,
  accessToken: payload.accessToken.asString(),
});
const signOut = (prevState: AuthState): AuthState => ({
  ...prevState,
  isLoggedIn: false,
  accessToken: null,
});
const restoreToken = (
  prevState: AuthState,
  payload: {
    accessToken: AccessToken;
  }
): AuthState => ({
  ...prevState,
  accessToken: payload.accessToken.asString(),
  isLoading: false,
  isLoggedIn: true,
});

const showLoader = (prevState: AuthState): AuthState => ({ ...prevState, isLoading: true });
const hideLoader = (prevState: AuthState): AuthState => ({ ...prevState, isLoading: false });

const showError = (prevState: AuthState, payload: { hasError: string | false }): AuthState => ({
  ...prevState,
  hasError: payload.hasError,
});
const clearError = (prevState: AuthState): AuthState => ({ ...prevState, hasError: false });

export const authStateReducer: Reducer<AuthState, AuthAction> = (
  prevState: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionType.SIGN_IN:
      return signIn(prevState, { accessToken: action.payload.accessToken });
    case AuthActionType.SIGN_OUT:
      return signOut(prevState);
    case AuthActionType.RESTORE_TOKEN:
      return restoreToken(prevState, { accessToken: action.payload.accessToken });
    case AuthActionType.SHOW_LOADER:
      return showLoader(prevState);
    case AuthActionType.HIDE_LOADER:
      return hideLoader(prevState);
    case AuthActionType.SHOW_ERROR:
      return showError(prevState, { hasError: action.payload.hasError });
    case AuthActionType.CLEAR_ERROR:
      return clearError(prevState);
    default:
      return prevState;
  }
};
