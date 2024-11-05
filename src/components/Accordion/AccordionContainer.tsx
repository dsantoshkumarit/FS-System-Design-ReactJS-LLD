import  { useState, useEffect } from "react";
import "./styles.css";
import Accordion from "./Accordion";




export default function AccordionContainer() {
  const accordions = [
    {
      id: 1,
      title: "Accordion 1",
      message: "lorem ipsum dolor sit amet, consectetur adip",
      isChecked: false,
    },
    {
      id: 2,
      title: "Accordion 2",
      message: "lorem ipsum dolor sit amet, consectetur adip",
      isChecked: false,
    },
    {
      id: 3,
      title: "Accordion 3",
      message: "lorem ipsum dolor sit amet, consectetur adip",
      isChecked: false,
    },
  ];

  const [activeAccordionId, setActiveAccordionId] = useState(0);
  const [accordionChecks, setAccordionChecks] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);


  useEffect(() => {
    if (Object.keys(accordionChecks).length === accordions.length) {
      setIsDisabled(Object.values(accordionChecks).some((obj) => !obj));
    }
  }, [accordionChecks,accordions.length]);

  return (
    <>
      <h1>Accordion</h1>
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {accordions.map((elem) => (
          <Accordion
            key={elem.id}
            id={elem.id}
            title={elem.title}
            message={elem.message}
            accordionChecks={accordionChecks}
            activeAccordionId={activeAccordionId}
            setActiveAccordionId={setActiveAccordionId}
            setAccordionChecks={setAccordionChecks}
          />
        ))}
        <button className="proceed-btn"
          disabled={isDisabled}
          onClick={()=>window.location.reload()}
        >
          Proceed
        </button>
      </div>
    </>
  );
}
