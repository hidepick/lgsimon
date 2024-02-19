import * as React from 'react'
import { Reset } from 'styled-reset'
import styled from 'styled-components';
import '../findid/findid.scss'
import {Link} from 'react-router-dom'

function Findid() {
  
  return (
    <React.Fragment>
      <Reset />
      <div className='shadowbox'>
        <div className='gnb'>Log-in</div>
        <div className='findidwrap formwrap'>
          <div className='forminner'>
            <h1>Find ID</h1>
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
                <input placeholder='Please enter the password' className='loginpw' type='password'/>
                {/* <button class="btnClear"></button> */}
              </div>
            </div>
            <div className='notice'>
            If you enter your name and the email account you signed up with, we will send your ID to your email.
            </div>
            <div className='buttoninner'>
              <button className='type_bg_red'>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Findid;
