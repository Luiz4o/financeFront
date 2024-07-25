import { Fragment } from "react/jsx-runtime";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Signup from "../containers/Signup";
import Home from "../containers/Home";
import Signin from "../containers/Signing";


  const RoutesApp = () => {
    return (
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Signin />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    );
  };
  
  export default RoutesApp;