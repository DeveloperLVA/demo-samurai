import React from 'react';
import preloader from '../../../assets/images/Spinner-1s-200px.svg';

let Preloader = (props) => {
    return <div style={{backgroundColor: (0, 125, 215, 0)}}>
        <img src={preloader}/>
    </div>
}


export default Preloader;