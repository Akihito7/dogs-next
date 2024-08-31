'use client'
import { useFormState, useFormStatus } from "react-dom";
import { Button as ButtonForm } from "../forms/button/button";
import { Input } from "../forms/input";
import { Error } from "../helper/error";
import styles from "./login-form.module.css"
import { register } from "@/src/actions/register";

function Button() {
  const { pending } = useFormStatus();
  return (
    <>
      {!pending && <ButtonForm>Entrar</ButtonForm>}
      {pending && <ButtonForm disabled={pending}>Carregando...</ButtonForm>}
    </>
  )
}

export function RegisterForm() {
  const [state, action] = useFormState(register, {
    ok: false,
    error: "",
    data: null,
  })

  return (
    <form action={action} className={styles.form}>
      <Input label="Usuário" name="username" type="text" />
      <Input label="Email" name="email" type="email" />
      <Input label="Senha" name="password" type="password" />
      {state.error&& <Error errorMessage={state.error} />}
      <Button />
    </form>
  )
}