import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../../components/Input";
import Button from "../../components/Button";
import { Rafael } from "../../util/Validation";

export default function Register() {

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");


  const [errorMesssage, setErrorMessage] = React.useState<number>(0);

  const handleSubmit = () => {

    let error = 0;

    if (password !== Rafael.password || email !== Rafael.email) error = 1;
    setErrorMessage(error);

  };
  return (
    <div className="container">
      <div className="container__left">
        <div className="header">
          <h1 className="header__title">Olá,</h1>
          <p className="header__p">Para continuar navegando de forma segura, efetue o login</p>
        </div>
        <form className="form" onSubmit={() => handleSubmit()} >
          <h2 className="form_h2">Login</h2>

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

          {errorMesssage === 1 &&
            <p className="text__message">Usuário e/ou Senha inválidos. Por favor, tente novamente!</p>
          }

          <Button title="Logar-se" />
        </form>
        <div className={errorMesssage === 1 ? 'footer__message' : "footer"}>
          <p className="text__footer">
            Novo por aqui? <Link to="/register" className="text__footer">Registre-se</Link>
          </p>
        </div>
      </div>
      <div className="container__right" />

    </div>
  );
}