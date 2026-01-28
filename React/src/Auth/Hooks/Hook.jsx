import React from "react";
import { Link, Outlet } from "react-router-dom";

const Hook = () => {
  return (
    <div>
      <ol>
        <li><Link to="usestate">useState</Link></li>
        <li><Link to="useeffect">useEffect</Link></li>
        <li><Link to="useeffectapi">UseEffectWithApi</Link></li>
        <li><Link to="useref">useRef</Link></li>
        <li><Link to="usereducer">UseReducer</Link></li>
      </ol>
      <Outlet />
    </div>
  );
};

export default Hook;
