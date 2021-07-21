import { useState } from "react";
import { Container, Image } from "./styles.js";

const array = [
  {
    name: "Step 1"
  },
  {
    name: "Step 2"
  },
  {
    name: "Step 3"
  },
  {
    name: "Step 4"
  },
  {
    name: "Step 5"
  }
];

export default function App() {
  const [campo, setCampo] = useState(1);

  return (
    <>
      <Container>
        <Image
          src={`https://web.archive.org/web/20190105044014im_/https://renegade.jeep.com.br/img-desktop/security/airbags/airbags0${campo}.png`}
          alt="image"
        />

        <label type="range">
          <input
            type="range"
            id="campo"
            step="1"
            min="1"
            value={campo}
            max={array.length}
            onChange={(e) => setCampo(e.target.value)}
          />

          {array.map((arr) => (
            <span key={arr.name}></span>
          ))}
        </label>
      </Container>
    </>
  );
}
