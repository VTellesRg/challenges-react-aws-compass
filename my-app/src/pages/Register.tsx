
import { Link } from "react-router-dom";
import CustomInput from "../components/Input";
import Button from "../components/Button";

export default function Register() {
  return (
    <div>
      <div className="div">
        <h1 className="title">Olá,</h1>
        <p>Por favor, registre-se para continuar</p>
      </div>
      <form className="form" action="#">
        <h2>Registro</h2>
        <CustomInput onFocus={() => { }} placeholder="Nome" />
        <CustomInput onFocus={() => { }} placeholder="Usuário" />
        <CustomInput onFocus={() => { }} placeholder="Nascimento" />
        <CustomInput onFocus={() => { }} placeholder="Email" />
        <CustomInput onFocus={() => { }} placeholder="Senha" />
        <CustomInput onFocus={() => { }} placeholder="Confirmar Senha" />

        <Button />
      </form>
      <div className="footer">
        <p className="text__footer">
          Já possui uma conta? <Link to="/login">Faça Login</Link>
        </p>
      </div>
    </div>
  );
}