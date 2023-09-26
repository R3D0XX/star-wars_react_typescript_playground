import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "react-bootstrap";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // console.log('email', email)
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  // console.log('email, password', email, password)

  return (
    <>
      <h1>Registration</h1>
      <form onSubmit={handleLogin}>
        <input type="text" id="email" onChange={handleEmailChange} />
        <label htmlFor="email">Email</label>
        <input type="text" id="passwort" onChange={handlePasswordChange} />
        <label htmlFor="password">Password</label>
        <Button type="submit">Register</Button>
      </form>
    </>
  );
};

export default Registration;
