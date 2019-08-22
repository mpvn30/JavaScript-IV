/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
//GameObject

class GameObject{
    constructor(gameObjAttributes){
    this.createdAt = gameObjAttributes.createdAt,
    this.name = gameObjAttributes.name,
    this.dimensions = gameObjAttributes.dimensions;
    };
    destroy(){
    return `${this.name} was removed from the game`
    };
  };
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  class CharacterStats extends GameObject{
    constructor(charStatsAttributes){
    super(charStatsAttributes);
    this.healthPoints = charStatsAttributes.healthPoints
    }
    takeDamage(){
    return `${this.name} took damage.`;
    }
  };
  
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  class Humanoid extends CharacterStats{
    constructor(humanoidAttributes){
    super(humanoidAttributes);
    this.team = humanoidAttributes.team,
    this.weapons = humanoidAttributes.weapons,
    this.language = humanoidAttributes.language
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}.`
    }
};
