const fs = require('fs');
const faker = require('faker');

function generateUsers(n) {
    let users = [];

    for (let i = 0; i < n ; i++) {
        users.push({
            _id: i.toString(),
            userName: faker.name.firstName(),
            email: faker.internet.email(),
            isActive: faker.datatype.boolean(),
            age: faker.datatype.number({min: 18, max: 100}),
            location: faker.address.city(),
            gender: faker.random.arrayElement(['male', 'female', 'other']),
            completedHikes: faker.datatype.number({min: 10, max: 120}),
            created_At: faker.date.past(),
            updated_At: faker.date.recent(),
        });
    }

    return users;
};


function generateTrails(n) {
    let trails = [];

    for (let i = 0; i < n ; i++) {
        trails.push({
            _id: i.toString(),
            name: faker.address.city(),
            location: faker.address.city(),
            popularityScore: faker.datatype.number({min: 1, max: 100}),   
            averageRating: faker.datatype.number({min: 1, max: 5}),
            distance: faker.datatype.number({min: 1, max: 30}),
            difficulty: faker.datatype.number({min: 1, max: 4}),
            description: faker.lorem.paragraph(),
            created_At: faker.date.past(),
            updated_At: faker.date.recent(),
        });
    }
    return trails;

}


function generateEvents(n) {
    let events = [];

    for (let i = 0; i < n ; i++) {
        events.push({
            _id: i.toString(),
            trailId: faker.datatype.number({min: 1, max: 50}),
            organizerId: faker.datatype.number({min: 1, max: 100}),
            name: faker.address.city(),
            eventDate: faker.date.future(),
            description: faker.lorem.paragraph(),
            location: faker.address.city(),
            groupSize: faker.datatype.number({min: 1, max: 30}),
            created_At: faker.date.past(),
            updated_At: faker.date.recent(),
        });
    }
    return events;
}


function generateEventParticipants(n) {
    let eventParticipants = [];

    for (let i = 0; i < n ; i++) {
        eventParticipants.push({
            _id: i.toString(),
            eventId: faker.datatype.number({min: 1, max: 30}),
            userId: faker.datatype.number({min: 1, max: 100}),
            rsvpStatus: faker.random.arrayElement(['yes', 'no', 'maybe']),
            created_At: faker.date.past(),
            updated_At: faker.date.recent(),
        });
    }
    return  eventParticipants;
}

const data = {
    users: generateUsers(100),
    trails: generateTrails(50),
    events: generateEvents(30),
    eventParticipants: generateEventParticipants(100),
};

fs.writeFileSync('data.json', JSON.stringify(data, null, 2));