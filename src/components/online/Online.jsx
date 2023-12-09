import './online.css';

export default function Online({users}) {
  return (
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={users.profilePicture} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">{users.username}</span>
        </li>
  )
}
