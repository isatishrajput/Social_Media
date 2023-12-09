import { useState } from 'react';
import Topbar from '../../components/Topbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './profile.css';

export default function Profile() {
    const [value, setPage] = useState('ProfilePage')

        let getPageValue = (Page)=>{
            setPage(Page)
        }

  return (
    <>
        <Topbar getPage = {getPageValue}/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="assets/profile_pic/OP6.jpg" alt="" className="profileCoverImg" />

                        <img src="assets/profile_pic/OP7.jpg" alt="" className="profileUserImg" />

                    </div>
                    <div className="profileInfo">
                        <h4 className='profileInfoName'>Monkey D Luffey</h4>
                        <span className='profileInfoDesc'>I'm gonna be the King Of The Pierates</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                <   Rightbar profile = {value}/>
                </div>
            </div>
        </div>
    </>
  )
}

