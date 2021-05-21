import { useHistory } from "react-router";
import Button from "../../components/Button";
import { Container } from "./styles";

const Home = () => {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <h1>Bem-vindo ao Kenzie Hub</h1>
      <img src="/Kenzie_Academy_Logo.jpg" alt="Kenzie Academy Logo"></img>
      <div>
        <Button
          onClick={() => {
            handleNavigation("/signup");
          }}
          whiteSchema={true}
        >
          Cadastre-se aqui
        </Button>
        <Button
          onClick={() => {
            handleNavigation("/login");
          }}
        >
          Faça seu login
        </Button>
      </div>
    </Container>
  );
};

export default Home;
