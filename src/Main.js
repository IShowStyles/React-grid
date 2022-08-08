import {Outlet} from "react-router-dom";

import Aside from "./Aside";

export function Main() {

    return (
        <>
            <main className="main">
                <Outlet/>
            </main>
            <Aside/>
        </>
    )
}