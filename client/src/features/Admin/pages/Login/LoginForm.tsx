"use client"
import React from "react";
import SubmitButton from "./SubmitButton";
import styles from "./Styles.module.css";

import { redirect } from 'next/navigation'

export function submit(formData : FormData){
    const username = formData.get('username')
    const password = formData.get('password')
    const remember = formData.get('remember')
  
  if(username === "admin" && password ==="admin"){
    redirect('/dashboard')
  }
  redirect('/dashboard/login')

}

function LoginForm() {
  return (
    <div className={styles.container}>
      <form action={submit} className={styles.form}>
        <h1 className={styles.title}>LOG IN</h1>
        <input
          type="text"
          className={styles.input}
          name="username"
          placeholder="Username"
        />
        <input
          type="password"
          className={styles.input}
          name="password"
          placeholder="Password"
        />
        <label htmlFor="remember" className={styles.checkboxLabel}  >
          <input type="checkbox" id="remember" className={styles.checkbox} name="remember" />
          Remember Me
        </label>
        <SubmitButton />
      </form>
    </div>
  );
}

export default LoginForm;
