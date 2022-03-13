const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  let position = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]){
    case 'north':
      position[1]++;
      break;
    case 'east':
      position[0]++;
      break;
    case 'south':
      position[1]--;
      break;
    case 'west':
      position[0]--;
      break;
    }
  }
  return position;
}


console.log(finalPosition(moves));
