import { useState } from "react";
import StringField from "../components/form/StringField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = () => {
    if (!email) {
      setEmailError("Campo obrigatório");
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Campo obrigatório");
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (!validateEmail() || !validatePassword()) return;
  };

  return (
    <main
      className="flex justify-center items-center gap-8 p-16 bg-gray-light flex-col md:flex-row"
      style={{ minHeight: "calc(100vh - 7rem)" }}
    >
      <img src="/img/login_hero.svg" alt="Login Hero" />

      <section className="flex flex-col justify-center items-center gap-4 bg-white p-16 rounded-lg shadow-md w-1/3">
        <img
          src="/img/hero_image.png"
          alt="RediUX Logo"
          className="w-full mb-8"
        />
        <form className="w-full">
          <StringField
            label="Email"
            value={email}
            onChange={setEmail}
            placeholder="Digite seu email"
            error={emailError}
            type="email"
          />
          <StringField
            label="Senha"
            value={password}
            onChange={setPassword}
            placeholder="Digite sua senha"
            error={passwordError}
            type="password"
          />
          <button
            className=" bg-blue-dark w-full text-white py-2 px-4 rounded-md mt-4 hover:bg-blue"
            onClick={handleLogin}
          >
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
