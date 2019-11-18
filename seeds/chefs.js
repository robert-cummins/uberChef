
const faker = require('faker')

const cities = ['Wellington', 'Auckland', 'Christchurch', 'Hamilton']

const createFakeUser = () =>({
  name: faker.name.findName(),
  location: faker.random.arrayElement(cities),
  img: faker.image.avatar(),
  email: faker.internet.email(),
  bio: faker.lorem.paragraphs(),
  foodImg1: faker.image.food(),
  foodImg2: faker.image.food(),
  foodImg3: faker.image.food(),
})

exports.seed = function(knex) {
  // Deletes ALL existing entries
  const users = []
  const usersNum = 100
  for(let i = 0; i < usersNum; i++){
    users.push(createFakeUser())
    
  }
  return knex('chefs').del()
    .then(function () {
      // Inserts seed entries
      return knex('chefs').insert(users);
    });
};
