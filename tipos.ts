type Mago = {magia: () => void};
type Guerreiro = {forca: () => void};
type Paladino = {fe?: () => void, forca?: () => void};

function selecionarClasse(player: Mago | Guerreiro | Paladino){
    if("magia" in player){
        if(player.magia){
            player.magia();
        }
    }else if("forca" in player){
        if(player.forca){
            player.forca();
        }
    }else if("fe" in player){
        if(player.fe){
            player.fe();
        }
    }
}

const mago: Mago = {
    magia: () => {
        console.log("contemplem o magoooo com seus podereees, incriveis podereeeees");
    }
}

const guerreiro: Guerreiro = {
    forca: () => {
        console.log("Tome um socão do guerreiro!!!");
    }
}

const paladino1: Paladino = {
    fe: () => {
        console.log("Show da fé com Daniel Paladino");
    }
}

const paladino2: Paladino = {
    forca: () => {
        console.log("Padre Marcelo Rossi trincadão!");
    }
}

selecionarClasse(guerreiro);