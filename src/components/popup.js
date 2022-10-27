import './popup.css'
import React from 'react';
import {ReactComponent as CloseIcon} from "../close.svg"


function Popup(props){
    return(props.trigger)?(
        <div className = "popup" >
            <div className="popup-inner">
                <button className="close-btn" onClick={()=>props.setTrigger(false)}><CloseIcon/></button>
                {props.children}
            </div>
        </div>
    ):"";
}
export default Popup;