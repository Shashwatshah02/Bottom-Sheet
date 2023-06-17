import './App.css';
import { useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import Main from './Components/Main';

function App() {
  const [open, setOpen] = useState(false);
  const close = ()=>{
    setOpen(false);
  }
  return (
    <div className="App" style={{display:'flex', height:'500px', alignItems:'center', justifyContent:'center'}}>
      <button className='btn' onClick={()=>{setOpen(true) }}>Open Story</button>
      <BottomSheet open={open} onClick={close}>
        Hey from App
      <Main />
      
      </BottomSheet>

    </div>
  );
}

export default App;
