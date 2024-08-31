import { ButtonHTMLAttributes } from "react"
import styles from "./button.module.css"

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: ButtonType) {
  return (
    <button
      {...props}
      className={styles.button}
    >
      {children}
    </button>
  )
}