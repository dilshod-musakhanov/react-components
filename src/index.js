import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./components/Button/Button";


const App = () => {
    return (
        <div>
            <Button> Button 1</Button>
            <Button> Button 2</Button>
            <Button> Button 3</Button>
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

