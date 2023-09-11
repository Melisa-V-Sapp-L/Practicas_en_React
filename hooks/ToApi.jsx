import React, { useEffect, useState } from 'react';


export const ToApi = () => {

  const box = {
    margin: "4% 10%",
    width: "75%",
    fontFamily: 'Century Gothic, sans-serif',
    fontSize:'120%',
  };

  const table = { border: '1px solid black',}

  const [all, setAll] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setAll(json));
  });

  return (
    <div style={box}>
      <table style={table}>
        <thead>
          <tr>
            <th style={table}>User Id</th>
            <th style={table}>Id</th>
            <th style={table}>Title</th>            
          </tr>
        </thead>
        <tbody>
          {all?.map((item) => (
            <tr>
              <th style={table}>{item.userId}</th>
              <td style={table}>{item.id}</td>
              <td style={table}>{item.title}</td>              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};