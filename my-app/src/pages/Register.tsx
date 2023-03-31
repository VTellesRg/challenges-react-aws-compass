
import { Link } from "react-router-dom";
import CustomInput from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  return (
    <div>
      <div className="header">
        <h1 className="header__title">Olá,</h1>
        <p className="header__p">Por favor, registre-se para continuar</p>
      </div>
      <form className="form" action="#">
        <h2 className="form_h2">Registro</h2>
        <CustomInput placeholder="Nome" />
        <CustomInput placeholder="Usuário" />
        <CustomInput placeholder="Nascimento" />
        <CustomInput placeholder="Email" />
        <CustomInput placeholder="Senha" />
        <CustomInput placeholder="Confirmar Senha" />
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