import React from "react";
import { useState } from "react";

function Value()
{
    const [data, setData] = useState([])
    const items = ["Sachin" , "Rohit" , "Kholi", "Dhoni"];
    const addPlayers = () =>
    {
      setData(items);
    }
    const addOnePlayers = () =>
    {
        const bowler = ["natarajan"]
        setData([...data,bowler])     /*Spread operator*/
    }
    return (
 <div>
<h1>Usestate</h1>
<br />
{data.length  && data.map((items) => {
    return   <li>{items}</li>
 })}
<button onClick={addPlayers}>addingValues</button>
<br />
<button onClick={addOnePlayers}>addingoneValue</button>

</div>
    );
}
export default Value