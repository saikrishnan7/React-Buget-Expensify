import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';
import moment from 'moment';

var firebaseConfig = {
    apiKey: "AIzaSyDENfsy5l1n1NL_w1nqxsw2i-dq8hB4OuQ",
    authDomain: "expensify-e9733.firebaseapp.com",
    databaseURL: "https://expensify-e9733.firebaseio.com",
    projectId: "expensify-e9733",
    storageBucket: "",
    messagingSenderId: "27120159886",
    appId: "1:27120159886:web:52e3c2be38b3d534458ddf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export { firebase, database as default };

//   database.ref('notes').push({
//       title: 'To Do',
//       body: 'Go for a run'
//   });

//   database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'Angular, Python, React, Vue'
// });

// database.ref('notes/-LoBzp2q5z0Jy1vcDn4K').remove();

/*expenses.map((expense) => {
    database.ref('expenses').push(expense);
});

database.ref('expenses')
    .on('value', (snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log(expenses);
    });
*/
/* database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
}); */
//   const notes = [{
//       id: '12',
//       title: 'First note!',
//       body: 'This is my note'
//   }, {
//     id: '761ase',
//     title: 'Second note!',
//     body: 'This is my second note'
//   }]

//   database.ref('notes').set(notes);
//   database.ref('notes/12');

//   const setObject = database.ref().set({
//     name: 'Sai Srivatsan',
//     age: 32,
//     stressLevel: 6,
//     job: {
//         title: 'SWE',
//         company: 'Google'
//     },
//     location: {
//         city: 'Austin',
//         country: 'United States'
//     }
// });

// setObject.then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// }); 
  
// const onValueChange = database.ref().on('value', (snapshot) => {
//     const obj = snapshot.val();
//     console.log(`${obj.name} is a ${obj.job.title} at ${obj.job.company} in ${obj.location.city}`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// database.ref().update({
//     name: 'Sasi'
// }).then(() => {
//     console.log('Updates correctly performed');
// }).catch((e) => {
//     console.log('Updates failed: ', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('Updates correctly performed');
// }).catch((e) => {
//     console.log('Updates failed: ', e);
// });
