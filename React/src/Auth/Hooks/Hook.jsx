import React from 'react'
import {Link} from 'react-router-dom'
const Hook = () => {
  return (
    <div>
        <ol>
            <li><Link to='/usestate'>usestate</Link></li>
            <li><Link to='/useEffect'>useeffect</Link></li>
            <li><Link to='/useeffectApi'>UseEffectWithApi</Link></li>
        </ol>
    </div>
  )
}

export default Hook