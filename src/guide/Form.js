

import * as React from 'react'
import { Reset } from 'styled-reset'
import './Form.scss'
import {useState} from 'react'
import styled from 'styled-components';
export const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display : flex;
  justify-content : center;
  align-items : center;
  height : 100%;
`;

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display : flex;
  justify-content : center;
  align-items : center;
  background-color: rgba(0,0,0,0.3);
  border-radius: 10px;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
`;

export const ModalBtn = styled.button`
border: none;
border-radius: 8px;
background: #EA1917;
padding:17px 20px;
width: 340px;
color: #FFF;
text-align: center;
font-family: "LG EI Text TTF";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 125% */
`;

export const ExitBtn = styled.button`


`;
export const ContirmBtn = styled.button`
  border: none;
  border-radius: 8px;
  background: #4C4B48;
  padding:8px 20px;
  width: 110px;
  color: #FFF;
  text-align: center;
  font-family: "LG EI Text TTF";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  // line-height: 20px; /* 125% */
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
`;
export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
  role: 'dialog',
}))`
  // // Modal창 CSS를 구현합니다.
  // display: flex;
  // align-items: center;
  // justify-content: end;
  // flex-direction: column;
  border-radius: 16px;
  width: 440px;
  heigth: auto;
  background-color: #ffffff;
  border: 1px solid #4C4B48;
  position:relative;
    >div.desc {
      margin: 60px 0 31px 0;
      font-size: 20px;
      color: var(--coz-purple-600);
      text-align:center;
      >.tit{
        color: #000;
        text-align: center;
        font-family: "LG EI Text TTF";
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px; /* 175% */
      }
      >.text{
        color: #000;
        text-align: center;
        font-family: "LG EI Text TTF";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 175% */
        padding-top:20px
      }
    }
`;
function Form() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    // isOpen의 상태를 변경하는 메소드를 구현
    // !false -> !true -> !false
    setIsOpen(!isOpen) 
  };
  return (
     
    <React.Fragment>
      <Reset />
      <div className='shadowbox'>
      
      
      <div className='formwrap'>
        <h1>Form</h1>
        <div className='forminner'>
          <h2>Text Inputs</h2>
          <label>ID</label>
          <div><input placeholder='Please enter your ID'/></div>
          <label>PW</label>
          <div><input placeholder='Please enter the password'/></div>
          <label>Disabled</label>
          <div><input placeholder='Please enter the password' disabled className='inputdisabled'/></div>
        </div>
        <div className='checkedinner'>
          <h2>checkbox</h2>
          <div>
          <input type="checkbox" id="check1"></input>
          <label for="check1">selected</label>
          <input type="checkbox" id="check2"></input>
          <label for="check2">selected</label>
          </div>
        </div>
        <div className='toggleinner'>
          <h2>toggle</h2>
          <div>
          <input type="checkbox" id="check1"></input>
          <label for="check1">On</label>
          <input type="checkbox" id="check2"></input>
          <label for="check2">Off</label>
          <input type="checkbox" id="check2" disabled></input>
          <label for="check2">disabled</label>
          </div>
        </div>
        <div className='radioinner'>
          <h2>Radio</h2>
          <div>
          <fieldset>
            <label>
              <input type="radio" name="contact" value="email" checked />
              <span>selected</span>
            </label>
            <label>
              <input type="radio" name="contact" value="phone" />
              <span>selected</span>
            </label>
            <label>
              <input type="radio" name="contact" value="fax" disabled />
              <span>disabled</span>
            </label>
          </fieldset>
          </div>
        </div>
        <div className='buttoninner'>
          <h2>Buttons</h2>
          <div>
            <button className='type_bg_red'>Search</button>
            <button className='type_bg_gray'>Search</button>
            <button className='type_line'>Search</button>
          </div>
          <div>
            <button className='type_r_bg'>Preview</button>
            <button className='type_r_bg btndisabled' disabled>Preview</button>
            <button className='type_r_line'>Preview</button>
          </div>
          <div>
            <button className='nolinebtn'>Reset</button>
            <button className='linebtn'>Search</button>
          </div>
        </div>
        <h1>Table</h1>
        <div className='tableinner'>
        <table>
          <thead>
            <tr>
              <th>
                <div className='checkedinner'>
                  <input type="checkbox" id="check1"></input>
                </div>
              </th>
              <th>No.</th>
              <th>Player</th>
              <th>Position</th>
              <th>Height</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className='checkedinner'>
                  <input type="checkbox" id="check1"></input>
                </div>
              </td>
              <td>8</td>
              <td>Marco Belinelli</td>
              <td>G</td>
              <td>6-5</td>
              <td><button className='register_btn'></button></td>
            </tr>
            <tr>
              <td>
                <div className='checkedinner'>
                  <input type="checkbox" id="check1"></input>
                </div>
              </td>
              <td>5</td>
              <td>Carlos Boozer</td>
              <td>F</td>
              <td>6-9</td>
              <td>266</td>
            </tr>
            <tr>
              <td>
                <div className='checkedinner'>
                  <input type="checkbox" id="check1"></input>
                </div>
              </td>
              <td>21</td>
              <td>Jimmy Butler</td>
              <td>G-F</td>
              <td>6-7</td>
              <td>220</td>
            </tr>
            <tr>
              <td>
                <div className='checkedinner'>
                  <input type="checkbox" id="check1"></input>
                </div>
              </td>
              <td>9</td>
              <td>Luol Deng</td>
              <td>F</td>
              <td>6-9</td>
              <td>220</td>
            </tr>
            <tr>
              <td>
                <div className='checkedinner'>
                  <input type="checkbox" id="check1"></input>
                </div>
              </td>
              <td>22</td>
              <td>Taj Gibson</td>
              <td>F</td>
              <td>6-9</td>
              <td>225</td>
            </tr>
            <tr>
              <td>
                <div className='checkedinner'>
                  <input type="checkbox" id="check1"></input>
                </div>
              </td>
              <td>32</td>
              <td>Richard Hamilton</td>
              <td>G</td>
              <td>6-7</td>
              <td>193</td>
            </tr>
            <tr>
              <td>
                <div className='checkedinner'>
                  <input type="checkbox" id="check1"></input>
                </div>
              </td>
              <td>12</td>
              <td>Kirk Hinrich</td>
              <td>G</td>
              <td>6-4</td>
              <td>190</td>
            </tr>
            <tr>
              <td>
                <div className='checkedinner'>
                  <input type="checkbox" id="check1"></input>
                </div>
              </td>
              <td>48</td>
              <td>Nazr Mohammed</td>
              <td>C</td>
              <td>6-10</td>
              <td>250</td>
            </tr>
            <tr>
              <td>
                <div className='checkedinner'>
                  <input type="checkbox" id="check1"></input>
                </div>
              </td>
              <td>13</td>
              <td>Joakim Noah</td>
              <td>C</td>
              <td>6-11</td>
              <td>232</td>
            </tr>
            <tr>
              <td>
                <div className='checkedinner'>
                  <input type="checkbox" id="check1"></input>
                </div>
              </td>
              <td>77</td>
              <td>Vladimir Radmanovic</td>
              <td>F</td>
              <td>6-10</td>
              <td>235</td>
            </tr>
            <tr>
              <td>
                <div className='checkedinner'>
                  <input type="checkbox" id="check1"></input>
                </div>
              </td>
              <td>2</td>
              <td>Nate Robinson</td>
              <td>G</td>
              <td>5-9</td>
              <td>180</td>
            </tr>
            <tr>
              <td>
                <div className='checkedinner'>
                  <input type="checkbox" id="check1"></input>
                </div>
              </td>
              <td>1</td>
              <td>Derrick Rose</td>
              <td>G</td>
              <td>6-3</td>
              <td>190</td>
            </tr>
            <tr>
              <td>
                <div className='checkedinner'>
                  <input type="checkbox" id="check1"></input>
                </div>
              </td>
              <td>25</td>
              <td>Marquis Teague</td>
              <td>G</td>
              <td>6-2</td>
              <td>190</td>
            </tr>
          </tbody>
        </table>
        <div className='pagination'>
          <div>
            <button></button>
            <input type='text'></input>
            <div className='totalpagenum'>900</div>
            <button></button>
          </div>
        </div>
        </div>
        <h1>Modal</h1>
        <div>
          <ModalBtn onClick={openModalHandler}
        // 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다. 
        > Log in
          {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 ModalBtn의 내부 텍스트가 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현 */}
        </ModalBtn>
        {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현 */}
        {isOpen ? 
        <ModalBackdrop onClick={openModalHandler}>
          {/* event 버블링을 막는 메소드  */}
            <ModalView onClick={(e) => e.stopPropagation()}>
              <div className='noticetit'>Notice</div>
              <ExitBtn onClick={openModalHandler} className='closebtn'></ExitBtn>
              <div className='desc'>
                <div className='tit'>***님 환영합니다.</div>
                <div className='text'>원활한 사이트 이용을 위하여<br></br>추가등록사항을 입력해 주시기 바랍니다.</div>
              </div>
              <div className='conformbtnwrap'>
                <ContirmBtn onClick={openModalHandler} className='conformbtn'>OK</ContirmBtn>
              </div>
            </ModalView>
          </ModalBackdrop>
          : null
        }
        </div>
      </div>
    </div>
    <div className='shadowbox'>
      <div className='gnb'>Log-in</div>
      <div className='complete formwrap'>
        <div className='forminner'>
          <h1>Join</h1>
          <div className='buttoninner'>
            <button className='type_line'>Confirm</button>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Form;
