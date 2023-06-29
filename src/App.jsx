import { useState } from 'react'
import {puppyList} from './data.js'
console.log(puppyList)
import './App.css'
//testing. sending a push to my branch
function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
console.log(puppies)
console.log(featuredPup)
function handleClick(puppyId) {
  // some logic here
  console.log("puppy id: ", puppyId)
}

  console.log("puppyList: ", puppyList);

  return (
    <div className="App">
    
     {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      { 
      puppies.map((puppy) => {
        return <p onClick={()=>setFeatPupId(puppy.id)} key={puppy.id}>
          {puppy.name}</p>
        
          })
      
        
      }
    </div>
  )

  
}


export default App
