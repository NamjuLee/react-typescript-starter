import { Canvas } from './Core/Canvas';
import { Renderer } from './Core/Renderer';

import { VisA } from './Definition/VisA';

export class Application {

    public host: HTMLElement | undefined;

    canvas: Canvas;
    renderer: Renderer;
    constructor(id: string) {
        console.log('id: ' + id + ', App Init!!!!!');

        const host = document.getElementById(id);
        if (host) {this.host = host; }
        this.renderer = new Renderer(this);
        this.canvas = new Canvas(this);

        this.InitDefinition();
    }
    InitDefinition() {
        const visA = new VisA(this);
    }
}