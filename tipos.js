function selecionarClasse(player) {
    if ("magia" in player) {
        if (player.magia) {
            player.magia();
        }
    }
    else if ("forca" in player) {
        if (player.forca) {
            player.forca();
        }
    }
    else if ("fe" in player) {
        if (player.fe) {
            player.fe();
        }
    }
}
var mago = {
    magia: function () {
        console.log("contemplem o magoooo com seus podereees, incriveis podereeeees");
    }
};
var guerreiro = {
    forca: function () {
        console.log("Tome um socão do guerreiro!!!");
    }
};
var paladino1 = {
    fe: function () {
        console.log("Show da fé com Daniel Paladino");
    }
};
var paladino2 = {
    forca: function () {
        console.log("Padre Marcelo Rossi trincadão!");
    }
};
selecionarClasse(guerreiro);
