import { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'

function App() {
  const [val, setVal] = useState()

  return (
    <div className="App">

        <div className='firstDiv'>
          <h1>Markdown Input</h1>
            <div className='divdiv'>
            <input type="text" value={val} placeholder="write markdown syntax" onChange={(event)=>{
          setVal(event.target.value)
        }}></input>
            </div>
        </div>
        <div className='secDiv'>
        <h1>Markdown Preview</h1>
        <div className='divdiv'>
          
        <ReactMarkdown>{val}</ReactMarkdown>
        </div>
        </div>

    </div>
  );
}

export default App;
