import { AppState } from "../AppState.js";
import { jumbleService } from "../services/JumbleService.js";




export class JumbleController {
    constructor() {
        console.log('🎮');
        this.drawJumbles()
        AppState.on('jumbles', this.drawJumbles)
        AppState.on('activeJumble', this.drawActiveJumble)

    }

    drawJumbles() {
        console.log('drawing jumbles');
        const drawJumblesElm = document.getElementById('draw-jumbles')
        AppState.jumbles.forEach((jumble) => drawJumblesElm.innerHTML += jumble.ListTemplate)
        this.drawActiveJumble
    }

    activeJumble(jumbleId) {
        console.log('clicked on Jumble');

        jumbleService.selectActiveJumble(jumbleId)
        let jumblePicked = AppState.jumbles.find((jumble) => jumble.id == jumbleId)
        console.log(jumblePicked);
        AppState.activeJumble = jumblePicked
        console.log(AppState.activeJumble);

    }

    drawActiveJumble() {
        const activeJumbleElm = document.getElementById('active-jumble')
        const activeJumble = AppState.activeJumble
        if (activeJumble != null) {
            activeJumbleElm.innerHTML = activeJumble.ActiveJumbleTemplate
        } else {
            activeJumbleElm.innerHTML = `
            <div class= "card">
                <h2>Please Select a Jumble</h2>
            </div>
            `
        }
    }


}