import  { useState } from "react";
import ReactDOM  from 'react-dom';

import "./styles.css";

interface ModalComponentTypes{
    toggleModal : ()=>void;
}

const ModalComponent:React.FC<ModalComponentTypes> = ({toggleModal})=>{
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="overlay" onClick={toggleModal}>
                <div
                    className="modal-content"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <h2>Modal Title</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button className="close-modal-btn" onClick={toggleModal}>
                        X
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement
    );
}

export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    //Prevents scroll when modal is open
    if (modal) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Open Modal
            </button>
            {modal && (
                <ModalComponent toggleModal={toggleModal} />
            )}
        </>
    );
}
