import { combineReducers } from 'redux';
import travelogues from './data';

const TILES_COUNT = 7;

// We are using 8 because, all we got in the Travelogues component is an array of 8 objects.
function slideNumber(state = Math.floor(Math.random() * TILES_COUNT)) {
  return state;
}

// Fisher-Yates shuffling algorithm
export function shuffleFY(arrayToShuffle) {
  let i = arrayToShuffle.length;
  let j = 0;
  let temp;
  const array = arrayToShuffle;

  while (i--) { // eslint-disable-line no-plusplus
    j = Math.floor(Math.random() * (i + 1));

    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

function shuffledDefault(state = shuffleFY(travelogues).slice(0, TILES_COUNT)) {
  return state;
}

export default combineReducers({
  slideNumber,
  shuffledDefault
});
