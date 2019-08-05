// const person = {
//     name: 'Sai',
//     age: 32,
//     location : {
//         city: 'Richardson',
//         temp: 100
//     }
// };

// const { name: firstName ='Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature} = person.location;

// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher; 

// console.log(publisherName); //Penguin, Self-Published

const address = ['110 W CityLine Dr', 'Richardson', 'Texas', '75082'];

const [street, city, state, zip] = address;   //any name you like, not like objects.

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, , price] = item;

console.log(`A medium ${name} costs ${price}`);