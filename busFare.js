function publicBusFare(person) {

    if (typeof person === 'number') {
        // Each bus capacity = 50 person!
        let afterBus = person % 50;

        // Each micro bus capacity = 11 person!
        let afterMicroBus = afterBus % 11;

        // Public bus fare per person = 250tk.
        busFare = afterMicroBus * 250;

        return busFare;
    } else {
        return "Please input valid Passenger Number";
    }
}
let vung = publicBusFare(4);
console.log(vung);