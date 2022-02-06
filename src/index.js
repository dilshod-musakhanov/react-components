import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./components/Button/Button";


const App = () => {
    return (
        <div>
            <Button mode="primary" size="normal">Primary</Button>
            <Button mode="secondary" size="large">Secondary</Button>
            <Button mode="success" size="small">Success</Button>
        </div>
    )
};

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

