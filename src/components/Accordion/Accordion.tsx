import  { SetStateAction, Dispatch } from "react";

interface AccordionChecksType{
    [id:string] : boolean;
}

interface AccordionProps {
    activeAccordionId: number;
    id: number;
    title : string;
    message: string;
    setActiveAccordionId: Dispatch<SetStateAction<number>>;
    setAccordionChecks : (checksObject : object) => void;
    accordionChecks: AccordionChecksType,
}
    
const Accordion:React.FC<AccordionProps> = ({
    activeAccordionId,
    id,
    title,
    message,
    setActiveAccordionId,
    setAccordionChecks,
    accordionChecks
}) => {
    return (
    <div style={{
        width: "500px"}}>
        <div
            style={{
                width: "100%",
                color: "black",
                cursor: "pointer",
                border: "2px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "5px",
                padding:"0.5rem 1rem",
                boxSizing : "border-box"
            }}
            onClick={() =>
                setActiveAccordionId((prevId: number) => (prevId === id ? 0 : id))
            }
        >
            <h3
                style={{
                cursor: "pointer",
                }}
            >
                {" "}
                {title}
            </h3>
            <input
                type="checkbox"
                name={`${id}`}
                defaultChecked={accordionChecks?.[id]}
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => {
                setAccordionChecks((prevState: object) => ({
                    ...prevState,
                    [id]: e.target.checked,
                }));
                console.log(e.target.checked);
                }}
            />
        </div>
        <div>
        {activeAccordionId === id && (
            <p
            style={{
                padding: "0.5rem",
                border: "1px solid white",
                marginTop: 0,
            }}
            >
            {" "}
            {message}{" "}
            </p>
        )}
        </div>
    </div>
    );
};

export default Accordion;