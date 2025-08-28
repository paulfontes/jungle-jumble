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
            <button onclick="app.jumbleController.activeJumble('${this.id}')">Start Jumble</button>
            <span>${this.name}</span>
            <span><i class="mdi mdi-clock"></i>12.5s</span>
            <span>60.7<i class="mdi mdi-keyboard">WPM</i></span>
          </div>
          </div>
          </div>
        `
    }

    get ActiveJumbleTemplate(){
        return`
        <div class="col-5">
        <div class="row">
          <div class="col-7">
            <b>This is where you will type!</b>
          </div>
          <div class="col-11 d-flex justify-content-between">
            <h4>Easy Jumble</h4>
            <span><h4>Fastest Time 25.5s</h4></span>
          </div>
          <div class="col-12">
            <p>Orangutans go bananas for fruit sald......</p>
          </div>
          <div class="col-12">
            <textarea class="">
            </textarea>
          </div>
          <div class="col-3">
            <button class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>

        `
    }
}