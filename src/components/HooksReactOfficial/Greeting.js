import React from 'react';
import Greet from './FunctionalComponent/Greeting';

export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Mary',
            surname: 'Poppins',
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSarNameChange = this.handleSarNameChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    handleSarNameChange(e) {
        this.setState({
            surname: e.target.value
        })
    }

    render() {
        return (
            <>
                <section>
                    <label htmlFor="">
                        Name
                </label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />

                    <label htmlFor="">
                        Sarname
                </label>
                    <input
                        type="text"
                        value={this.state.surname}
                        onChange={this.handleSarNameChange}
                    />


                </section>
                <Greet />
            </>

        )
    }
}
