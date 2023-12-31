import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import Tabs from "./tabs";
import '../assets/tailwind.css'

function init(): void {
    const appContainer = document.createElement('div')
    const shadowRoot = appContainer.attachShadow({ mode: 'open' })
    document.body.appendChild(appContainer)
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = createRoot(shadowRoot)
    root.render(<Router><Tabs /></Router>);
}

init();