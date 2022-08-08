import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import ContentImg from "./ContentImg"
import {Main} from "./Main";

import {BrowserRouter as Router , Route, Routes} from "react-router-dom";

export default function App() {


    const sourceImages = [
        {
            img: "./img/react.svg",
            alt: "React",
            link : 'https://reactjs.org/'
        },
        {
            img: "./img/Angular.png",
            alt: "Angular",
            link : 'https://angular.io/'
        },
        {
            img: "./img/vue.png",
            alt: "Vue",
            link : 'https://vuejs.org/'
        },

    ]


    return (
        <>
            <Header/>
            <Router>
            <Routes>
                <Route path={"/"} element={<Main/>}>
                    <Route index exact path="/" element={<Home/>}/>
                    <Route path="/react" element={<ContentImg data={sourceImages[0]}/>}/>
                    <Route path="/angular" element={<ContentImg data={sourceImages[1]}/>}/>
                    <Route path="/vue" element={<ContentImg data={sourceImages[2]}/>}/>
                </Route>
            </Routes>
        </Router>
            <Footer/>
        </>
    );
}

//       <main className="Main">
//        <Router>

//             </main>