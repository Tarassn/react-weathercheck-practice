import React from 'react';


/*class Titles extends React.Component{
    render(){
        return(
            <div>
                <h1>Weather Finder</h1>
                <p>Find out about weather!</p>
            </div>
        )
    }
}*/

const Titles = () =>(
    <div>
        <h1 className='title-container__title'>Weather check</h1>
        <p className='title-container__subtitle'>Check out the weather!</p>
    </div>
);

export default Titles;