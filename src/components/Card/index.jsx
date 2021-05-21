import  * as C from "./styles";

export default function Card({ tech, removeTech }) {
  return (
    <C.Container>
      <h3> {tech.title}</h3>
      <p>{tech.status}</p>
      <button onClick={() => removeTech(tech.id)}>X</button>
    </C.Container>
  );
}
