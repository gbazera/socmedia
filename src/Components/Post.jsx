import { useEffect, useState } from 'react';
import moment from 'moment';

function Post(props) {
    const [author, setAuthor] = useState({})

    const dateConverter = (startDate, timeEnd) => {
        const newStartDate= new Date(startDate);
        const newEndDate=new Date(timeEnd);
        let result=moment(newStartDate).diff(newEndDate,'hours');
        return result;
    }

    useEffect(()=>{
        const resolveData=async()=>{
            var data = await props.author_promise;
            setAuthor(data);
        }

        resolveData()
    })

    return(
        <article className="post">
            <img src={props.pfp} alt="" className="pfp" />
            <div className="right">
                <div className="top">
                    <p className="display_name">{author.display_name}</p>
                    <a href="#1" className="username">@{author.username}</a>
                    <a className="dot">·</a>
                    <a href="#1" className="date_added">{-dateConverter(props.date_added, new Date())}h</a>
                </div>
                <p className="content">{props.content}</p>
                <button className={`like-btn ${props.liked ? "active" : ""}`}><span>{props.liked ? 'unlike' : 'like'}</span> · {props.like_amount}</button>
            </div>
        </article>
    )
}

export default Post;