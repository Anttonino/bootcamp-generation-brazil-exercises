import { Cachorro } from "./Cachorro";
import { Cavalo } from "./Cavalo";
import { Preguiça } from "./Bicho_Preguiça";
import { iEmiteSom } from "./iEmiteSom";

const dog = new Cachorro ('Krypto', 3, true);
const horse = new Cavalo ('Spirit', 8, true);
const three_toed = new Preguiça ('Sid', 6, true);

function emitirSom (animal: iEmiteSom) {
    animal.emite_som ();
}

console.clear ();
console.log ('*****SOM DOS ANIMAIS*****\n');
emitirSom (horse);
emitirSom (dog);
emitirSom (three_toed);
