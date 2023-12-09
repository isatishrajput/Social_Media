import './userInfo.css';

export default function UserInfo({users}) {
  return (
    <>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src={users.profilePicture} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">{users.username}</span> 
            </div>
          </div>
    </>
  )
}
