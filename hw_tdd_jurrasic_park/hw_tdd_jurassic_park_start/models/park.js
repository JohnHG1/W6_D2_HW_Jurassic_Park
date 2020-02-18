const Park = function(name, price, collectOfDinosaurs){

  this.name = name;
  this. price = price;
  this.collectOfDinosaurs = collectOfDinosaurs;
}


Park.prototype.addDinosaur = function (dinosaur){
  this.collectOfDinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
  const indexOfDinosaurs = this.collectOfDinosaurs.indexOf(dinosaur);
  this.collectOfDinosaurs.splice(indexOfDinosaurs, 1);
}

// Park.prototype.findMostPopularDinosaur = function() {
//   const
// }
//
// Park.prototype.findSpecies = function(species){
//   this.collectOfDinosaurs.find(species)
// }

Park.prototype.visitorsPerDay = function() {
  let totalVisitors = 0;
  for (dinosaur of this.collectionOfDinosaurs) {
    totalVisitors += dinosaur.guestsAttractedPerDay
     }
    return totalVisitors
   }
//
// Park.prototype.visitorsPerYear = function () {
//   return this.visitorsPerDay() * 365;
// };
//
// Park.prototype.yearlyRevenue = function () {
//   return this.visitorsPerYear() * this.price;
// };

module.exports = Park;
