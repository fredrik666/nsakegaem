/*gör en menu .js med preload, create, startGame function */

var Menu = {

    preload: function () {
        game.load.image('menu', './images/menu.png');    
    },
    create: function () {
        this.add.button (0,0, 'menu', this.startGame, this);
       
    },
    update: function () {
        console.log('din mamma');
    },

    
    

    startGame: function () {
    this.state.start('Game');
}

};

