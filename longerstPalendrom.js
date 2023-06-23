// Input:
// "babad"
// "cbbd"
// "abcd"

// Output:
// "bab" or "aba"
// "bb"
// "a"

let longPalen = (str) => {
  let longPal = "";
  for (let x = 0; x < str.length; x++) {
    let forward = "";
    let reverse = "";
    for (let y = x; y < str.length; y++) {
      forward = forward + str[y];
      reverse = str[y] + reverse;
      if (forward === reverse) {
        console.log(forward.length, " " + longPal.length);
        if (forward.length >= longPal.length) {
          longPal = forward;
        }
      }
    }
  }
  console.log('longest pal---',longPal)
};

longPalen("abcd");
