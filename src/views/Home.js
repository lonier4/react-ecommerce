import React from 'react';

const Home = (props) => {

    const uppercase = () => {
        let bigsnake = [...props.snakes];
        bigsnake.sort();
        props.setSnakes(bigsnake);
    };

    const byesnake = () => {
        let lessnakes = [...props.snakes];
        lessnakes.pop();
        props.setSnakes(lessnakes)
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <h1>Home page </h1>
                <a id="sort-button" class="btn btn-warning" href="#" onClick={uppercase}>Sort Me</a>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Snakes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.snakes.map((snake, index) => {
                                return <tr key={index}>
                                    <td>{snake}</td>
                                </tr>
                            })
                        }
                        <a id="remove-button" class="btn btn-info d-block" href="#" onClick={byesnake}>Remove Snake</a>
                    </tbody>
                </table>
            </div>
        </div>
    )
};
export default Home;