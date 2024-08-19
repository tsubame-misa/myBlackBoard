import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [cource, setCource] = useState([])

  useEffect(() => {
    (async () => {
      const response = await fetch("/.netlify/functions/cource");
      const data = await response.json();
      console.log("data", data);
      setCource(data.cource)
    })();
  }, []);

  return (
    <>
      <div>
        {cource.map((c) => {
          return <div key={c.id}> hoge{c.name}</div>;
        })}
      </div>
    </>
  )
}

export default App
