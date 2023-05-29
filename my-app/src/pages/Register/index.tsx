
import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../../components/Input";
import Button from "../../components/Button";
import { validateName, validateUsername, validateEmail, validatePassword, Rafael, validateBirth } from "../../util/Validation";
import { RegisterUser } from "../../helpers/Auth";
import { UserType } from "../../types/type";
import { useNavigate } from "react-router-dom";
export default function Register() {

  const navigate = useNavigate();

  const [name, setName] = React.useState<string>("John Doe");
  const [username, setUsername] = React.useState<string>("johnDoe");
  const [birth, setBirth] = React.useState<string>("1999-01-01");
  const [email, setEmail] = React.useState<string>("johndoe@email.com");
  const [password, setPassword] = React.useState<string>("P@ssw0rd");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("P@ssw0rd");

  const [errorMessage, setErrorMessage] = React.useState<number[]>([]);
  //const [errorMessage, setErrorMessage] = React.useState<number[]>([1, 2, 3, 4, 5]); //teste  

  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let errors: number[] = [];


    if (validateName(name) === true) errors.push(1); // 1 error for name
    if (validateUsername(username) === true) errors.push(2); // 2 error for username
    if (validateEmail(email) === true) errors.push(3); // 3 error for email
    if (validatePassword(password) !== 0) errors.push(4); // 4 error for strengh password
    if (password !== confirmPassword) errors.push(5);// 5 error for password
    if (username === Rafael.username) errors.push(6); // 6 error for user already exists
    if (email === Rafael.email) errors.push(7); // 7 error for email already exists
    if (validateBirth(birth) === true) errors.push(8); // 8 error for birth
    setErrorMessage(errors);
    console.log(errors);
    
    if (errors.length === 0) {
      let user: UserType = {
        name,
        user: username,
        birthdate: birth,
        email,
        password,
        profile_photo: ""
      }
     
      let result = await RegisterUser(user);
      if (result !== undefined)
        navigate('/login', {
          state: { email: result.email },
          replace: true
        });

    }
  };

  return (
    <div className="container">
      <div className="container__left">
        <div className="header__">
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
          {errorMessage.includes(1) &&
            <p className="text__message">Por favor, insira um nome válido</p>
          }
          <CustomInput
            onChangeText={e => setUsername(e.target.value)}
            type="text"
            placeholder="Usuário"
            value={username}
          />
          {errorMessage.includes(2) &&
            <p className="text__message">Usuário deve ter 4 a 15 caracteres</p>
          }
          {errorMessage.includes(6) &&
            <p className="text__message">Usuário já existe</p>
          }
          <CustomInput
            onChangeText={e => setBirth(e.target.value)}
            type="text"
            placeholder="Nascimento"
            isDate
            value={birth} />
          {errorMessage.includes(8) &&
            <p className="text__message">Por favor, insira uma data válida</p>
          }
          <CustomInput
            onChangeText={e => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            value={email}
          />

          {errorMessage.includes(3) &&
            <p className="text__message">Por favor, insira um endereço de email válido</p>
          }
          {errorMessage.includes(7) &&
            <p className="text__message">Email já existe</p>
          }
          <CustomInput
            onChangeText={e => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
            value={password}
          />
          {errorMessage.includes(4) &&
            <p className="text__message">Crie uma senha forte com 8 caracteres ou mais, ex.: S3nh@123</p>
          }
          <CustomInput
            onChangeText={e => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirmar Senha"
            value={confirmPassword}
          />
          {errorMessage.includes(5) &&
            <p className="text__message">As senhas não correspondem!</p>
          }
          <Button title="Registre-se" />
          <p className="text__footer">
            Já possui uma conta? <Link to="/" className="text__footer">Faça Login</Link>
          </p>
        </form>
      </div>
      <div className="container__right" />
    </div>
  );
}