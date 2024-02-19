import * as React from 'react'
import { Reset } from 'styled-reset'
import styled from 'styled-components';
import '../findid/findpw.scss'
import {Link} from 'react-router-dom'

function FindpwStep2() {
  
  return (
    <React.Fragment>
      <Reset />
      <div className='shadowbox'>
        <div className='gnb'>Log in</div>
        <div className='findpwwrap formwrap'>
          <div className='forminner'>
            <h1>Find Password</h1>
            <div className='logininput'>
              <label className='idlabel'>Name</label>
              <div class="inputWrap">
                <input placeholder='Please enter your ID' className='loginid'/>
                {/* <FontAwesomeIcon icon="fa-regular fa-eye" style={{color: "#d0cbc1",}} /> */}
                <button class="btnClear"></button>
              </div>
            </div>
            <div className='logininput'>
              <label className='pwlabel'>Email</label>
              <div class="inputWrap">
                <input placeholder='Please enter the password' className='loginpw'/>
                {/* <button class="btnClear"></button> */}
              </div>
              <button className='type_bg_red btndisabled' disabled>Verify</button>
            </div>
            
            <div className='logininput'>
              <label className='pwlabel'>Verification Code</label>
              <div class="inputWrap">
                <input placeholder='Please enter verification code (6 digits)' className='loginpw'/>
                {/* <button class="btnClear"></button> */}
              </div>
              <button className='type_bg_red'>Confirm</button>
            </div>
            
          </div>
        </div>
      </div>  
    </React.Fragment>
  );
}

export default FindpwStep2;
