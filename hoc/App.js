import React, { useEffect, useState } from 'react';


export const App = () => {

  const box = {
    margin: "4% 10%",
    width: "75%",
    fontFamily: "'Courier New', Courier, monospace",
    fontSize:'120%',
  };

  
  const [post, setPost] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPost(json));
  });

  return (
    <div style={box}>
     
          {post?.map((item) => (<>
            <h3>{item.title}</h3>
            <p>{item.body}</p>

          </>))}
      
    </div>
  );
};
