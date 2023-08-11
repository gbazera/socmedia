import './App.css';
import Nav from './Components/Nav';
import NewPost from './Components/NewPost';
import Post from './Components/Post';

import pfp0 from './img/pfp0.jpg';
import pfp1 from './img/pfp1.jpg';

import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([{}])

  useEffect(()=>{
    fetch('/posts').then(
      response => response.json()
    ).then(
      data => {
        setPosts(data)
      }
    )
  }, [])

  const getAuthor=(id)=>{
    return new Promise(async (resolve, reject) => {
        await fetch('/users/' + id).then(
          response => response.json()
        ).then(
          data => {
            resolve(data)
          }
        )
    })
  }

  var test

  getAuthor('64d55721f77374e8e768d630').then((res)=>{
    test = res
  })

  console.log(test)

  return (
    <div className="App">
      <Nav />
      <NewPost />
      <section className="posts">
        {(typeof posts === 'undefined') ? (
          <p>loading..</p>
        ): (
          posts.map((post, i) => (
            <Post pfp={pfp0} display_name={getAuthor('64d55721f77374e8e768d630').toString()} like_amount={post.liked_by ? post.liked_by.length : '0'} date_added={post.date_added} content={post.content} />
          ))
        )}
        {/* <Post pfp={pfp0} username='djkhaled' display_name='DJ Khaled' like_amount='785' date_added='5m' content='LETS GO GOLFING' />
        <Post pfp={pfp1} username='trvisXX' display_name='Travis Scott' like_amount='12.5k' date_added='17h' content='UTOPIA OUT NOW' liked /> */}
      </section>
    </div>
  );
}

export default App;
