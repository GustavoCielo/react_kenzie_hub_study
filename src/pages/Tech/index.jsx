import { useEffect, useState } from "react";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import Card from "../../components/Card";
import { useHistory } from "react-router";

export default function Tech() {
  const [token] = useState(JSON.parse(localStorage.getItem("@KH:token")) || "");
  const [userId] = useState(JSON.parse(localStorage.getItem("@KH:userId")));
  const [userTechs, setUserTechs] = useState([]);
  const history = useHistory();

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Escolha uma opção").matches(/\w/),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const loadTech = (data) => {
    api.get(`/users/${userId}`).then((response) => {
      setUserTechs(response.data.techs);
      console.log(response.data);
    });
  };

  const registerTech = async (schema) => {
    await api.post(`/users/techs`, schema, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    await loadTech();
  };

  useEffect(() => {
    if (!token) {
      history.push("/");
    }
    loadTech();
  }, []);

  const removeTech = async (techId) => {
    await api.delete(`/users/techs/${techId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    await loadTech();
  };

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <Container>
      <h1>Techs:</h1>
      <button onClick={() => logout()} className="logout">
        Logout
      </button>
      {userTechs.map((item) => {
        return <Card tech={item} removeTech={removeTech} />;
      })}
      <form onSubmit={handleSubmit(registerTech)}>
        <input
          type="text"
          placeholder="Adicione a tecnologia"
          {...register("title")}
        />
        <select {...register("status")}>
          <span>Escolha seu nível:</span>
          <option value="">Escolha seu nível</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button type="submit" className="styledButton">
          Adicionar tecnologia
        </button>
      </form>
    </Container>
  );
}
