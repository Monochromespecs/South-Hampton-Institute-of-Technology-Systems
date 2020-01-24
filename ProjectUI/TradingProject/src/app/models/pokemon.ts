export class Pokemon {

    constructor(
        public id: number,
        public name: string,
        public challengeRating: number,
        public value: number,
        public stat: number[],
        public user: number
        ) {
    }
}
