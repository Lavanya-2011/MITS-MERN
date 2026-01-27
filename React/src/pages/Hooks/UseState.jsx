import react, { useState } from 'react'
const useState = () => {
    const [name,setName]=useState("");
    const handleSubmit=()=>{
        console.log(name);
    }
    return (
        <div>
            <from onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.val)} placeholder='Enter the name'/>
                <button type='submit'>submit</button>
            </from>
        </div>
    )
}