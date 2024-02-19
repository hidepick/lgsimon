import React from 'react';
import { Reset } from 'styled-reset'
import styled from 'styled-components';
import './List.scss'
import {Link} from 'react-router-dom'
import {useState} from 'react'
export const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display : flex;
  justify-content : center;
  align-items : center;
  height : 100%;
`;



export const DropdownView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
  role: 'dialog',
}))`
  width: 100%;
  border: 1px solid #4C4B48;
  position:absolute;
  background: #FFF;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.15);
  z-index:1;
  top:29px;
  left:0;
    >div.dropcont {
     
      color: #000;
      font-size: 16px;
      font-weight: 400;
      line-height: 40px; /* 250% */
      li{
        padding:0 20px;
        &:nth-child(even){
          background:#F0ECE4;
        }
      }
    }
`;
export const HoverView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
  role: 'dialog',
}))`
  width: 100%;
  border: 1px solid #4C4B48;
  position:absolute;
  background: #FFF;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.15);
  z-index:1;
  top:39px;
  left:0;
  border-radius:6px;
  padding:10px;
  &::after{
    position:absolute;
    content:'';
    width: 0px;
    height: 0px;
    border-right: 20px solid #666666;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    transform: rotate(90deg);
    left: 50%;
    top:0;
  }
  // &::before{
  //   position: absolute; 
  //   left:50%;  
  //   top:-5px; 
  //   content:''; 
  //   height: 10px; 
  //   width:10px; 
  //   background-color: #fff;
  //   border-right:1px solid #4c4b48;
  //   transform: rotate(40deg);
  //   transform: rotate(-40deg);
  // }

`;
function ListDetail(props) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownHandler = () => {
    setIsOpen(!isOpen) 
  };
  const [isHover, setIsHover] = useState(false);

  const openHover = () => {
    setIsHover(!isHover) 
  };
  return (
    <React.Fragment>
      <Reset />
      <div className='shadowbox'>
        <div className='tableinner'>
          <div className='liststate'>
            <h1>SL- Application List</h1>
            <div className='searchwrap'>
              <button className='nolinebtn'>Edit</button>
              <button className='nolinebtn'>Cancel application</button>
              <button className='nolinebtn'>Reset</button>
              <button className='linebtn'>Search</button>
            </div>
          </div>
          <table className='table_type02'>
            {/* <colgroup>
              <col width="1%"/>
              <col width="4%" />
              <col width="16%"/>
              <col width="7%"/>
              <col width="6%" />
              <col width="12%"/>
              <col width="13%"/>
              <col width="12%" />
              <col width="10%"/>
              <col width="20%"/>
              <col width="5%" />
            </colgroup> */}
            <caption className='hidden'>Search Results</caption>
              <tr>
                <th>Title</th>
                <td>Stand by me(Spanish)</td>
                <th>Contents script</th>
                <td>lge_en.csv</td>
                <th>SL-Expert</th>
                <td>Hana Kim</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>KR</td>
                <th>Contents video</th>
                <td>LGE.mpeg</td>
                <th>Date</th>
                <td>2024.10.06</td>
              </tr>
              <tr>
                <th>Language</th>
                <td>KSL</td>
                <th>Format</th>
                <td>video</td>
                <th>Status</th>
                <td>Composition complete</td>
              </tr>
              <tr>
                <th>History</th>
                <td colSpan='5'>
                  <p>2024.10.24 AM 10:24 | Review complete : Hana Kim (HE Dep./LG.com/SL-expert) </p>
                  <p>2024.10.16 AM 09:10 | Review request : LG Lee (HE Dep./LG.com/Content manager) </p>
                  <p>2024.10.02 PM 05:40 | Application : Hyobeom Choi (HE Dep./LG.com)</p>
                </td>
              </tr>
          </table>
        </div>
      </div>
    </React.Fragment>
    
  );
}

export default ListDetail;