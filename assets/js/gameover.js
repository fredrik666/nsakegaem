var Game_Over ={

    preload: function () {
        game.load.image('gameover', './images/gameover.png');
    },

    create: function () {
        this.add.button(0,0, 'gameover', this.startGame, this);
    },

    update:function () {
        
    },



startGame: function () {
    this.state.start('Game');
}


};
