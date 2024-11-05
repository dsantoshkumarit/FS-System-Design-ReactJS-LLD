import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./styles.css";
import * as ReactComponents from "../index.ts";

export interface ReactComponentType {
    name : string;
    component : React.FC | React.ComponentClass
    url : string;
}

const ChallengesNav = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>
                React Mini Challenges
            </h1>
            <nav>
                <ul className='challenges-list-container'>
                    {
                        ReactComponents?.default?.map((ReactComponent: ReactComponentType, index) => 
                            {
                                return (
                                    <li key={index} className="challenges-list-item" onClick={()=>navigate(`/${ReactComponent?.url}`)}>
                                        <Link to={`/${ReactComponent?.url}`} className='challenge-list-item-link'>{ReactComponent?.name}</Link>
                                    </li>
                                );
                            }
                        )
                    }
                </ul>
            </nav>
        </>
    );
};

export default ChallengesNav;