import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [personajes, setPersonajes]= useState([]);

  useEffect(()=>{
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=4033a8ca4f424d8ad5066be57a6e5a5e&hash=2ddbfdc5dd62b6adf7eefaf0c854ba0d').then(res=>{
        setPersonajes(res.data.data.results)
        console.log(res.data)    
    }).catch(error=> console.log(error))
  },[]);

  console.log(personajes);


  return (
    <>
      <div className='App'>
        <h1>Marvel</h1>
      </div>   
    </>
  )
}

export default App
