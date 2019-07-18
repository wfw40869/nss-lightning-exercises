// Console.log the GOT characters that died using a function.
// -hint you will need a for loop or a foreach.

const got = ["Theon Greyjoy", "The Night King", "Varys", "Jaime Lannister", "Cersei Lannister", "John Snow"]
const printHere = document.querySelector("#characters")



const isNotAlive = (array) => {
    array.forEach(element => {
        if (!element === "John Snow") {
            const newElement = document.createElement("p")
            newElement.innerHTML = element;
            printHere.appendChild(newElement)
        }
    })
}

isNotAlive(got)