var Game ;

game = new Phaser.Game(600,450, Phaser.AUTO, 'gameDiv');

game.state.add('menu', Menu);
game.state.add('Game', Game);
game.state.add('Game_Over', Game_Over);


game.state.start('menu');

game.state.add('Boot', Boot);