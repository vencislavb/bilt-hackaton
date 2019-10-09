import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import './App.css';
import refinery from "./service/refinery";
import SolutionsGrid from "./components/solutions-grid";

function App() {
    const [results, setResults] = useState();

    const isComplete = results && results.currentGeneration === results.maxGeneration;

    const onButtonClick = () => {
        refinery.run(320);
    };

    const onGetResultsClick = () => refinery.results(exampleTask.id).then(setResults);

    const exampleTask = {generation: 0, id: "d495001d-5199-4206-880b-1b85c41a4ce7", status: "queued"};

    return (
        <div className="App">
            <header className="App-header">
            </header>
            <Button color="primary" variant="contained" onClick={onButtonClick}>Run</Button>
            <Button color="primary" variant="contained" onClick={onGetResultsClick}>Get
                Results</Button>

            {results && isComplete && (
                <SolutionsGrid solutions={results.hallOfFame.solutions}/>
            )}
        </div>
    );
}

export default App;
