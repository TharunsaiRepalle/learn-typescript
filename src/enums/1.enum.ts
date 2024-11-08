/**default behavior */
enum Direction {
    Up, //0
    Down, //1
    Left, //2
    Right //2
}

// if you want enum to return the string at run time.
enum Direction1 {
    Up = "up",
    Down= "down",
    Left ="left",
    Right ="right"
}

// if you want enum to string from 1 instead of zero.
enum Direction2 {
    Up = 1, //1
    Down, //2
    Left, //3
    Right //4
}


function doSomething(keyPressed : Direction) {
    //do something
}

doSomething(Direction.Up);
doSomething(Direction.Down);

console.log(Direction.Up) // 0
console.log(Direction.Down) //1
console.log(Direction1.Up) // up
console.log(Direction1.Down) // down