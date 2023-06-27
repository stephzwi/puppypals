import { useState } from 'react'
import {puppyList} from './data.js'
console.log(puppyList)
import './App.css'

 function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
console.log(puppies)
  return (
    <>
     { 
   puppies.map((puppy) => {
     return <p onClick={} key={puppy.id}>{puppy.name}</p>
   })
   
}
    </>
  )
}

export default App
