'use client'
import styles from "./login-form.module.css"

import { login } from "@/src/actions/login";
import { Button as ButtonForm } from "../forms/button/button";
import { useFormState, useFormStatus } from "react-dom";

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
      <input
        name="username"
        id="username"
        type="text"
      />

      <input
        name="password"
        id="password"
        type="password"
      />
      {state.error ?? ""}

      <Button />
    </form>
  )
}