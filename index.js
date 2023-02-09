// Context
//  There are 2 super fast trains, Train A and Train B. Train A travels from Chennai to New Delhi. Train B travels from Trivandrum to Guwahati.

//  Passengers can board these trains only at the source station.
//  The trains have only reserved bogies and each bogie will only have passengers to a specific station.
//  When the train arrives at a station, the entire bogie with passengers is detached from the train, and the train continues its journey.
//  The routes with station code and distances of each station from originating station are as follows: (STATION (CODE) - DISTANCE ):

const trainA = ['ENGINE', 'NDL', 'GHY', 'NJP', 'NGP'];
const trainB = ['ENGINE', 'NJP', 'GHY', 'AGA', 'BPL', 'PTAP', 'NDL'];

const mergeTrains = (trainA, trainB) => {
  const trainAHyd = [];
  const trainBHyd = [];
  const trainABDep = [];

  let i = 0,
    j = 0;

  while (i < trainA.length && trainA[i] !== 'GHY') {
    trainAHyd.push(trainA[i]);
    i++;
  }

  while (j < trainB.length && trainB[j] !== 'GHY') {
    trainBHyd.push(trainB[j]);
    j++;
  }

  i++;
  j++;

  trainABDep.push(trainA[0]);
  trainABDep.push(trainB[0]);

  while (i < trainA.length && j < trainB.length) {
    if (trainA[i] === trainB[j]) {
      trainABDep.push(trainA[i]);
      i++;
      j++;
    } else if (trainA[i] < trainB[j]) {
      trainABDep.push(trainA[i]);
      i++;
    } else {
      trainABDep.push(trainB[j]);
      j++;
    }
  }

  while (i < trainA.length) {
    trainABDep.push(trainA[i]);
    i++;
  }

  while (j < trainB.length) {
    trainABDep.push(trainB[j]);
    j++;
  }

  return {
    trainAHyd,
    trainBHyd,
    trainABDep,
  };
};

console.log('ARRIVAL');
console.log('TRAIN A', trainA);
console.log('TRAIN B', trainB);

const result = mergeTrains(trainA, trainB);

console.log('DEPARTURE');
console.log('TRAIN A', result.trainAHyd);
console.log('TRAIN B', result.trainBHyd);
console.log('TRAIN AB', result.trainABDep);
