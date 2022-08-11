// Problem:1 radianToDegree
// Function
function radianToDegree(radian) {
    if (typeof radian === 'number') {
        const degree = radian * 180 / Math.PI;
        return degree.toFixed(2);
    } else {
        return "Please input a valid Number!";
    }
}




// Problem:2 isJavaScriptFile
// Function
function isJavaScriptFile(String) {
    if (typeof String === 'string') {
        const doesExist = String.endsWith('.js')
        return doesExist;
    } else {
        return "Please input File name Properly!"
    }
}




// Problem:3 oilPrice
// Function
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




// Problem:4 publicBusFare
// Function
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




// Problem: isBestFriend 
// Function

function isBestFriend(friend1, friend2) {
    if (typeof friend1 === 'object' && typeof friend2 === 'object') {
        if (friend1.name === friend2.friend && friend2.name === friend1.friend) {
            return true;
        }
        else {
            return false;
        }
    } else {
        return " Please input a valid object!"
    }
}

// two objects----
let friend1 = { name: 'halim', friend: 'rakib' };
let friend2 = { name: 'rakib', friend: 'halim' };

// Return values (Function)
let BestfriendOrNot = isBestFriend(friend1, friend2);
console.log(BestfriendOrNot);