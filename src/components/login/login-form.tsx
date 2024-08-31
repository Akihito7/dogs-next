'use client'
import styles from "./login-form.module.css"

import { login } from "@/src/actions/login";
import { Button as ButtonForm } from "../forms/button/button";
import { useFormState, useFormStatus } from "react-dom";
import { Input } from "../forms/input";
import { Error } from "../helper/error";
import { useEffect } from "react";
import Link from "next/link";

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

  useEffect(() => {
    if (state.ok) {
      window.location.href = '/account';
    }
  }, [state.ok])

  return (
    <>

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

      <Link className={styles.perdeu} href="/login/lost-password">
        Perdeu a senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link className="button" href="/login/register">
            Cadastro
          </Link>
      </div>
    </>
  )
}