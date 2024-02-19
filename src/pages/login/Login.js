

import * as React from 'react'
import { Reset } from 'styled-reset'
import styled from 'styled-components';
import './login.scss'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import IconPasswordOff from '../../assets/icon_password_off.png';
import IconPasswordOn from '../../assets/icon_password_on.png';
export const Pwoff = styled.div`
  background:url(${IconPasswordOff}) no-repeat;
  background-size: cover; 
  width:30px;
  height:24px;
  cursor:pointer;
`;
export const Pwon = styled.div`
background:url(${IconPasswordOn}) no-repeat;
background-size: cover; 
width:30px;
height:24px;
cursor:pointer;
`;
function Login() {
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
        <div className='loginwrap formwrap'>
          <div className='forminner'>
            <h1>Log in</h1>
            <div className='logininput'>
              <label className='idlabel'>ID</label>
              <div class="inputWrap">
                <input placeholder='Please enter your ID' className='loginid'/>
                {/* <FontAwesomeIcon icon="fa-regular fa-eye" style={{color: "#d0cbc1",}} /> */}
                <button class="btnClear"></button>
              </div>
            </div>
            <div className='logininput'>
              <label className='pwlabel'>PW</label>
              <div class="inputWrap">
                <input placeholder='Please enter the password' className='loginpw' type={pwType.type}/>
                <span onClick={handlePasswordType}>
                  {pwType.visible ? <Pwoff></Pwoff> : <Pwon></Pwon>}
                </span>
                {/* <button class="btnClear"></button> */}
              </div>
              <div className='checkedinner'>
                <div>
                  <input type="checkbox" id="check1"></input>
                  <label for="check1">Remember</label>
                </div>
              </div>
            </div>
            <div className='buttoninner'>
              <button className='type_bg_red'>Log in</button>
              <button className='type_line'>Sign up</button>
            </div>
            <div className='findwrap'>
              <div><Link to='/'>Find ID</Link></div>
              <div><Link to='/'>Find PW</Link></div>
            </div>
          </div>
        </div>
      </div> 
    </React.Fragment>
  );
}

export default Login;
