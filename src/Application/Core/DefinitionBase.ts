import { Application } from '..';
export abstract class DefinitionBase {
    app: Application;
    constructor(app: Application) {
        this.app = app;
        this.app.renderer.DefinitionBase.push(this);
        this.Init();
    }
    abstract Init(): void;
    abstract Render(ctx: CanvasRenderingContext2D): void;
}