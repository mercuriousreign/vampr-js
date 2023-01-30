class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  
  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    vampire.creator = this;
    this.offspring.push(vampire);

  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {

    return this.offspring.length;

  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    if (this.creator !== null) {
      return this.creator.numberOfVampiresFromOriginal + 1;
    }

    return 0;

  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.creator === null) {
      return true;
    }

    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;

  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

    let theAncestors = []
    theAncestors.push(this.creator);
    let otherAncestors = []
    otherAncestors.push(vampire.creator);

    for (let i = 0 ; i < this.numberOfVampiresFromOriginal; i++){
      console.log(theAncestors[i].creator);
      theAncestors.push(theAncestors[i].creator);
    }

    //console.log(theAncestors);

    
    for (let i = 0 ; i < vampire.numberOfVampiresFromOriginal-1; i++){
      console.log()
      otherAncestors.push(otherAncestors[i].creator);
    }

    //console.log(otherAncestors);
    theAncestors.reverse();
    otherAncestors.reverse();
    
    for (let i = 0; i < theAncestors ; i ++){
      if (theAncestors[i] === otherAncestors[i] && theAncestors[i] != null){
        return theAncestors[i];
      }
      if (theAncestors[i]===null) {
        theAncestors[i-1];
      }
    }

    

    // if (vampire.creator === null) {
    //   return vampire.creator.name;
    // }
    // if (this.creator === null) {
    //   return this.creator.name;
    // }
    // if (this.creator.name === vampire.creator.name) {
    //   return vampire.creator.name;
    // }

    // if (this.isMoreSeniorThan(vampire)) {
    //   i = vampire.numberOfVampiresFromOriginal - this.numberOfVampiresFromOriginal;
    //   console.log(vampire.name," creator is ",vampire.creator.name);
    //   this.closestCommonAncestor(vampire.creator);
    // } 

    // if (vampire.isMoreSeniorThan(this)) {
    //   this.closestCommonAncestor(this.creator);

    // }

    // else {
    //   this.closestCommonAncestor(this.creator);
    // }

    

  }
}


let rootVampire;
rootVampire = new Vampire("root");
let offspring1, offspring2, offspring3, offspring4, offspring5, offspring6, offspring7, offspring8;

offspring1 = new Vampire("a");
offspring2 = new Vampire("b");
offspring3 = new Vampire("c");
offspring4 = new Vampire("d");
offspring5 = new Vampire("e");
offspring6 = new Vampire("f");
offspring7 = new Vampire("g");
offspring8 = new Vampire("h");

rootVampire.addOffspring(offspring1);
rootVampire.addOffspring(offspring2);
rootVampire.addOffspring(offspring3);
offspring3.addOffspring(offspring4);
offspring3.addOffspring(offspring5);
offspring5.addOffspring(offspring6);
offspring6.addOffspring(offspring7);
offspring2.addOffspring(offspring8);

console.log(offspring4.closestCommonAncestor(offspring7));

module.exports = Vampire;

