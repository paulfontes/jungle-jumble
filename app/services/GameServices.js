import { AppState } from "../AppState.js"


class GameService {

    startGame() {
        let activeJumble = AppState.activeJumble
        activeJumble.startTime = new Date();
        console.log(activeJumble);

    }

    endGame() {
        let activeJumble = AppState.activeJumble
        activeJumble.endTime = new Date();
        console.log(activeJumble);

    }



}

export const gameService = new GameService()