import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

import { Route, Routes } from "react-router-dom";

import UseState from "./pages/Hooks/UseState";
import Hook from "./Auth/Hooks/Hook";

import Login from "./Auth/Login";
import Signup from "./Auth/signup";

import UseEffect from "./Auth/Hooks/Useeffect";
import UseEffectApi from "./Auth/Hooks/UseEffectApi";
import UseRef from "./Auth/UseRef";
import UseReducer from "./pages/Hooks/UseReducer";
import UseMemo from "./Auth/Hooks/UseMemo";
import UseCallback from "./Auth/Hooks/UseCallback";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home name="Namrutha" />} />

        <Route
          path="/about"
          element={<About name="Namrutha" age={20} dept="CS&DS" />}
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />

        <Route path="/useState" element={<UseState />} />

        {/* 🔽 Hooks Parent Route */}
        <Route path="/hook" element={<Hook />}>
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="useEffectApi" element={<UseEffectApi />} />
          <Route path="useRef" element={<UseRef />} />
          <Route path="useReducer" element={<UseReducer />} />
          <Route path="useMemo" element={<UseMemo />} />
          <Route path="usecallback" element={<UseCallback />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
