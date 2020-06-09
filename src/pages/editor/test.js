import React, {Component} from 'react';

class Test extends Component {
    constructor(props) {
        super(props)
    }

    loadFile = event => {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        console.log('--- onChange input -----', output, output.src)
    }

    render() {
        return (
            <>
                <h1>This is image preview component</h1>
                <input type="file" accept="image/*" onChange={event => this.loadFile(event)}/>
                <img id="output"/>
            </>
        )
    }
}

export default Test;
