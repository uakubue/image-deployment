import { useState } from 'react'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'

function App() {
  const [file, setFile] = useState()
  const [image, setImage] = useState()

  const handleUpload = (e) => {
    const formdata = new FormData()

    formdata.append("file", file)

    axios.post("http://localhost:3002/upload", formdata)
    .then(res => console.log(res))
    .catch(err => console.log(err))                    
  }

  useEffect(() => {
    axios.get("http://localhost:3002/getImage")
    .then(res => setImage(res.data[7].image))
    .catch(err => console.log(err)) 
  },[])

  return (
    <div className='body'>
      <div>
        <h3>Form</h3>
      </div>
      <div>
        <p>Upload image</p>
        <input className='input-file' type="file" onChange={(e) => setFile(e.target.files[0])}/>
        <button onClick={handleUpload} className='button'>Upload image</button>
        <br />
        <img className='images' src={`http://localhost:3002/images/`+ image} alt="image list" />
      </div>
    </div>
  )
}

export default App
