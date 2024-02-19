import * as React from 'react'
import { Reset } from 'styled-reset'
import styled from 'styled-components';
import '../findid/findpw.scss'
import {Link} from 'react-router-dom'

function Findpw() {
  
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
              <button className='type_bg_red'>Verify</button>
            </div>
            
            <div className='notice'>
              <p>If you enter your name and the email account you signed up with,<br></br> we will send your ID to your email.</p>
              <p>Pleasechange to a new password after verification.</p>
            </div>
          </div>
        </div>
      </div>  
    </React.Fragment>
  );
}

export default Findpw;
