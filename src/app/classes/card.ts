export class Card {
    constructor(
        private id: number,
        private league: String,
        private teamA : String,
        private teamB : String,
        private stadium : String,
        private gametime : String,
        private imglinkleague : String,
        private imglinkintro : String,
        private imglinkstadium : String = '../../../assets/img/stadium.png',
        private imglinkclock : String = '../../../assets/img/clock.jpg'
        ) { }
}
