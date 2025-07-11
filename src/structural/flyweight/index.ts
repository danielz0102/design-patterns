import { Game } from "./Game";

const game = new Game();
game.addPlayer("texture1.png", "mesh1.obj", 0, 0, 0);
game.addPlayer("texture1.png", "mesh1.obj", 1, 1, 1);
game.addPlayer("texture1.png", "mesh1.obj", 2, 2, 2);
game.addPlayer("texture1.png", "mesh1.obj", 3, 3, 3);
game.addPlayer("texture1.png", "mesh1.obj", 4, 4, 4);
game.addPlayer("texture1.png", "mesh1.obj", 5, 5, 5);
game.addPlayer("texture1.png", "mesh1.obj", 6, 6, 6);
game.addPlayer("texture1.png", "mesh1.obj", 7, 7, 7);
game.addPlayer("texture1.png", "mesh1.obj", 8, 8, 8);
game.addPlayer("texture1.png", "mesh1.obj", 9, 9, 9);
game.init();
game.gameOver();
