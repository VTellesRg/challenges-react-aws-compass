

import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../components/Input";
import Button from "../components/Button";
import { validateName, validateEmail, validatePassword } from "../util/Validation";

export default function Register() {

  const [name, setName] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [birth, setBirth] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const [errorMesssage, setErrorMessage] = React.useState<number>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(password === confirmPassword ? 0 : 1);
    let resName = validateName(name);
    console.log(resName);

    let resEmail = validateEmail(email);
    console.log(resEmail);

    let resPassword = validatePassword(password);
    console.log(resPassword);

  };
  return (
    <div>
      <div className="header">
        <h1 className="header__title">Olá,</h1>
        <p className="header__p">Por favor, registre-se para continuar</p>
      </div>
      <form className="form" onSubmit={(e) => handleSubmit(e)} >
        <h2 className="form_h2">Registro</h2>
        <CustomInput
          value={name}
          onChangeText={(event) => setName(event.target.value)}
          type="text"
          placeholder="Nome"

        />
        <CustomInput
          onChangeText={e => setUsername(e.target.value)}
          type="text"
          placeholder="Usuário"
          value={username}
        />
        <CustomInput
          onChangeText={e => setBirth(e.target.value)}
          type="text"
          placeholder="Nascimento"
          isDate 
          value={birth}/>
        <CustomInput
          onChangeText={e => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          value={email}
        />
        <CustomInput
          onChangeText={e => setPassword(e.target.value)}
          type="password"
          placeholder="Senha"
          value={password}
        />
        <CustomInput
          onChangeText={e => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirmar Senha" 
          value={confirmPassword}
        />
        {errorMesssage === 1 &&
          <p className="text__message">As senhas não correspondem!</p>
        }
        <Button title="Registre-se"/>
      </form>
      <div className={errorMesssage === 1 ? 'footer__message' : "footer"}>
        <p className="text__footer">
          Já possui uma conta? <Link to="/" className="text__footer">Faça Login</Link>
        </p>
      </div>
    </div>
  );
}