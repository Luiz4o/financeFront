import { Route,Routes } from "react-router-dom";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import Home from "../containers/Home";
import { PrivateRoute} from './privateRoutes'

function MainRoutes() {

    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            
            <Route path="/home" element={
                <PrivateRoute>
                <Home/>
                </PrivateRoute>
                }/>
            
        </Routes>
    )
}

export default MainRoutes