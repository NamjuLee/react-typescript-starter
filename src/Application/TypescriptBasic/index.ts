import { Lesson } from './Lesson_01';
export class TypescriptBasic {
    constructor(){
        // this.init();

        new Lesson();
    }
    public init() {
        return  import('./Lesson_01').then(({ Lesson }) => {
            new Lesson();
        }).catch((err) => { console.log('Stop loading Lesson.'); console.log(err); });
    }
}