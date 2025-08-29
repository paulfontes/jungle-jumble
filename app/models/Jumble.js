import { generateId } from "../utils/GenerateId.js";

export class Jumble {
  constructor(data) {
    this.id = generateId();
    this.name = data.name;
    this.body = data.body;

    this.fastestTime = null;
    this.startTime = null;
    this.endTime = null;
  }

  get ListTemplate() {
    return `
    
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

  get ActiveJumbleTemplate() {
    return `

        <div class="row">
          <div class="col-7">
            <b>This is where you will type!</b>
          </div>
          <div class="col-11 d-flex justify-content-between">
            <h4>${this.name}</h4>
            <span><h4>Fastest Time 25.5s</h4></span>
          </div>
          <div class="col-12">
            <p>${this.body}</p>
          </div>
          <form class="col-12 form" onsubmit="app.gameController.submitTextAreaGame()">
            <textarea class="form-control" name="gameTextArea"></textarea>
            <label for="floatingTextArea"></label>
            <div class="col-3">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>


        `
  }
}