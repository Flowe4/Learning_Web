console.log("fuck you get out of inspect");

let name = "fuck my dic"
let age = 21

name += 4


console.log(name)
console.log(age)


let user;

document.getElementById("Button").onclick = function() {
    user = document.getElementById("Text").value;
    console.log(user)
    document.getElementById("Label").innerHTML = "Hello " + user;
}
