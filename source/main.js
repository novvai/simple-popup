import { e, findIn } from "./helpers";
import { ComponentLoader } from "./component";

require("./main.less");

class SimplePopup {
    constructor(template, fields = {},overlay = true) {
        this.hasOverlay = overlay;
        this.component = new ComponentLoader();
        this.template = template;
        this.componentVariables = fields;

        this.bootstrap();
    }

    /** 
     * 
     */
    bootstrap() {
        this.container = e('body');
    }
    addHandle(handleName, callback){
        if(this.hasOwnProperty(handleName)){
            return this;
        }
        this[handleName] = callback;

        return this;
    }
    
    make() {
        this.makeOverlay();
        this.renderContent();
        this.render();
    }

    render(){
        this.container.insertBefore(this.overlay, this.container.firstChild);
    }
    /** PRIVATE */
    makeOverlay() {
        this.overlay = document.createElement('div');
        this.overlay.classList.add('bi-overlay');
        (this.hasOverlay) ? this.overlay.classList.add('bi-black') : null;
        this.overlay.addEventListener('click', this.close.bind(this));
    }

    renderContent() {
        this.component.load(this.template).then((result) => {
            this.template = result;
            this.makeFromTemplate();
            this.addToOverlay();
            this.attachHandlers()
        })
    }

    makeFromTemplate() {
        for (const key in this.componentVariables) {
            this.template = this.template.replace(`|::|${key}|::|`, this.componentVariables[key]);
        }
    }

    attachHandlers() {
        let handlerElements = findIn(this.overlay, '[data-bi-trigger]');
        if(handlerElements === null){
            return;
        }

        if (handlerElements.length === undefined){
            handlerElements = [handlerElements];
        }

        handlerElements.forEach(handler => {
            const handlerMethod = handler.getAttribute('data-bi-trigger');
            try{
                handler.addEventListener('click', this[handlerMethod].bind(this));
            }catch(e){
                console.error(`The method "${handlerMethod}" that you try to invoke does not exist, you can add such behaviour using .addHandler(handlerName, callback)`);
            }
        });
    }

    addToOverlay(){
        this.overlay.innerHTML = this.template;
    }

    close(event){
        event.stopPropagation();
        if(event.target !== event.currentTarget){
            return null;
        }
        this.container.removeChild(this.overlay);
    }
}

export default SimplePopup