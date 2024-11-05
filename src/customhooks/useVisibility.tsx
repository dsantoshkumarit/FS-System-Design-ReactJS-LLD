import { useState } from "react";

//Useful for toggling, showing and hiding Modals

const useVisibility = (initialVisibility:boolean=false) => {
    const [isVisible, setIsVisible] = useState<boolean>(initialVisibility);
    const show = () => {
        setIsVisible(true);
    };
    const hide = () => {
        setIsVisible(false);
    };
    const toggle = () => {
        setIsVisible(prevVal => !prevVal);
    };

    return {
        isVisible, show, hide, toggle
    };
};

export default useVisibility;
