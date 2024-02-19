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
function List(props) {
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
        <div className='listinfo'>
          <div className='listinfotit'>
            <div>New</div>
            <p>Sign Language Sentence<br></br> Application Status</p>
          </div>
          <div className='infoFigure'>
            <em>Total</em>
            <strong>32</strong>
            <em>New</em>
            <strong>12</strong>
            <em>Proceeding</em>
            <strong>32</strong>
          </div>
        </div>
      </div>
      <div className='shadowbox'>
        <div className='tableinner'>
          <div className='liststate'>
            <h1>SL- Application List</h1>
            <div className='searchwrap'>
              <div className='searchbox'>
                <input type='search' className='listsearch' placeholder='Please enter your search'></input>
                <button className='submit'></button>
              </div>
              <button className='nolinebtn'>Reset</button>
              <button className='linebtn'>Search</button>
            </div>
          </div>
          <div className='statechange'>
            <div className='stateselect'>
              <div>
                <label className='statelabel'>Date</label>
                <div className='statevalue' onClick={dropdownHandler}>
                  All
                  {isOpen ? 
                    <DropdownView onClick={(e) => e.stopPropagation()}>
                      <div className='dropcont'>
                        <ul>
                          <li>All</li>
                          <li>SL Player</li>
                          <li>Video</li>
                        </ul>
                      </div>
                    </DropdownView>
                  : null
                }
                </div>
                <div className='statevalue'>All</div>
              </div>
              <div>
                <label className='statelabel'>Group</label>
                <div className='statevalue'>HE</div>
                <div className='statevalue'>LG.Com</div>
              </div>
              <div>
                <label className='statelabel'>Format</label>
                <div className='statevalue'>All</div>
              </div>
              <div>
                <label className='statelabel'>Country</label>
                <div className='statevalue'>All</div>
              </div>
              <div>
                <label className='statelabel'>Language</label>
                <div className='statevalue'>All</div>
              </div>
            </div>
            <div className='statecheck'>
              <label className='statelabel'>Status</label>
              <div>
                <div className='checkedinner'>
                  <input type="checkbox" id="check2"></input>
                  <label>Overall</label>
                </div>
                <div className='checkedinner'>
                  <input type="checkbox" id="check2"></input>
                  <label>Received</label>
                </div>
                <div className='checkedinner'>
                  <input type="checkbox" id="check2"></input>
                  <label>Subtitle review</label>
                </div>
                <div className='checkedinner'>
                  <input type="checkbox" id="check2"></input>
                  <label>Review request</label>
                </div>
                <div className='checkedinner'>
                  <input type="checkbox" id="check2"></input>
                  <label>Review complete</label>
                </div>
                <div className='checkedinner'>
                  <input type="checkbox" id="check2"></input>
                  <label>Composition complete</label>
                </div>
                <div className='checkedinner'>
                  <input type="checkbox" id="check2"></input>
                  <label>Video complete</label>
                </div>
                <div className='checkedinner'>
                  <input type="checkbox" id="check2"></input>
                  <label>Modification requested</label>
                </div>
                <div className='checkedinner'>
                  <input type="checkbox" id="check2"></input>
                  <label>Re-review requested</label>
                </div>
                <div className='checkedinner'>
                  <input type="checkbox" id="check2"></input>
                  <label>Save on hold</label>
                </div>
                <div className='checkedinner'>
                  <input type="checkbox" id="check2"></input>
                  <label>Word application</label>
                </div>
              </div>
            </div>
          </div>
          <div className='tableinfo'>
            <div className='table_top_info'>
              <div className='table_top_l'>
                <div className='total'>256</div>
                <div>Search Results</div>
              </div>
              <div className='table_top_r'>
                <div>
                  <label className='pagelabel'>items per page</label>
                  <div className='pagevalue'>50</div>
                </div>
                <button className='nolinebtn'>Apply</button>
                <button className='linebtn'>Bulk registration</button>
                <button className='nolinebtn'>Cancel</button>
                <button className='linebtn'>Delete</button>
              </div>
            </div>
          </div>
          <table className='table_type01'>
            <colgroup>
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
            </colgroup>
            <caption className='hidden'>Search Results</caption>
            <thead>
              <tr>
                <th>
                  <div className='checkedinner'>
                    <input type="checkbox" id="check1"></input>
                  </div>
                </th>
                <th>
                  No.
                  <button className='sortbtn'></button>
                </th>
                <th>
                  Title
                  <button className='sortbtn'></button>
                </th>
                <th>
                  Format
                  <button className='sortbtn'></button>
                </th>
                <th>
                  Group
                  <button className='sortbtn'></button>
                </th>
                <th>
                  Country/Language
                  <button className='sortbtn'></button>
                </th>
                <th>
                  Date
                  <button className='sortbtn'></button>
                </th>
                <th>
                  Applicant
                  <button className='sortbtn'></button>
                </th>
                <th>
                  SL-Expert
                  <button className='sortbtn'></button>
                </th>
                <th>
                  Status
                  <button className='sortbtn'></button>
                </th>
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
                <td>3528</td>
                <td>
                  CES Commercial(Local)
                  <span className='mpeg' 
                    onMouseOver={() => setIsHover(1)}
                    onMouseOut={() => setIsHover(0)}>
                  </span>
                  {isHover ? 
                    <HoverView>
                      <div className='dropcont'>
                        title.mpeg
                      </div>
                    </HoverView>
                  : ("")
                }
                </td>
                <td>SL Player</td>
                <td>Admin</td>
                <td>KR / KSL</td>
                <td>24.10.09 / 24.10.18</td>
                <td>LG Park</td>
                <td>LG Park</td>
                <td>Modification requested</td>
                <td><button className='register_btn green'></button></td>
              </tr>
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
                <td>8</td>
                <td>Marco Belinelli</td>
                <td>G</td>
                <td>6-5</td>
                <td>6-5</td>
                <td><button className='register_btn red'></button></td>
              </tr>
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
                <td>8</td>
                <td>Marco Belinelli</td>
                <td>G</td>
                <td>6-5</td>
                <td>6-5</td>
                <td><button className='register_btn blue'></button></td>
              </tr>
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
                <td>8</td>
                <td>Marco Belinelli</td>
                <td>G</td>
                <td>6-5</td>
                <td>6-5</td>
                <td><button className='register_btn gray'></button></td>
              </tr>
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
                <td>8</td>
                <td>Marco Belinelli</td>
                <td>G</td>
                <td>6-5</td>
                <td>6-5</td>
                <td><button className='register_btn'></button></td>
              </tr>
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
                <td>8</td>
                <td>Marco Belinelli</td>
                <td>G</td>
                <td>6-5</td>
                <td>6-5</td>
                <td><button className='register_btn'></button></td>
              </tr>
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
                <td>8</td>
                <td>Marco Belinelli</td>
                <td>G</td>
                <td>6-5</td>
                <td>6-5</td>
                <td><button className='register_btn'></button></td>
              </tr>
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
                <td>8</td>
                <td>Marco Belinelli</td>
                <td>G</td>
                <td>6-5</td>
                <td>6-5</td>
                <td><button className='register_btn'></button></td>
              </tr>
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
                <td>8</td>
                <td>Marco Belinelli</td>
                <td>G</td>
                <td>6-5</td>
                <td>6-5</td>
                <td><button className='register_btn'></button></td>
              </tr>
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
                <td>8</td>
                <td>Marco Belinelli</td>
                <td>G</td>
                <td>6-5</td>
                <td>6-5</td>
                <td><button className='register_btn'></button></td>
              </tr>
            </tbody>
          </table>
          <div className='pagination'>
            <div>
              <button className='nopagebtn'></button>
              <input type='text'></input>
              <div className='totalpagenum'>900</div>
              <button className='pagebtn'></button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
    
  );
}

export default List;