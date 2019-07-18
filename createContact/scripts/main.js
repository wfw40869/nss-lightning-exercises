// This is shorthand for returning an object in javascript
const createContact = (name, title, email) => ({
    name, title, email
})

const tony = createContact("Tony", "Manager", "sqwerty1@email.com")
const joe = createContact("Joe", "The Guy", "sqwerty1@email.com")
const steve = createContact("Steve", "Logistics", "sqwerty1@email.com")
const jenny = createContact("Jenny", "CEO", "sqwerty1@email.com")
const amanda = createContact("Amanda", "CFO", "sqwerty1@email.com")

console.log(tony);

const contactList = document.querySelector("#contactlist")

const displayContact = (contact) => {
    const htmlToAdd = `
        <section class="contact">
            <h1>${contact.name}</h1>
            <h2>${contact.title}</h2>
            <div>${contact.email}</div>
        </section>
    `
    contactList.innerHTML += htmlToAdd
}

displayContact(tony)
displayContact(joe)
displayContact(steve)
displayContact(jenny)
displayContact(amanda)
