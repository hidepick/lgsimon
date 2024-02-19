import React from 'react';
import { Reset } from 'styled-reset'
import styled from 'styled-components';
import './List.scss'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import video from "../../assets/mp4.mp4";
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
function SignLanguageEdit(props) {
  const [isOpen, setIsOpen] = useState(true);

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
            <h1>SL- Sentence application details</h1>
            <div className='searchwrap'>
              <button className='nolinebtn'>Edit</button>
              <button className='nolinebtn'>Cancel application</button>
              <button className='nolinebtn'>Reset</button>
              <button className='linebtn'>Search</button>
            </div>
          </div>
          <div className='table_type03'>
            {isOpen ? 
              <div className='video_cont_wrap' onClick={(e) => e.stopPropagation()}>
                <div className='cont_tit'>Contents</div>
                <div className='video_cont'>
                  {/* <div className='cont_tit'>Contents</div> */}
                    <video width='430' height='auto' controls="controls">
                      <source src={require("../../assets/mp4.mp4")} type="video/mp4"/>
                    </video>
                </div>
              </div> : null
            }
            <div>
            <div className='foldbtn' onClick={dropdownHandler}>
              <div className='cont_tit'></div>
            </div>
          </div>
            <div className='cont_wrap'>
              <div className='cont_cont'>
                <div className='cont_tit_wrap'>
                  <ul className='cont_tit'>
                    <li>Time line</li>
                    <li>Scripts</li>
                    <li>
                    Edit Scripts
                    </li>
                  </ul>
                </div>
                <div className='cont_cont_wrap'>
                  <ul className='text_cont'>
                    <li>00:00:10</li>
                    <li>How to do when heating doesn’t work that you adjust temperature of the LG Electronics’ air conditioner?</li>
                    <li>
                      <textarea>How to do when heating doesn’t work that you adjust temperature of the LG Electronics’ air conditioner?</textarea>
                    </li>
                  </ul>
                  <ul className='text_cont'>
                    <li>00:00:50</li>
                    <li>Since last night, the sudden cold weather has caused many people to worry. If you have an air conditioner that can even use the heating function, you want to use it. Let's talk about how to take care of the desired temperature when the heating is not properly performed even when the desired temperature is adjusted in this way.</li>
                    <li>
                      <textarea>Since last night, the sudden cold weather has caused many people to worry. If you have an air conditioner that can even use the heating function, you want to use it. Let's talk about how to take care of the desired temperature when the heating is not properly performed even when the desired temperature is adjusted in this way.</textarea>
                    </li>
                  </ul>
                  <ul className='text_cont'>
                    <li>00:10:10</li>
                    <li>First, let's take a look closer with video.</li>
                    <li>
                      <textarea>First, let's take a look closer with video.</textarea>
                    </li>
                  </ul>
                  <ul className='text_cont'>
                    <li>00:10:10</li>
                    <li>When the heating operation is performed for the first time, warm wind does not come out immediately, which is a preparatory step for warm wind to come out, and the preheating operation function is in operation.</li>
                    <li>
                      <textarea>When the heating operation is performed for the first time, warm wind does not come out immediately, which is a preparatory step for warm wind to come out, and the preheating operation function is in operation.</textarea>
                    </li>
                  </ul>
                  <ul className='text_cont'>
                    <li>00:10:10</li>
                    <li>The indoor fan does not operate to prevent cold wind from coming out until the proper temperature is reached. If the outdoor unit is left in the cold without using the heating operation for a long time, the preheating operation time may be prolonged.</li>
                    <li>
                      <textarea>The indoor fan does not operate to prevent cold wind from coming out until the proper temperature is reached. If the outdoor unit is left in the cold without using the heating operation for a long time, the preheating operation time may be prolonged.</textarea>
                    </li>
                  </ul>
                  <ul className='text_cont'>
                    <li>00:10:10</li>
                    <li>During preheating, heating is not performed for a certain period of time, and when the temperature rises in the pipe, it is automatically released and heating is started.</li>
                    <li>
                      <textarea>During preheating, heating is not performed for a certain period of time, and when the temperature rises in the pipe, it is automatically released and heating is started.</textarea>
                    </li>
                  </ul>
                  <ul className='text_cont'>
                    <li>00:10:10</li>
                    <li>In particular, if the temperature around the outdoor unit is below -15℃ in the cold season, the piping preheating temperature drops than usual, resulting in a prolonged lukewarm wind.</li>
                    <li>
                      <textarea>In particular, if the temperature around the outdoor unit is below -15℃ in the cold season, the piping preheating temperature drops than usual, resulting in a prolonged lukewarm wind.</textarea>
                    </li>
                  </ul>
                  <ul className='text_cont'>
                    <li>00:10:10</li>
                    <li>The temperature of the air sucked from the indoor unit is also colder than usual, so the room is less warm, and the temperature may not rise and stagnate.</li>
                    <li>
                      <textarea>The temperature of the air sucked from the indoor unit is also colder than usual, so the room is less warm, and the temperature may not rise and stagnate.</textarea>
                    </li>
                  </ul>
                  <ul className='text_cont'>
                    <li>00:10:10</li>
                    <li>Try this. How to check the preheating status</li>
                    <li>
                      <textarea>Try this. How to check the preheating status</textarea>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
    
  );
}

export default SignLanguageEdit;