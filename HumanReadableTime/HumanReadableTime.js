// INSTRUCTIONS

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)


// LINK

// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript


// SOLUTION

function humanReadable(seconds) {
  let minutes = seconds / 60;
  let realSeconds = Math.floor(seconds % 60);
  let realMinutes = Math.floor(minutes % 60);
  let realHour = Math.floor(minutes / 60);

  let readableHour =
    String(realHour).length === 1
      ? String(realHour).padStart(2, "0")
      : realHour;

  let readableMinutes =
    String(realMinutes).length === 1
      ? String(realMinutes).padStart(2, "0")
      : realMinutes;

  let readableSeconds =
    String(realSeconds).length === 1
      ? String(realSeconds).padStart(2, "0")
      : realSeconds;

  return `${readableHour}:${readableMinutes}:${readableSeconds}`;
}
  