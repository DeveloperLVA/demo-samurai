import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' />
     <span> {props.message}, </span>
     <br/>
     <span>like </span>{props.likesCount}
       
    </div>   
  )
}

export default Post;
