import { useState } from 'react';
import './Topbar.css';
import { Search, Person,Chat,Notifications} from '@mui/icons-material';

export default function Topbar(props) {

  const [value, setValue] = useState('ProfilePage')

  let pageHome = ()=>{
    setValue('Homepage')
  }

  let pageProfile = () =>{
    setValue('ProfilePage')
  }
  props.getPage(value)

  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">SatishTech</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon'/>
          <input type="text" 
          placeholder='search for friends, post or videos' className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span onClick={pageHome} className="topbarLink">Homepage</span>
          <span onClick={pageProfile} className="topbarLink">ProfilePage</span>
        </div>
      <div className="topbarIcon">
        <div className="topbarIconItem">
          <Person/>
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Chat/>
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Notifications/>
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
        <img src="./assets/profile_pic/women3.webp" alt="This is Womens Profile" className="topbarImg" />
      </div>
    </div>
  )
}

