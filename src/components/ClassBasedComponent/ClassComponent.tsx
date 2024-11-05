import React from "react";


class Counter extends React.Component{
    constructor(props : object){
        super(props);
        this.state = {count : 0};
    }

    handleIncrement = () => {
        this.setState((state)=>{
            return {count : state.count + 1};
        });
    };
    handleDecrement = () => {
        this.setState((state)=>{
            return {count : state.count - 1};
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