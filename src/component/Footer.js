import React from 'react';
import { Reset } from 'styled-reset'
import {Link} from 'react-router-dom'
function Footer(props) {
  return (
    <React.Fragment>
      <Reset />
      <div className='footer'>
        <div className='footerterm'>
          <div><Link to='/'>Privacy policy</Link></div>
          <div><Link to='/'>Terms of Use</Link></div>
          <div><Link to='/'>Email inquiry</Link></div>
        </div>
        <div className='companyinfo'>
          <span>CEO : Jo Joo-wan </span>
          <span>usiness registration number : 107-86-14075 </span>
          <span>Address : LG Twin Tower, 128 Yeoui-daero, Yeongdeungpo-gu, Seoul</span>
        </div>
        <div className='copyinfo'>
          <div>Copyright © LG Electronics. All Rights Reserved. </div>
          <p>All content on this site is protected by copyright law, and unauthorized reproduction, copying, or distribution is prohibited.</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;