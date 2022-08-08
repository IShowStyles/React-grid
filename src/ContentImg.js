import {useParams} from "react-router-dom";


export default function ContentImg (props){
    let source = props.data;
    let Jstype = "framework";
    if(source.alt === 'React'){
        Jstype = "Library";
    }else{
        Jstype = "framework";
    }

    let {url} = useParams();






    return(
        <div className="main-inner">
            <h2 className="main__subtitle">
                Most Popular JS Framework
            </h2>
            <a className="main-url" href={source.link}>
                <img className="main-img"
                     width={200}
                     height={200}
                     src={source.img}
                     title={`${source.alt} JS ${Jstype}`}
                     alt={source.alt}/>
            </a>

            <span className={"main__title"} >{source.alt}</span>

        </div>
    )
}