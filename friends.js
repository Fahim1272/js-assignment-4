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