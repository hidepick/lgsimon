import React from 'react';
import {Link} from 'react-router-dom'
import { Reset } from 'styled-reset'
function Header(props) {
  return (
    <React.Fragment>
      <Reset />
      <div className='headerwrap'>
        <div className='gnbwrap'>
          <div className='logowrap'>
            <div className='logo'></div>
            <div className='countrytime'><img src={require('../assets/nation.png')}></img><span>PM 10:28</span></div>
            <div className='time'>KST <span>PM 1:28</span></div>
          </div>
          <div className='userinfo'>
            <div className='headersearchwrap'>
              <button className='headersearchbtn'></button>
            </div>
            <div className='headernotiwrap'>
              <button className='headernotibtn'></button>
              <span>3</span>
            </div>
            <div className='countryselect'>
              <div className='countryvalue'>KR</div>
            </div>
            <div className='username'>
              <span>홍길동</span>님
            </div>
            <div className='usertype'>
              System Admin
            </div>
            <div>열쇠</div>
            <div>usericon</div>
            
          {/* <Link to='/login'>Login</Link> */}
          {/* <Link to='/guide'>Guide</Link> */}
          </div>
        </div>
        <div className='menuwrap'>
          <div>
            <ul>
              <li>SL-Creation</li>
              <li>SL-Data</li>
              <li>Statistics</li>
              <li>Management</li>
              <li>Payment</li>
              <li>Customer Support</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;