import React from "react";
import { createRoot } from "react-dom/client";
import '../assets/tailwind.css'
import ExtensionFAB, {ExtensionFAB2} from "./ExtensionFAB";
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
        textfileInput("test keywords");
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


function textfieldRender() {
    // Find all text input fields and textareas on the page
    const textFields = document.querySelectorAll(
      'input, textarea'
    ) as NodeListOf<HTMLElement>;
  
    textFields.forEach((textField) => {
      // Get the bounding rectangle of the text field
      const rect = textField.getBoundingClientRect();
  
      // Create a container div at the bottom-left corner of the text field
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = `${window.scrollX + rect.left}px`;
      container.style.top = `${window.scrollY + rect.bottom}px`;
      document.body.appendChild(container);
  
      // Render your React component inside the container
      document.body.appendChild(container);
      const shadowRoot = container.attachShadow({ mode: 'open' });
      console.log(container);
      const root = createRoot(shadowRoot)
      root.render(<ExtensionFAB2/>);
    });
  }
  
  function textfileInput(textToInput) {
    console.log("input start");
    // Find all text input fields and textareas on the page
    const textFields = document.querySelectorAll(
      'input, textarea'
    );
  
    textFields.forEach((textField: HTMLInputElement | HTMLTextAreaElement) => {
      // Input the specified text into the text field
      textField.value = textToInput;
  
      // Dispatch an input event to notify any listeners that the value has changed
      const event = new Event('input', { 'bubbles': true, 'cancelable': true });
      textField.dispatchEvent(event);
    });
  }
  

textfieldRender();
textfileInput("test");
init();