

import * as React from 'react'
import { Reset } from 'styled-reset'
import styled from 'styled-components';
import './joincomplate.scss'
import {Link} from 'react-router-dom'
import {useState} from 'react'
function Joincomplate() {
  const [pwType, setpwType] = useState({
    type: "password",
    visible: false,
  });
  const handlePasswordType = (e) => {
    setpwType(() => {
    // 만약 현재 pwType.visible이 false 라면
      if (!pwType.visible) {
        return { type: "text", visible: true };

	//현재 pwType.visible이 true 라면
      } else {
        return { type: "password", visible: false };
      }
    });
  };
  return (
    <React.Fragment>
      <Reset />
      <div className='shadowbox'>
        <div className='gnb'>Log-in</div>
        <div className='complatewrap formwrap'>
          <div className='forminner'>
            <h1>Join</h1>
            <div className='notice'>
            Thank you for join us.
            <p>
            Log-in will be available after you got <br></br>
            the accept email from administer. <br></br>
            Please enter the information when you log-in.
            </p>
            </div>
            <div className='buttoninner'>
              <button className='type_line'>Go to Home</button>
            </div>
          </div>
        </div>
      </div> 
    </React.Fragment>
  );
}

export default Joincomplate;
