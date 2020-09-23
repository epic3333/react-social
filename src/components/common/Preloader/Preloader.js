import preloader from "../../../assets/images/loader-small.gif";
import React from "react";

let Preloader = (props) => {
    return (
        <div style={ {backgroundColor: 'white', width: '10px'} }>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;