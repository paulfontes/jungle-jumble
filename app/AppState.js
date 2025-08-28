import { Jumble } from './models/Jumble.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
/**@type {import('./models/Jumble.js').Jumble[]} */
  jumbles =  [
   new Jumble({
     name: "Easy Jumble",
     body: "Gorilla likes bananas and those bananas come for the banana tree. ",
 
   }),
   new Jumble({
     name: "Medium Jumble",
     body: "Tizzy the tiger likes eating chickens and throughs a tantrum if he can't!",
 
   }),
   new Jumble({
     name: "Hard Jumble",
     body: "Tall boy girrafe likes to eat leaves from the tall trees that produce tall leaves.",
 
   }),
  
 ]


  }




export const AppState = createObservableProxy(new ObservableAppState())