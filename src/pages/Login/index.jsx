import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup.string().min(6).required("Campo obrigatório"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [tokenState, setTokenState] = useState(
    JSON.parse(localStorage.getItem("@KH:token")) || ""
  );

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;
        toast.success("Logou com sucesso");
        localStorage.setItem("@KH:token", JSON.stringify(token));
        setTokenState(true);
        localStorage.setItem("@KH:userId", JSON.stringify(user.id));
        return history.push("/tech");
      })
      .catch((err) => toast.error("Senha ou email inválidos"));
  };

  useEffect(() => {
    if (tokenState) {
      history.push("/tech");
    }
  }, []);

  return (
    <Container>
      <h1>Faça login:</h1>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Container>
          <input {...register("email")} placeholder="E-mail" />
          <span>{errors.email?.message}</span>
          <input
            {...register("password")}
            placeholder="Senha"
            type="password"
          />
          <button type="submit">Enviar</button>
        </Container>
      </form>
      <p>
        Ainda não tem <Link to="/signup">cadastro?</Link>
      </p>
    </Container>
  );
};

export default Login;
