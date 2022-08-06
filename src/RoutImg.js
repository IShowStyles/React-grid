import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ContentImg} from "./ContentImg"
import {Home} from "./Home"
import Aside from "./Aside";

export default function RoutImg() {

    const sourceImages = [
        {
            img: "./img/react.svg",
            alt: "React",
        },
        {
            img: "./img/angular.png",
            alt: "Angular"
        },
        {
            img: "./img/vue.png",
            alt: "Angular"
        },

    ]

    return (
        <>
                <Router>
                    <Aside/>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/react" element={<ContentImg data={sourceImages[0]}/>}/>
                        <Route path="/angular" element={<ContentImg data={sourceImages[1]}/>}/>
                        <Route path="/vue" element={<ContentImg data={sourceImages[2]}/>}/>
                    </Routes>
                </Router>
        </>
    )
}