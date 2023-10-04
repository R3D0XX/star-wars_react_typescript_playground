import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../contexct/AuthContext";
import MyRealNavbar from "../components/MyNavbar";

function Login() {
  const { login } = useContext(AuthContext);
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
    login(email, password);
  };
  // console.log('email, password', email, password)

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" id="email" onChange={handleEmailChange} />
        <label htmlFor="email">Email</label>
        <input type="text" id="passwort" onChange={handlePasswordChange} />
        <label htmlFor="password">Password</label>
        <Button type="submit">Login</Button>
      </form>
      {/* <MyRealNavbar /> */}
    </>
  );
}

export default Login;
