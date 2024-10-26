import React from 'react';
import { Link } from 'react-router-dom';
import * as ReactComponents from "../index.ts";

export interface ReactComponentType {
    name : string;
    component : React.FC;
    url : string;
}

const ChallengesNav = () => {
    return (
        <nav>
            <ul>
                {
                    ReactComponents?.default?.map((ReactComponent: ReactComponentType, index) => 
                        {
                            return (
                                <li key={index}>
                                    <Link to={`/${ReactComponent?.url}`}>{ReactComponent?.name}</Link>
                                </li>
                            );
                        }
                    )
                }
            </ul>
        </nav>
    );
};

export default ChallengesNav;