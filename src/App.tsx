import React from "react";
import { Header } from "./components/header/Header";
import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header companyName="Company Inc." />
        <Content>
          <section className="wrapper page__section">
            <h2 className="wrapper__title">Войти</h2>
            <form className="form" action="#" method="post" noValidate autoComplete="off">
              <section className="form__section">
                <label className="form__label" htmlFor="sign-in-email">
                  E-mail
                </label>
                <input className="form__input" id="sign-in-email" name="email" type="email" required />
                <span className="form__input-error" id="sign-in-email-error" />
              </section>
              <section className="form__section">
                <label className="form__label" htmlFor="current-password">
                  Пароль
                </label>
                <input
                  className="form__input form__input_type_password"
                  id="current-password"
                  name="password"
                  type="password"
                  required
                  minLength={8}
                />
                <button
                  className="form__toggle-password"
                  type="button"
                  aria-label="Показать пароль как простой текст. Предупреждение: это покажет ваш пароль на экране."
                >
                  Показать пароль
                </button>
                <span className="form__input-error" id="current-password-error" />
              </section>
              <button className="form__submit" type="submit">
                Войти
              </button>
            </form>
          </section>
        </Content>
        <Footer copyright="© 2020 Company Inc." />
      </div>
    </div>
  );
}

export default App;
