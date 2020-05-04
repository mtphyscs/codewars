// INSTRUCTIONS
// There are total 16 positions from 0 to 15.

// 0 | 1 | 2 | 3 | ... | 14 | 15
// We have a array zoneMap to discribe how many zones and every zone have how many position.

// For example[8, 8], means we have 2 zones and each zone have 8 positions.

// We want to know position n in which zone.

// If zoneMap is [8, 8], postion 0 is in zone 0;

// If zoneMap is [8, 8], postion 8 is in zone 1;

// If zoneMap is [8, 8], postion 15 is in zone 1;

// If zoneMap is [4, 4, 4, 4], postion 4 is in zone 1;

// If zoneMap is [0, 4, 10, 2], postion 0 is in zone 1;

// If zoneMap is [0, 4, 10, 2], postion 4 is in zone 2;

// If zoneMap is [8, 8], postion 0 is in zone 0;

// LINK 

// https://www.codewars.com/kata/57cf7136c98a52c5cf00025a/train/javascript

// SOLUTION

function flowDivision(zoneMap, n) {
  let a = 0;
  let i = 0;
  while (a < n + 1) {
    a += zoneMap[i];
    i++;
  }
  return i - 1;
}
      
  