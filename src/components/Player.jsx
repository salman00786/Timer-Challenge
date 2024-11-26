import { useState, useRef } from "react";

export default function Player() {

const playerName = useRef();
 
const [name, setName] = useState(null);

    function handleClick(){
      if(playerName.current.value.length < 15){
        setName(playerName.current.value);
        playerName.current.value='';
      } else{
        setName("you hve exceed the max number of characters");
      }

  }
  
  return (
    <section id="player">
      <h2>Welcome  {name?? "Invalid entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
        
      </p>
    </section>
  );
}
