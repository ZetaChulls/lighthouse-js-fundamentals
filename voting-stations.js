const chooseStations = function (stations) {
  let goodStations = [];
  for (let i = 0; i < stations.length; i++) {
    if(stations[i][1] >= 20){
      if(stations[i][2] === 'school' || stations[i][2] === 'community centre') {
        goodStations.push(stations[i][0]);
      }
    }
  }
  return goodStations;
}

stations = [
  ['A', 10, 'school'],
  ['B', 9, 'restaurant'],
  ['C', 21, 'community centre'],
  ['D', 15, 'school'],
  ['E', 50, 'restaurant'],
  ['F', 20, 'school'],
  ['G', 40, 'community centre'],
  ['H', 50, 'school'],
]
chooseStations(stations);

console.log(chooseStations(stations));