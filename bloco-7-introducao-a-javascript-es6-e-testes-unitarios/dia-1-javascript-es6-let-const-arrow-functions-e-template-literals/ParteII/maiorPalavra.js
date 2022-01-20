const longestWord = phrase =>{
  let characters = phrase.split(' ');
  let maxCharacter = 0;
  let result = '';

  for (const character of characters){
    if(character.length>maxCharacter){
      maxCharacter = character.length;
      result = character;
    }
  }
  return result;
}
console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));