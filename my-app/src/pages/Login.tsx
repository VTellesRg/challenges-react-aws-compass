import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
      <div className="div">
        <h1 className="title">Olá,</h1>
      </div>

      <Link to="/register">Register</Link>
    </div>
  );
}