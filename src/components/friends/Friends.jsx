import './friends.css';

export default function Friends({friend}) {
  return (
        <li className="sidebarFriend">
                <img src={friend.profilePicture} alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">{friend.username}</span>
        </li> 
    
  )
}
