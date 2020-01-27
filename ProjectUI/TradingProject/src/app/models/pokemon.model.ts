export class Pokemon {
    constructor(
        public id = 0,
        public name = '',
        public challengeRating = 0,
        private value = 0,
        //need to add the object for pokemon stats based from PokeApi. 
        private stats = 0,
    ) {}
}