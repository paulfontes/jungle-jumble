import { AppState } from "../AppState.js";




export class JumbleController{
    constructor(){
        console.log('🎮');
        this.drawJumbles()
        AppState.on('jumble', this.drawJumbles)
    }

    drawJumbles(){
        console.log('drawing jumbles');
        const drawJumblesElm = document.getElementById('draw-jumbles')
        AppState.jumbles.forEach((jumble) => drawJumblesElm.innerHTML += jumble.ListTemplate)
    }


}