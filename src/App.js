import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import './App.css';
import refinery from "./service/refinery";
import SolutionsGrid from "./components/solutions-grid";
import {CircularProgress, FormHelperText, Input, InputLabel} from "@material-ui/core";

function App() {
    const [results, setResults] = useState();
    const [loading, setLoading] = useState(false);
    const [floorHeight, setFloorHeight] = useState(240);

    const pollForResults = (taskId) => {
        refinery.results(taskId)
            .then(results => {
                const { currentGeneration, maxGeneration } = results;
                if (currentGeneration === maxGeneration) {
                    setLoading(false);
                    setResults(results);
                } else {
                    setTimeout(() => pollForResults(taskId), 1000);
                }
            });
    };

    const onRunClick = () => {
        setLoading(true);
        let taskId;
        refinery.run(floorHeight).then(task => {
            taskId = task.id;
            pollForResults(taskId);
        });
    };

    const onFloorHeightChange = (event) => {
        setFloorHeight(event.target.value);
    };

    // const onGetResultsClick = () => refinery.results(exampleTask.id).then(setResults);
    //
    // const exampleTask = {generation: 0, id: "d495001d-5199-4206-880b-1b85c41a4ce7", status: "queued"};

    return (
        <div className="App" style={{ padding: 40 }}>
            <InputLabel htmlFor="floorHeight">Floor height</InputLabel>
            <Input id="floorHeight" aria-describedby="my-helper-text"
                   onChange={onFloorHeightChange}
                   value={floorHeight}/>
            <FormHelperText>cm</FormHelperText>

            <div style={{ marginTop: 30 }}>
                <Button color="primary" variant="contained" disabled={loading} onClick={onRunClick}>Run</Button>
            </div>

            {results && !loading && (
                <SolutionsGrid solutions={results.hallOfFame.solutions}/>
            )}

            {loading && (
                <div style={{ margin: '40 auto'}}>
                    <CircularProgress size={70} />
                </div>
            )}
        </div>
    );
}

export default App;
