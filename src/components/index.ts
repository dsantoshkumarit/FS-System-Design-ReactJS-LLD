import AccordionContainer from "./Accordion/AccordionContainer";
import CountdownTimer from "./CountdownTimer/CountdownTimer";
import Modal from "./Modal/Modal";
import ShoppingCartHome from "./Shopping Cart Using RTK/ShoppingCartHome";
import StopWatch from "./StopWatch/StopWatch";
import ImageCarousel from "./ImageCarousel/ImageCarousel";
import Counter from "./ClassBasedComponent/ClassComponent";

export default [
    {name : "Accordion", component : AccordionContainer, url : "accordion"},
    {name : "Modal", component : Modal, url : "react_modal"},
    {name : "Countdown Timer", component : CountdownTimer , url : "timer"},
    {name : "Stopwatch", component : StopWatch, url : "stopwatch"},
    {name : "Shopping Cart", component : ShoppingCartHome, url : "shopping-cart-rtk"},
    {name : "Image Carousel", component : ImageCarousel, url : "image-carousel"},
    {name : "Counter", component : Counter, url : "counter-increment-decrement"},
];