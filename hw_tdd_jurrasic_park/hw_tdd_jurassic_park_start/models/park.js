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

// Park.prototype.findMostPopularDinosaur = function(dinosaur) {
//   const
// }

Park.prototype.findSpecies = function(species){
  this.collectOfDinosaurs.find(dinosaur)
}




module.exports = Park;
