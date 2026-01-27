import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Counter from "./component/Counter";
import Login from "./Auth/Login";
import Hook from "./Auth/Hooks/Hook";
import Usestate from "./Auth/Hooks/Usestate";
import Useeffect from "./Auth/Hooks/Useeffect";
import UseEffectApi from "./Auth/Hooks/UseEffectApi";
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
        <Route path="/useState" element={<Usestate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hook" element={<Hook />} />
        <Route path="/useeffect" element={<Useeffect />} />
        <Route path="/useeffectapi"element={<UseEffectApi/>}/>
      </Routes>
    </>
  );
};

export default App;
