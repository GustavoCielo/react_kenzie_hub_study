import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

const Signup = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup.string().min(6).required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/users", data)
      .then((_) => {
        toast.success("Sucesso ao criar a conta");
        return history.push("/login");
      })
      .catch((err) => toast.error("Erro ao criar a conta, tente outro e-mail"));
  };

  return (
    <Container>
      <h1>Cadastre-se:</h1>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Container>
          <input {...register("email")} placeholder="E-mail" />
          <span>{errors.email?.message}</span>

          <input
            {...register("password")}
            placeholder="Senha"
            type="password"
          />
          <span>{errors.password?.message}</span>
          <input {...register("name")} placeholder="Nome completo" />
          <span>{errors.name?.message}</span>
          <input {...register("bio")} placeholder="Biografia" />
          <span>{errors.bio?.message}</span>
          <input {...register("contact")} placeholder="Contato" />
          <span>{errors.contact?.message}</span>
          <select {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
          <input {...register("course_module")} placeholder="Módulo do curso" />
          <span>{errors.course_module?.message}</span>
          <button type="submit">Enviar cadastro</button>
        </Container>
      </form>
      <p>
        Já tem cadastro? <Link to="/login">Clique</Link>
      </p>
    </Container>
  );
};

export default Signup;
