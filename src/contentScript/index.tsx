import React from "react";
import { createRoot } from "react-dom/client";
import '../assets/tailwind.css'
import ExtensionFAB from "./ExtensionFAB";

function init(): void {
    const appContainer = document.createElement('div')
    document.body.appendChild(appContainer)
    const shadowRoot = appContainer.attachShadow({ mode: 'open' })
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = createRoot(shadowRoot)
    root.render(<ExtensionFAB />);
}

init();