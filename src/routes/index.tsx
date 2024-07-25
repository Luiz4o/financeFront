import { Fragment } from "react/jsx-runtime";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Signup from "../containers/Signup";
import Home from "../containers/Home";
import Signin from "../containers/Signing";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
    const  {signed}  = useAuth();
  
    return signed > 0 ? <Item /> : <Signin />;
  };
  
  const RoutesApp = () => {
    return (
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route exact path="/home" element={<Private Item={Home} />} />
            <Route path="/" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="*" element={<Signin />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    );
  };
  
  export default RoutesApp;