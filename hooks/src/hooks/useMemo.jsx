import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import P from 'prop-types';

const Post = ({ post }) => {
  return (
    <div className="post" key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function useMemoComp() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => <Post post={post} key={post.id} />)
        );
      }, [posts])}

      {posts.length < 0 && <p>Post ainda não existem...</p>}
    </div>
  );
}

export default useMemoComp;
