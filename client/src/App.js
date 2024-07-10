import {Routes,Route}  from "react-router-dom";
import { path } from "./utils/constant";
import {Home,Login} from './containers/Public/index'
function App() {
  return (
    <div className="h-screen w-screen ">
        <Routes>
            <Route path={path.HOME} element={<Home/>}/>
            <Route path={path.LOGIN}  element={<Login/>}/>


           
        </Routes>
    </div>
  );
}

export default App;
