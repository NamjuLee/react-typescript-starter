import { TypescriptBasic } from './TypescriptBasic';
export class Application {
    constructor() {
        const div = document.getElementById('main');
        if (div) {
            div.style.background = '#0fff00';

        }
        console.log(div);
        console.log('App (React Typescirpt Starter) Init...');

        new TypescriptBasic();
    }
}