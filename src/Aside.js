import {Link} from "react-router-dom";

export default function Aside() {
    return (
        <>
            <aside className="aside">
                <div className="container--sm">
                    <div className="aside-top">
                        <h3 className="aside-title">
                            Click me
                        </h3>
                        <span className="aside-title__img"></span>
                    </div>
                    <nav className="aside-nav">
                        <ul className="aside-nav__list">
                            <li className="aside-nav__list-elem">
                                <Link to="/react">
                                    React
                                </Link>
                            </li>
                            <li className="aside-nav__list-elem">
                                <Link to="/angular">
                                    Angular
                                </Link>
                            </li>
                            <li className="aside-nav__list-elem">
                                <Link to="/vue">
                                    Vue
                                </Link>
                            </li>
                            <li className="aside-nav__list-elem">
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