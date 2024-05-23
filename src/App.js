import './App.css';
import React, { useState, useEffect } from "react";


function App() {
  
  const key = "oboc5n3c51rMb9jhQXLjhHor3L6o-Nf506_Uj_T51Y8"
  const [img, setImg] = useState("")
  const [res, setRes] = useState([])

  const Submit = () => {
    requestAPI();
    setImg("")
  }

  const requestAPI = async () => {
    const data = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${key}&per_page=20`)
    const dataJSON = await data.json()
    const result = dataJSON.results
    console.log(result)
    setRes(result)
  }

  useEffect(() => {
    if (img.trim() !== "") {
      requestAPI();
    }
  },[]);

  return (
    <>
    <div>
      <input type="text" value={img} onChange={(e) => setImg(e.target.value)}></input>
      <button onClick={Submit}>Pesquisar</button>
    </div>
    <div>
      {res.map((val) => (
              <img
                key={val.id}
                src={val.urls.small}
              />
        ))}
    </div>
    </>
  );
}

export default App;
