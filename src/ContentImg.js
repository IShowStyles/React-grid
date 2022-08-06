import {useLocation } from "react-router-dom";

export  function ContentImg (props){
    let {url} = useLocation();

    let source = props.data;

    return(
        <div>
            <h2>
                {url}
            </h2>
            <img src={source.img} alt={source.alt}/>
        </div>
    )
}