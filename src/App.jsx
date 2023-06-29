import { useState } from 'react'
import {puppyList} from './data.js'
console.log(puppyList)
import './App.css'
//testing. sending a push to my branch
function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)

  function handleClick(puppyId) {
    
    console.log("puppy id: ", puppyId)
  }

  console.log("puppyList: ", puppyList);

  return (
    <div className="App">
      {
        puppies.map((puppy) => {
             return <p onClick={()=>handleClick(puppy.id)} key={puppy.id}>{puppy.name}</p>
           })
       }
    </div>
  );
}

export default App
