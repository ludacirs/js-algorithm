const route = [];
let cnt=0;

function hanoi(n, from, to) {
    const by = 6 - from - to;
    if (n === 1) {
        route.push([from, to]);
        console.log(route);
    } else {
        hanoi(n - 1, from, by);
        route.push([from, to]);
        hanoi(n - 1, by, to);
    }
}
hanoi(3,1 ,3);