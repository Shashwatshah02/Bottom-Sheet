import React from "react";


export default function Main({onClick}) {
  return (
    <div>
        
      Hello from Main
      <br />
      <button
        onClick={onClick}
      >
        Dismiss
      </button>
      
    </div>
  );
}
