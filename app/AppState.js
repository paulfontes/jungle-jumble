import { Jumble } from './models/Jumble.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

 jumble =  [
  new Jumble({


  }),


 ]


  }




export const AppState = createObservableProxy(new ObservableAppState())