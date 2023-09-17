import React, { ButtonHTMLAttributes, FC } from 'react'
import Button from 'react-bootstrap/Button'
import styles from '../App.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  className?: string;
  icon: React.ReactNode;
}

export const Button1: FC<ButtonProps> = ({ type, text, icon, onClick, className }) => {
  return (
    <>
      <Button  className={styles.btn} onClick={onClick} type={type}>
        {text}
        {icon}
      </Button>
    </>
  )
}
