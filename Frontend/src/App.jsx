import {useState} from 'react'


function App() {
  const[data,setData]=useState("")

  const handleSubmit=()=>{
    axios.post("http://localhost:3000/post",{data})
    .then(()=>{
      console.log("Success")
    })
    .catch(()=>{
      console.log("Error")
    })
  }

  return (
    <div>
      <input type="text" onChange={(e)=>{setData(e.target.value)}}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App