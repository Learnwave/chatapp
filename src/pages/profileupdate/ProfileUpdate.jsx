import React, { useState } from 'react'
import "./ProfileUpdate.css"
import assets from '../../assets/assets'
const ProfileUpdate = () => {

  const [image,setImage] = useState(false);

  return (
    <div className='profile'>
          <div className="profile-container">
            <form>
              <h3>Profile Detail</h3>
              <label htmlFor="avatar">
                <input  onChange={(e)=>setImage(e.target.files[0])} type="file" name="" id="avatar" accept='.png, .jpg,.jpeg' hidden />
                <img src={image ? URL.createObjectURL(image) : assets.avatar_icon} alt="" />
                <p>Upload profile image</p>
              </label>
              <input type="text" placeholder='Your Name' required name="" id="" />
              <textarea name="" placeholder='Write Profile Bio'  id=""></textarea>
              <button type='submit'> save </button>
            </form>
            <img className='profile_pic' src={image ? URL.createObjectURL(image) : assets.logo_icon} alt="" />
          </div>
    </div>
  )
}

export default ProfileUpdate