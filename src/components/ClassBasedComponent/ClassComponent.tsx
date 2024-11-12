import React from "react";

type CountStateType = {
    count : number;
};

class Counter extends React.Component<object, { count: number }> {
    constructor(props : object){
        super(props);
        this.state = {count : 0};
    }

    handleIncrement = () => {
        this.setState((prevState :CountStateType )=>{
            return {count : prevState?.count ? prevState.count + 1 : 0};
        });
    };
    handleDecrement = () => {
        this.setState((prevState : CountStateType)=>{
            return {count : prevState.count - 1};
        });
    };

    render(){
        return (
            <>
                <header>
                    <h1>
                        Increment / Decrement Counter(Class Based Component)
                    </h1>
                </header>
                <section>
                    <h2>Count : {this.state.count}</h2>
                </section>
                <section>
                    <button onClick={this.handleIncrement}>Increment <i className="fa-solid fa-plus"></i></button>
                    <button onClick={this.handleDecrement}>Decrement <i className="fa-solid fa-minus"></i></button>
                </section>
            </>
        );
    }
}

export default Counter;