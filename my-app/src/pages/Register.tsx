
import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../components/Input";
import Button from "../components/Button";

export default function Register() {

  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [birth, setBirth] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  // React.useEffect(() => {
  //   console.log(birth.length);
  //   if (birth.length === 10) {
  //     const brDate = birth.split("-").reverse().join("-");
  //     console.log(brDate);
  //   }

  // }, [birth]);
  const handleDate = (date: string) => {
    let brDate = date;
    if (date.length === 10) {
      brDate = date.split("-").reverse().join("-");
      console.log(brDate);
    }
    setBirth(brDate);
    
  }
  return (
    <div>
      <div className="header">
        <h1 className="header__title">Olá,</h1>
        <p className="header__p">Por favor, registre-se para continuar</p>
      </div>
      <form className="form" action="#">
        <h2 className="form_h2">Registro</h2>
        <CustomInput placeholder="Nome"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)} />

        <CustomInput placeholder="Usuário"
          value={username}
          type="text"
          onChange={(e) => setUsername(e.target.value)} />

        <CustomInput placeholder="Nascimento"
          value={birth}
          type="text"
          isDate
          onChange={(e) => setBirth(e.target.value)} />

        <CustomInput placeholder="Email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)} />

        <CustomInput placeholder="Senha"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)} />

        <CustomInput placeholder="Confirmar Senha"
          value={confirmPassword} type="password"
          onChange={(e) => setConfirmPassword(e.target.value)} />

        <Button />
      </form>
      <div className="footer">
        <p className="text__footer">
          Já possui uma conta? <Link to="/" className="text__footer">Faça Login</Link>
        </p>
      </div>
    </div>
  );
}