import './App.css';
import Nav from './Components/Nav';
import NewPost from './Components/NewPost';
import Post from './Components/Post';

import pfp0 from './img/pfp0.jpg';
import pfp1 from './img/pfp1.jpg';

function App() {
  return (
    <div className="App">
      <Nav />
      <NewPost />
      <section className="posts">
        <Post pfp={pfp0} username='djkhaled' display_name='DJ Khaled' like_amount='785' date_added='5m' content='LETS GO GOLFING' />
        <Post pfp={pfp1} username='trvisXX' display_name='Travis Scott' like_amount='12.5k' date_added='17h' content='UTOPIA OUT NOW' liked />
      </section>
    </div>
  );
}

export default App;
