
export class Application {

    public host: HTMLElement | undefined;

    constructor(id: string) {
        console.log('id: ' + id + ', App Init!!!!!');

        const host = document.getElementById(id);
        if (host) {this.host = host; }
        console.log(this.host);
    }
}