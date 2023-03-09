import { useEffect, useState } from "react";

const Carousel = (props) => {
  const [elements, setElements] = useState(props.elements || []);
  const [animationType, setAnimationType] = useState("animate-left-to-right");

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => {
      if (interval) clearInterval(interval);
    };
  });

  const handlePrevious = () => {
    const tmp = [...elements];
    tmp.unshift(tmp.pop());
    setAnimationType("animate-right-to-left");
    setElements(tmp);
  };

  const handleNext = () => {
    const tmp = [...elements];
    tmp.push(tmp.shift());
    setAnimationType("animate-left-to-right");
    setElements(tmp);
  };

  return (
    <>
      <div className="carousel">
        <div className="inner">
          {elements.map((item, index) => (
            <div
              key={item.id}
              className={index === 0 ? `slide ${animationType}` : "slide"}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          handlePrevious();
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          handleNext();
        }}
      >
        Next
      </button>
    </>
  );
};

export default Carousel;
