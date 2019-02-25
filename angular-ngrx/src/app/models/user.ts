export class User {
    id: string;
    name: string;
    cardNumber: string;
    cardType: string;

    constructor(id: string, name: string, cardNumber: string, cardType: string) {
        this.id = id;
        this.name = name;
        this.cardNumber = cardNumber;
        this.cardType = cardType;
    }
}
