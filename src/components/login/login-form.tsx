'use client'
import styles from "./login-form.module.css"

import { login } from "@/src/actions/login";
import { Button as ButtonForm } from "../forms/button/button";
import { useFormState, useFormStatus } from "react-dom";
import { Input } from "../forms/input";
import { Error } from "../helper/error";

function Button() {
  const { pending } = useFormStatus();
  return (
    <>
      {!pending && <ButtonForm>Entrar</ButtonForm>}
      {pending && <ButtonForm disabled={pending}>Carregando...</ButtonForm>}
    </>
  )
}

export function LoginForm() {

  const [state, action] = useFormState(login, {
    ok: false,
    data: null,
    error: "",
  })

  return (
    <form action={action} className={styles.form}>
      <Input
        label="Usuário"
        name="username"
        id="username"
        type="text"
      />
      <Input
        label="Senha"
        name="password"
        id="password"
        type="password"
      />
      <Error errorMessage={state.error} />
      <Button />
    </form>
  )
}