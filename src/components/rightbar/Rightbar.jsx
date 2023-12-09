import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import Ad from '../ad/Ad';
import UserInfo from '../profileUserDetails/UserInfo';

export default function Rightbar({profile}) {

  const HomeRightbar = () =>{
    return(
      <>
         <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"> 
          <b>Ravi</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
      </div>
      <Ad/>
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map(u=>(
          <Online key={u.id} users ={u}/>
        ))}
      </ul>
      </>
    );
  }

  const ProfileRightbar = () =>{
    return (
        <>
        <h4 className='rightbarTitle'>User Information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City:</span>
              <span className="rightbarInfoValue">New York</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">From:</span>
              <span className="rightbarInfoValue">Madrid</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Relationship:</span>
              <span className="rightbarInfoValue">Single</span>
            </div>
          </div>
          <h4 className='rightbarTitle'>User friends</h4>
        {Users.map(u=>(
          <UserInfo key={u.id} users ={u}/>
        ))}
          <Ad/>
        </>
     )
  }

  return (
    <div className='rightbar'>
    {profile === 'ProfilePage'? <ProfileRightbar/>: <HomeRightbar/>}
    </div>
  )
}
