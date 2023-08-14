import { useState, useEffect } from 'react';

import Nav from '../Components/Nav';
import NewPost from '../Components/NewPost';
import Post from '../Components/Post';

import def_pfp from '../img/default-pfp.jpg';

function Home(props) {
    const [posts, setPosts] = useState([{}])

	useEffect(() => {
		fetch('/posts').then(
			response => response.json()
		).then(
			data => {
				setPosts(data)
			}
		)
	}, [])

	const getAuthor = async (id) => {
		const response = await fetch('/users/' + id);
		const data = await response.json();
		return data;
	}

    return (
        <div className="home">
            <Nav />
            <NewPost />
            <div className="posts">
                {(typeof posts === 'undefined') ? (
                    <p>loading..</p>
                ) : (
                    posts.map((post, i) => (
                        <Post pfp={def_pfp} author_promise={getAuthor(post.author)} like_amount={post.liked_by ? post.liked_by.length : '0'} date_added={post.date_added} content={post.content} />
                    ))
                )}
                {/* <Post pfp={pfp0} username='djkhaled' display_name='DJ Khaled' like_amount='785' date_added='5m' content='LETS GO GOLFING' />
                <Post pfp={pfp1} username='trvisXX' display_name='Travis Scott' like_amount='12.5k' date_added='17h' content='UTOPIA OUT NOW' liked /> */}
            </div>
        </div>
    )
}

export default Home;