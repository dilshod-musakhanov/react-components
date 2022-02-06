import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return <h1>Hi, I am component</h1>
};

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

