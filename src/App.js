import { useRef, useState } from 'react';
import './App.css';

function App() {

  let [bank,setBank] = useState(['','',''])

  const numberClick = (e) => {
    if(bank[0].length == 0 || bank[1].length == 0){
      let copy = [...bank]
      copy[0] = copy[0] + e.target.textContent
      console.log(copy)
      setBank(copy)
    }else{
      let copy = [...bank]
      copy[2] = copy[2] + e.target.textContent
      console.log(copy)
      setBank(copy)
    }
  }

  const operatorClick =(e) => {
    switch(e.target.textContent){
      case '+':
        let copy1 = [...bank]
        copy1[1] = e.target.textContent
        console.log(copy1)
        setBank(copy1)
        break;
      case '-':
        let copy2 = [...bank]
        copy2[1] = e.target.textContent
        setBank(copy2)
        break;
      case '*':
        let copy3 = [...bank]
        copy3[1] = e.target.textContent
        setBank(copy3)
        break;
      default:
        let copy4 = [...bank]
        copy4[1] = e.target.textContent
        setBank(copy4)
        break;
    }
  }


  return (
    <div className="App">
      <div className="calculator">
        {
          Array(9).fill(0).map((ele,index) => {
            return (
              <div className="number" key={index} onClick={numberClick}>{index}</div>
            )
          })
        }
        <div className="operator" onClick={operatorClick}>+</div>
        <div className="operator" onClick={operatorClick}>-</div>
        <div className="operator" onClick={operatorClick}>*</div>
        <div className="operator" onClick={operatorClick}>/</div>
        {/* <div className="operator" onClick={operatorClick}>=</div> */}
      </div>
      <div className="inpu">
        <div className='inpu1'>{bank[0]}</div>
        <div className='inpu2'>{bank[2] || bank[0]}</div>
      </div>
      <div className="result"></div>
    </div>
  );
}

export default App;
