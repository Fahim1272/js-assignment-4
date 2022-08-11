// Problem-1 Radian To Degree
function radianToDegree(radian) {
    if (typeof radian === 'number') {
        const degree = radian * 180 / Math.PI;
        return degree.toFixed(2);
    } else {
        return "Please input a valid Number!";
    }
}
var givenRadian = radianToDegree(4);
console.log(givenRadian);