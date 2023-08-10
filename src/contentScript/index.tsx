import React from "react";
import { createRoot } from "react-dom/client";
import '../assets/tailwind.css'
import ExtensionFAB from "./ExtensionFAB";
import ReactDOM from "react-dom";

function init(): void {
    let appContainer: HTMLDivElement | null = null;
    document.addEventListener('click', function (event) {
        const target = event.target as HTMLElement;
        console.log('Click:', target.tagName.toLowerCase());
        if (
            (target.tagName.toLowerCase() === 'input' && (target as HTMLInputElement).type === 'text') ||
            target.tagName.toLowerCase() === 'textarea'
          ) {
        if (appContainer) {
            ReactDOM.unmountComponentAtNode(appContainer);
            appContainer.remove();
        }
        
        const rect = target.getBoundingClientRect();

        console.log('Element clicked:', event.target);
        appContainer = document.createElement('div');
        if (!appContainer) {
            throw new Error("Can not find AppContainer");
        }
        appContainer.style.position = 'absolute';
        appContainer.style.left = `${window.scrollX + rect.right}px`;
        appContainer.style.top = `${window.scrollY + rect.bottom}px`;
        document.body.appendChild(appContainer);
        const shadowRoot = appContainer.attachShadow({ mode: 'open' });
        console.log(appContainer);
        const root = createRoot(shadowRoot)
        root.render(<ExtensionFAB/>);
    } else if (appContainer) {
        ReactDOM.unmountComponentAtNode(appContainer);
        appContainer.remove();
        appContainer = null;
    }
      });

    
    
}

init();