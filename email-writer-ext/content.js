console.log("Email Writer Extension - Content Script Loaded");

function createAIButton() {
    
}

function findComposeToolbar() {

    const selectors = [
        '.btC', '.aDh', '[role="toolbar"]', '.gU.Up'
    ];
    for (const selector of selectors) {

        const toolbar = document.querySelector(selector);
        if(toolbar){
            return toolbar;
        }
        return null;
     
    }

}

function injectButton(){

    const existingButton = document.querySelector('.ai-reply-button');
    if(existingButton) existingButton.remove();

    const toolbar = findComposeToolbar();
    if(toolbar){
        console.log("Toolbar not found");
        return;
    }
    console.log("Toolbar found, creating AI button");
    const button = createAIButton();
    button.classList.add('ai-reply-button');

    button.addEventListener('click', async () => {

    });

    toolbar.insertBefore(button, toolbar.firstChild);

}

const observer = new MutationObserver((mutations) => {
    for(const mutation of mutations ){
        const addedNodes = Array.from(mutation.addedNodes);
        const hasComposeElements = addedNodes.some(node => node.nodeType === Node.ELEMENT_NODE && (node.matches('.aDh, .btC, [role="dialog"]')
    || node.querySelector('.aDh, .btC, [role="dialog"]')));

    if(hasComposeElements){
        console.log("Compose Window Detected");
        setTimeout(injectButton, 500);
    }

    }
});


observer.observe(document.body, {
    childList: true,
    subtree: true
})
