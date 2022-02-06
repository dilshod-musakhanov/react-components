import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./components/Button/Button";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";


const App = () => {
    return (
        <div>
            {/*
            <Button mode="primary" size="normal">Primary</Button>
            <Button mode="secondary" size="large">Secondary</Button>
            <Button mode="success" size="small" className="someClass" disabled>Success</Button>
            <Button counter={5}>Counter</Button>
            */}
            <ButtonGroup>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>

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

