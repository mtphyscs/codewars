// INSTRUCTIONS

// Major chords are one of the building blocks of our contemporary music, so let's build some! They are comprised of a root note, a major third, and a perfect fifth from that root note. Let's unpack that.

// We have 7 notes to build from (A, B, C, D, E, F, G). The distance between each of these notes is of 2 semitones, except for two intervals. The intervals that go from B to C and from E to F are of only 1 semitone.

// Each of those notes can be made "sharp" (written as #), which will make them 1 semitone higher in pitch; or "flat" (written as b), which will lower them 1 semitone. And so, the interval from C to D would be of 2 semitones, but of only 1 semitone from C# to D, and of three semitones from Cb to D:

// C to D = 2 semitones
// C# to D = 1 semitone
// Cb to D = 3 semitones
// C# to D# = 2 semitones
// C# to Db = Equivalent
// Keep in mind the intervals from B to C and from E to F are originally of only 1 semitone, therefore:

// E to F = 1 semitone
// E# to F = Equivalent
// E to Fb = Equivalent
// Major Chords
// As an example, to build the major chord for E (E major) we would need to find its major third and its perfect fifth.

// For a major third, we would count two notes forward in the scale (A, B, C, D, E, F, G) from the root (in this case, E), arriving at G. A major third needs to have 4 semitones, but the interval from E to G only has 3. We'd therefore need to make our G sharp (G#) to get an extra semitone, for a total of 4.
// For a perfect fifth, we would count four notes forward. As our reference scale ends at G, we would continue with A again after that (the distance from G to A also being of 2 semitones), arriving at B. A perfect fifth has 7 semitones, which is exactly how many we get from E to B.
// The chord of E major would therefore be comprised of E, G#, and B.

// Task
// You will be given a root note as a string, either by itself (natural), sharp, or flat (examples: "G", "Gb", "G#"). Your task is to write a function that programatically returns a list containing the three notes that would make the major chord for that root.

// majorChord('Db') = ['Db', 'F', 'Ab' ]
// Rules
// Any input string other than the notes (A, B, C, D, E, F, G) by themselves, or with a sharp (#) or flat (b) symbol should be considered invalid and return an empty list.
// Due to their special nature, and for simplicity, E#, Fb, B#, and Cb should always be treated as their natural equivalents. E# will be taken as F, Fb as E, B# as C, and Cb as B.
// majorChord('Fb') = [ 'E', 'G#', 'B' ]
// majorChord('C#') = [ 'C#', 'F', 'G#' ]
// If we need to add more than 1 semitone up or down to our third or fifth to reach the 4 or 7 semitones needed, we'll jump one whole note forward or backwards. For example, when obstaining the third of D# we'd arrive at F. However, there are only 2 semitones between D# and F. Instead of adding two sharps to F, we'd jump to G, for a total of 4 semitones.
// majorChord('D#') = [ 'D#', 'G', 'A#' ]


// LINK

// https://www.codewars.com/kata/58d6f2270859584ab1000114/train/javascript


// SOLUTION



function majorChord(chord) {
  const semitones = [
    "Ab",
    "A",
    "A#",
    "Bb",
    "B",
    "B#",
    "Cb",
    "C",
    "C#",
    "Db",
    "D",
    "D#",
    "Eb",
    "E",
    "E#",
    "Fb",
    "F",
    "F#",
    "Gb",
    "G",
    "G#"
  ];
  if (!semitones.includes(chord)) return [];
  switch (chord) {
    case "A":
      return ["A", "C#", "E"];
      break;
    case "A#":
      return ["A#", "D", "F"];
      break;
    case "B":
    case "Cb":
      return ["B", "D#", "F#"];
      break;
    case "C":
    case "B#":
      return ["C", "E", "G"];
      break;
    case "C#":
      return ["C#", "F", "G#"];
      break;
    case "Db":
      return ["Db", "F", "Ab"];
      break;
    case "D":
      return ["D", "F#", "A"];
      break;
    case "D#":
      return ["D#", "G", "A#"];
      break;
    case "Eb":
      return ["Eb", "G", "Bb"];
      break;
    case "E":
    case "Fb":
      return ["E", "G#", "B"];
      break;
    case "F":
    case "E#":
      return ["F", "A", "C"];
      break;
    case "F#":
      return ["F#", "A#", "C#"];
      break;
    case "Gb":
      return ["Gb", "Bb", "Db"];
      break;
    case "G":
      return ["G", "B", "D"];
      break;
    case "G#":
      return ["G#", "C", "D#"];
      break;
    case "Ab":
      return ["Ab", "C", "Eb"];
      break;
    case "A":
      return ["A", "C#", "E"];
      break;
    case "A#":
      return ["A#", "D", "F"];
      break;
    case "Bb":
      return ["Bb", "D", "F"];
      break;
  }
}


