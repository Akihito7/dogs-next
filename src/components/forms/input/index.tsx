import { InputHTMLAttributes } from "react"
import styles from "./input.module.css"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
}

export function Input({ label, error, ...props }: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label
        htmlFor={props.id}
        className={styles.label}
      >
        {label}
      </label>
      <input
        className={styles.input}
        {...props}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}