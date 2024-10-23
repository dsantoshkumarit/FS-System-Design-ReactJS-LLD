import ChallengesNav, { ReactComponentType } from './ChallengesNav/ChallengesNav.tsx';
import * as ReactComponents from "./index.ts";
import { Route, Routes} from 'react-router-dom';

function Home() {
    return (
        <Routes>
            <Route path={`/`} element={<ChallengesNav/>}/>
            {
                ReactComponents?.default?.map((ReactComponent: ReactComponentType, index) => 
                    {
                        return (
                            <Route path={`/${ReactComponent.name}`} element={<ReactComponent.component />} key={index}/>
                        );
                    }
                )
            }
        </Routes>
    );
}

export default Home;
