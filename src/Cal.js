import React, { useState } from 'react'
import "./Cal.css"
function Cal() {
  const [res, setRes] = useState("");

  const btnfun = (e) => {
    let data = e.target.value;
    if (data === "C") {
      setRes("")
    }
    else if (data === "=") {

      // eslint-disable-next-line
      const result = Function("return " + res)();

      setRes(result);

    }
    else {
      setRes(res + data);
    }

    // if (data === "+" || data === "-" || data === "*" || data === "/") { setRes(res + data); }

  }



  return (
    <div className="d-flex justify-content-center align-items-center">

      <div className='card mt-3 w-50' >
        <div className="row justify-content-center align-items-center g-2 mt-3">
          Calculator 
        </div>
        <div className="row justify-content-center align-items-center g-2">
          <div className='col-9 ' id="res">
            {res}
          </div>
        </div>
        <div id="btns">
          <div className="row justify-content-center align-items-center g-2">

            <button className="col-3" id="btn1" onClick={btnfun} value="1">1</button>
            <button className="col-3" id="btn2" onClick={btnfun} value="2">2</button>
            <button className="col-3" id="btn3" onClick={btnfun} value="3">3</button>
          </div>

          <div className="row justify-content-center align-items-center g-2">
            <button className="col-3" id="btn4" onClick={btnfun} value="4">4</button>
            <button className="col-3" id="btn5" onClick={btnfun} value="5">5</button>
            <button className="col-3" id="btn6" onClick={btnfun} value="6">6</button>
          </div>


          <div className="row justify-content-center align-items-center g-2">
            <button className="col-3" id="btn7" onClick={btnfun} value="7">7</button>
            <button className="col-3" id="btn8" onClick={btnfun} value="8">8</button>
            <button className="col-3" id="btn9" onClick={btnfun} value="9">9</button>
          </div>


          <div className="row justify-content-center align-items-center g-2">
            <button className="col-9" id="btn0" onClick={btnfun} value="0">0</button>
          </div>


          <div className="row justify-content-center align-items-center g-2">
            <button className="col-3" id="btnClr" onClick={btnfun} value="C">C</button>
            <button className="col-3" id="btnEql" onClick={btnfun} value="=">=</button>
            <button className="col-3" id="btnSum" onClick={btnfun} value="+">+</button>
          </div>

          <div className="row justify-content-center align-items-center g-2">
            <button className="col-3" id="btnSub" onClick={btnfun} value="-">-</button>
            <button className="col-3" id="btnMul" onClick={btnfun} value="*">*</button>
            <button className="col-3" id="btnDiv" onClick={btnfun} value="/">/</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Cal