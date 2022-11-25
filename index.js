'use strict';

const personName = "Alicia Garza";

for (const character of personName) {
  console.log(character);
}

// We could do something like this
for (const character of personName) {
  if (character === " ") {
    continue;
  }
  if ("aeiou".includes(character.toLowerCase())) {
    console.log(`${character} is a vowel.`);
  } else {
    console.log(`${character} is a consonant.`);
  }
}