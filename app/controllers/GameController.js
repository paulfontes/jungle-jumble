import { AppState } from "../AppState.js"
import { getFormData } from "../utils/FormHandler.js"


export class GameController {
    constructor() {

    }

    submitTextAreaGame() {
        event.preventDefault()
        console.log('game file')
        let form = event.target
        let formData = getFormData(form)
        console.log(formData);
        if (formData.gameTextArea == AppState.activeJumble.body) {
            console.log('correct');

        }
    }
}

