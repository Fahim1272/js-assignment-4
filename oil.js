function oilPrice(disel, petrol, octane) {
    if (typeof disel === 'number' && typeof petrol === 'number' && typeof octane === 'number') {
        let diselPrice = disel * 114;
        let petrolPrice = petrol * 130;
        let octanePrice = octane * 135;
        let totalPrice = diselPrice + petrolPrice + octanePrice;
        return totalPrice;
    }
    else {
        return "Please input Quantity";
    }
}
let total = oilPrice(5, 5, 4);
console.log(total);