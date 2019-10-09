import React from 'react';
import Button from "@material-ui/core/Button";
import './App.css';
import refinery from "./service/refinery";

function App() {
    const onButtonClick = () => {
        refinery.run(320);
    };

    const exampleTask = {generation: 0, id: "d495001d-5199-4206-880b-1b85c41a4ce7", status: "queued"};

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <Button color="primary" variant="contained" onClick={onButtonClick}>Run</Button>
        </div>
    );
}

export default App;
