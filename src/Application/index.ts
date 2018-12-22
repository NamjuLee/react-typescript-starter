import { Canvas } from './Core/Canvas';
export class Application {

    public host: HTMLElement | undefined;

    canvas: Canvas;

    constructor(id: string) {
        console.log('id: ' + id + ', App Init!!!!!');

        const host = document.getElementById(id);
        if (host) {this.host = host; }
        
        this.canvas = new Canvas(this);
        console.log(this.canvas);
    }
}