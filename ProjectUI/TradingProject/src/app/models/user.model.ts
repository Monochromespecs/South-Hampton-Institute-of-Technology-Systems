import { Pokemon } from './pokemon.model';


export class AppUser {

    constructor(
        public id = 0,
        public firstName = '',
        public lastName = '',
        public username = '',
        public password = '',
        public balance = 0,
        public pokemon = new Pokemon(),
    ) {}
}
