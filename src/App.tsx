import React from "react";

import { Page } from "./components/page/Page";
import { Header } from "./components/header/Header";
import { Content } from "./components/content/Content";
import { Wrapper } from "./components/wrapper/Wrapper";
import { Form } from "./components/form/Form";
import { FormSection } from "./components/form/FormSection";
import { Label } from "./components/form/Label";
import { Input } from "./components/form/Input";
import { PasswordInput } from "./components/form/PasswordInput";
import { SubmitButton } from "./components/form/SubmitButton";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <Page>
      <Header companyName="Company Inc." />
      <Content>
        <Wrapper title="Войти">
          <Form onSubmit={() => {}}>
            <FormSection>
              <Label text="E-mail">
                <Input />
              </Label>
            </FormSection>
            <FormSection>
              <Label text="Пароль">
                <PasswordInput />
              </Label>
            </FormSection>
            <SubmitButton>Войти</SubmitButton>
          </Form>
        </Wrapper>
      </Content>
      <Footer companyName="Company Inc." />
    </Page>
  );
}

export default App;
