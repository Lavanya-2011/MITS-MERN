import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Counter from "./component/Counter";
import Login from "./Auth/Login";
import SignUp from "./Auth/signup";

import Hook from "./Auth/Hooks/Hook";
import Usestate from "./Auth/Hooks/Usestate";
import Useeffect from "./Auth/Hooks/Useeffect";
import UseEffectApi from "./Auth/Hooks/UseEffectApi";
import UseRef from "./Auth/UseRef";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home name="Vamsi" />} />
        <Route path="/about" element={<About name="Vamsi" age={23} dept="ECE" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/*  Hooks */}
        <Route path="/hook" element={<Hook />}>
          <Route path="usestate" element={<Usestate />} />
          <Route path="useeffect" element={<Useeffect />} />
          <Route path="useeffectapi" element={<UseEffectApi />} />
          <Route path="useref" element={<UseRef />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
