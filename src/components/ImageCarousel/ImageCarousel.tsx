import { memo, useCallback, useEffect, useState } from "react";

const items = [
    {
        id: 1,
        imageUrl:
            "https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Item 1",
        description: "Description of item 1",
    },
    {
        id: 2,
        imageUrl:
            "https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Item 2",
        description: "Description of item 2",
    },
    {
        id: 3,
        imageUrl:
            "https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Item 3",
        description: "Description of item 3",
    },
];
const ImageCarousel = () => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const handlePrevious = useCallback(() => {
        setCurrentItemIndex(prevVal =>{
            return prevVal === 0 ? items.length-1 : prevVal-1;
        });
    },[]);
    const handleNext = useCallback(() => {
        setCurrentItemIndex(prevVal =>{
            return prevVal === items.length-1 ? 0 : prevVal+1;
        });
    },[]);
    useEffect(()=>{
        const carouselAutoScrollIntervalToken = setInterval(()=>{
            handleNext();
        },2000);
        return ()=>{
            clearInterval(carouselAutoScrollIntervalToken)
        };
    },[]);
    return (
        <>
            <header>
                <h1>Image Carousel</h1>
            </header>
            <article>
                <section key={items[currentItemIndex]?.id}>
                    <img width="250" height="250" src={items[currentItemIndex]?.imageUrl}/>
                    <h2>
                        {items[currentItemIndex]?.title}
                    </h2>
                    <p>
                        {items[currentItemIndex]?.description}
                    </p>
                </section>
                <section>
                    <button onClick={handlePrevious}><i className="fa-solid fa-chevron-left"></i> Previous</button>
                    <button onClick={handleNext}>Next <i className="fa-solid fa-chevron-right"></i></button>
                </section>
            </article>
        </>
    );
};

export default memo(ImageCarousel);
