export class User {

    constructor(
        public username: string, 
        public firstname: string, 
        public lastname: string,
        public id: number,
        public balance: number,
        public pokeballs: number[]
        ) {

    }

}