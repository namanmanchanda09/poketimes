import React from 'react';
import Rainbow from "../hoc/Rainbow";

let About = () =>{
    return(
        <div className='container'>
            <h4 className='center'>About</h4>
            <p>This is the About.</p>
        </div>
    )
}

export default Rainbow(About);

