import {Link} from "react-router-dom";

export default function Aside(){
    return(
        <>
            <aside className="aside">
                <div className="container--sm">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/react">
                                        React
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/angular">
                                        Angular
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/vue">
                                        Vue
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Back
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                </div>
            </aside>
        </>
    )
}