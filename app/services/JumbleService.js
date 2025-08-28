import { AppState } from "../AppState.js";


class JumbleService {


    selectActiveJumble(jumbleId){
        console.log('Selected File');
        
    }
     saveActiveJumble(updateData){

        const activeJumble = AppState.activeJumble
        console.log(activeJumble);
        activeJumble.body = updateData.body
        
    }
       
}


export const jumbleService = new JumbleService()