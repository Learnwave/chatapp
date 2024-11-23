import React from "react";
import "./LeftSideBar.css";
import assets from "../../assets/assets";
const LeftSideBar = () => {
  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img className="logo" src={assets.logo} alt="" />
          <div className="menu">
            <img src={assets.menu_icon} alt="" />
            <div className="sub-menu ">
              <p>Edit profile</p>
              <hr />
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder="Search here..." name="" id="" />
        </div>
      </div>
      <div className="li-list">


       {Array(12).fill("").map((item,index)=>(
         <div key={index} className="friends">
         <img src={assets.profile_img} alt="" />
         <div>
           <p>Richard</p>
           <span>Hello how are you?</span>
         </div>
       </div>
       ))}


      </div>
    </div>
  );
};

export default LeftSideBar;
