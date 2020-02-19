const Park = function(name, ticketPrice, collectOfDinosaurs){

  this.name = name;
  this. ticketPrice = ticketPrice;
  this.collectOfDinosaurs = collectOfDinosaurs;
}


Park.prototype.addDinosaur = function (dinosaur){
  this.collectOfDinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
  const indexOfDinosaurs = this.collectOfDinosaurs.indexOf(dinosaur);
  this.collectOfDinosaurs.splice(indexOfDinosaurs, 1);
}

// zsolt code
// Park.prototype.removeDinosaur = function(dinoToRemove){
//   const indexOfDinosaurs = this.dinosaur.splice(indexOfDinosaurs, 1);
// }


// Park.prototype.findMostPopularDinosaur = function(){
//   let MostPopularDinosaur - this.dinosaur[0];
//   for (let dino of this.dinosaurs){if(MostPopularDinosaur.guestsAttractedPerDay < dino.guestsAttractedPerDay)}
//   MostPopularDinosaur = dino;
//     }
//   }
//   return MostPopularDinosaur
// };


// //
// Park.prototype.findSpecies = function(inputSpecies){
//   this.collectOfDinosaurs.find(species)
// }



Park.prototype.visitorsPerDay = function() {
  let TotalNumberOfVisitorsPerDay = 0;
  const TotalNumberOfVisitorsPerDay = 0;
  for (dinosaur of this.collectionOfDinosaurs) {
    TotalNumberOfVisitorsPerDay += dinosaur.guestsAttractedPerDay
     }
     return totalNumberOfVisitorsPerDay
  }


Park.prototype.visitorsPerYear = function () {
  return this.visitorsPerDay() * 365;
};



Park.prototype.yearlyRevenue = function () {
  return this.visitorsPerYear() * this.price;
};

module.exports = Park;
