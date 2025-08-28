import { generateId } from "../utils/GenerateId.js";

export class Jumble {
    constructor(data){
        this.id = generateId();
        this.name = data.name;
        this.body = data.body;

        this.fastestTime = null;
        this.startTime = null;
        this.endTime = null;
    }

    get ListTemplate(){
        return`
    
        <div class="col-12">
            <button>Start Jumble</button>
            <span>${this.name}</span>
            <span><i class="mdi mdi-clock"></i>12.5s</span>
            <span>60.7<i class="mdi mdi-keyboard">WPM</i></span>
          </div>
          </div>
          </div>
        `
    }
}