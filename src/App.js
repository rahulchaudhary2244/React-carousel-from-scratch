import Carousel from "./Carousel";
import "./styles.css";

export default function App() {
  const elements = [
    { content: <div style={{ background: "lightblue" }}>Item 0</div>, id: 0 },
    { content: <div style={{ background: "cyan" }}>Item 1</div>, id: 1 },
    { content: <div style={{ background: "green" }}>Item 2</div>, id: 2 },
    { content: <div style={{ background: "pink" }}>Item 3</div>, id: 3 },
    { content: <div style={{ background: "yellow" }}>Item 4</div>, id: 4 }
  ];

  return (
    <div className="App">
      <Carousel elements={elements} />
    </div>
  );
}
