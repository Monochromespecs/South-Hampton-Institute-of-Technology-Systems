import { PokeballType } from './pokeballType.model';

export class Pokeball {
    constructor(
        public id = 0,
        public pokeballType = new PokeballType(),
        public count = 0,
        public userId = 0,
    ) {}
}
