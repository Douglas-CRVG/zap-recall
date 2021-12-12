import { useState } from "react";
import "./css/reset.css";
import "./css/styles.css"
import Home from "./home/Home";
import Application from "./application/Application";

export default function App() {
    const [appScreen, setAppScreen] = useState("Home");

    return (
        <>
            {appScreen === "Home"? <Home setAppScreen={setAppScreen} /> : <Application />}
        </>
    );
}