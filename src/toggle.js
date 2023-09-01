import React, { useState } from 'react';
import './toggle.css';
import img1 from '../src/images/image1.jpg';
import img2 from '../src/images/image3.jpg';


const ToggleSwitch = () => {
  const [showimgone, setshowimageone] = useState(true)
  const [showimgtwo, setshowimagetwo] = useState(false)
  const onclickone = () => {
    setshowimagetwo(false)
    setshowimageone(true)
  }
  const onclicktwo = () => {
    setshowimagetwo(true)
    setshowimageone(false)
  }
  return (
    <><div className="toggleContainer">
      <label className="toggleSwitch nolabel" onClick={() => { }}>
        <input type="checkbox" />
        <a></a>
        <span>
          <span className="left-span" onClick={onclickone}>Men</span>
          <span className="right-span"  onClick={onclicktwo}>Women</span>
        </span>
      </label>
      <div className='mytxt'>categories
      </div>
      <div className='container'>
        {showimgone ?
          <><img className='img12' src={img1} />
      
            </> : null}
        {showimgtwo ?
          <><img className='img13' src={img2} />
            <div className='imgtxt1'>Kurthi</div></> : null}
      </div>
    </div></>
  );
};
export default ToggleSwitch;
