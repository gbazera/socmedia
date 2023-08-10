import axios from 'axios';
import { useEffect, useState } from 'react';

function Post(props) {
    const likes = props.like_amount

    return(
        <article className="post">
            <img src={props.pfp} alt="" className="pfp" />
            <div className="right">
                <div className="top">
                    <p className="display_name">{props.display_name}</p>
                    <a href="#1" className="username">@{props.username}</a>
                    <a className="dot">·</a>
                    <a href="#1" className="date_added">{props.date_added}</a>
                </div>
                <p className="content">{props.content}</p>
                <button className={`like-btn ${props.liked ? "active" : ""}`}><span>{props.liked ? 'unlike' : 'like'}</span> · {props.like_amount}</button>
            </div>
        </article>
    )
}

export default Post;