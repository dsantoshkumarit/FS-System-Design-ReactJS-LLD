import ReactDOM  from 'react-dom';
import "./styles.css";
import useVisibility from "../../customhooks/useVisibility";

interface ModalComponentTypes{
    hideModal : ()=>void;
}

const ModalComponent:React.FC<ModalComponentTypes> = ({hideModal})=>{
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="overlay" onClick={hideModal}>
                <div
                    className="modal-container"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <h2 className='modal-header'>Modal Title</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button className="close-modal-btn" onClick={hideModal}>
                        X
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement
    );
}

export default function Modal() {
    const {isVisible, hide, show, toggle} = useVisibility(false);

    //Prevents scroll when modal is open
    if (isVisible) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

    return (
        <>
            <h1>
                React Modal
            </h1>
            <section className='btn-container-modal-control'>
                <button onClick={show} className="btn-modal">
                    Open Modal
                </button>
                <button onClick={toggle} className="btn-modal">
                    Toggle Modal
                </button>
            </section>
            {isVisible && (
                <ModalComponent hideModal={hide} />
            )}
        </>
    );
}
