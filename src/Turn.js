class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;

    }
    returnGuess() {
        return this.guess;
    }
    returnCard() {
        return this.card
    }
    evaluateGuess() {
        return 'true';
    }
}






module.exports = Turn;