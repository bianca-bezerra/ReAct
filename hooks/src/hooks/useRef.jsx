import React, { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import P from 'prop-types';

const Post = ({ post, handleClick }) => {
  return (
    <div className="post" key={post.id}>
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
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
  handleClick: P.func,
};

function useRefComp() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const contador = useRef(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, [value]);

  useEffect(() => {
    contador.current++;
  });

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h1>Renderizou {contador.current}x</h1>
      <p>
        <input
          ref={inputRef}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => (
            <Post post={post} key={post.id} handleClick={handleClick} />
          ))
        );
      }, [posts])}

      {posts.length < 0 && <p>Post ainda não existem...</p>}
    </div>
  );
}

export default useRefComp;
