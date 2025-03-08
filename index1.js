let name = prompt("Name:")
let age = prompt("Age:")
let hobbies = ''
let hobieswant = confirm("Hobbies?")
if("hobbieswant"){
    prompt("Hobbies:")
}else{
    let hobbieswant = false
}
let message = "Name: " + name + "\nAge: " + age;
if (hobbies) {
    message = "\nHobbilər: " + hobbies;
}
alert(message);