import React from "react";
import { createRoot } from "react-dom/client";
import '../assets/tailwind.css'
import Options from "./options";

function init(): void {
    const appContainer = document.createElement('div');
    appContainer.id = 'keywords-extension-root';
    document.body.appendChild(appContainer);
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = createRoot(appContainer);
    console.log(appContainer);
    root.render(<Options />);
}

init();