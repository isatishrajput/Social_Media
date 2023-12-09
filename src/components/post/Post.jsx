import './post.css';
import {MoreVert} from '@mui/icons-material';
import { Users } from '../../dummyData';
import { useState } from 'react';


export default function Post({post}) {

    let [like, setLike] = useState(post.like)
    let [isLike, setisLike] = useState(false)

    const likeCounter = ()=>{
        setLike(isLike ? like-1 : like+1);
        setisLike(!isLike);
    }
  
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u => u.id===post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">{Users.filter(u => u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className='postImg' src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="assets/like.png" onClick={likeCounter} alt="" className="LikeIcon" />
                    <img src="assets/heart.png"onClick={likeCounter} alt="" className="LikeIcon" />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
