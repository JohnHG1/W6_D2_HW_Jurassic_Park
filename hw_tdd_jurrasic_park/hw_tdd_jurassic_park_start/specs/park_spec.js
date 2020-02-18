const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;
  let dino2;

  beforeEach(function () {
    dino1 = new Dinosaur('Tyranosaurus', 'carnivore', 150 )
    dino2 = new Dinosaur('Stegosaurus', 'herbivore', 50)
    park = new Park('Jurassic Park', 200, [dino1, dino2])

  })


  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 200)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectOfDinosaurs;
    assert.deepStrictEqual(actual, [dino1, dino2])
  });

  it('should be able to add a dinosaur to its collection', function(){
    const dino3 = new Dinosaur('Triceratops', 'herbivore', 80)
    park.addDinosaur(dino3);
    const actual = park.collectOfDinosaurs
    assert.deepStrictEqual(actual, [dino1, dino2, dino3])
  });


  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dino2);
    const actual = park.collectOfDinosaurs
    assert.deepStrictEqual(actual, [dino1])
  });


//   it('should be able to find most popular dinosaur', function(){
//     const actual = collectOfDinosaurs.guestsAttractedPerDay;
//     assert.strictEqual(actual, [dino1])
//   });
// });
//
//
//   it('should be able to find species', function(){
//     park.findSpecies(dino1);
//     const actual = park.collectOfDinosaurs
//     assert.strictEqual(actual, [dino1])
//   };

  it('should be able to calculate the
  total number of visitors per day', function(){
    const actual = park.visitorsPerDay()
    assert.strictEqual(actual, 200)
  });
  //
  // it('should be able to calculate the    total number of visitors per year', function() {
  //   const actual = park.visitorsPerYear()
  //   assert.strictEqual(actual, 73000)
  // });
  //
  //  it('should be able to calculate total revenue for one year', function() {
  //     const actual = park.yearlyRevenue()
  //     assert.strictEqual(actual, 14600000)
  //   });

});
