import { GameController } from './controllers/GameController.js';
import { JumbleController } from './controllers/JumbleController.js';
import { gameService } from './services/GameServices.js';

class App {

  jumbleController = new JumbleController()
  gameController = new GameController()
}

window['app'] = new App()


