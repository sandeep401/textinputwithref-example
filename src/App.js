import React, { useRef } from 'react';
import TextInputWithRef from './components/TextInputWithRef';
import './style.css';
function App() {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <TextInputWithRef ref={inputRef} />
      <button onClick={handleClick}>Focus on input</button>
    </div>
  );
}
export default App;
