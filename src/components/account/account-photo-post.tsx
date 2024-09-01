'use client'
import { Input } from "../forms/input";
import { Button as ButtonForm } from "../forms/button/button";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./account-photo.module.css"
import { photoPost } from "@/src/actions/photo-post";
import { ChangeEvent, useState } from "react";
import { Error } from "../helper/error";

function Button() {
  const { pending } = useFormStatus();
  return (
    <>
      {!pending && <ButtonForm>Enviar</ButtonForm>}
      {pending && <ButtonForm disabled={pending}>Enviando...</ButtonForm>}
    </>
  )
}

export function AccountPhotoPost() {
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: "",
    data: null
  })

  const [img, setImg] = useState("")
  function handleChangeImg(file: ChangeEvent<HTMLInputElement>) {
    if (file.target.files) {
      const url = URL.createObjectURL(file.target.files[0]);
      setImg(url)
    }
  }
  return (
    <section className={styles.photoPost}>
      <form action={action}>
        <Input label="Nome" id="name" name="nome" />
        <Input type="number" label="Peso" id="weight" name="peso" />
        <Input type="number" label="Idade" id="age" name="idade" />
        <input
          type="file"
          id="file"
          name="img"
          className={styles.file}
          onChange={(e) => handleChangeImg(e)}
        />
        {state.error && <Error errorMessage={state.error} />}
        <Button />
      </form>
      <div>
        <div
          className={styles.preview}
          style={{ backgroundImage: `url(${img})` }}
        />
      </div>
    </section>
  )
}