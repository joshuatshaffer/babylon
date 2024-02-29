window.addEventListener("load", function () {
  /** @type {HTMLTextAreaElement} */
  const inputTextArea = document.getElementById("txt-in");

  /** @type {HTMLTextAreaElement} */
  const outputTextArea = document.getElementById("txt-out");

  /** @type {HTMLInputElement} */
  const seedInput = document.getElementById("seed");

  const lowerCaseVowels = "aeiouy";
  const lowerCaseConsonants = "bcdfghjklmnpqrstvwxz";
  const upperCaseVowels = lowerCaseVowels.toUpperCase();
  const upperCaseConsonants = lowerCaseConsonants.toUpperCase();
  const digits = "1234567890";

  const scrambleSets = [
    lowerCaseVowels,
    lowerCaseConsonants,
    upperCaseVowels,
    upperCaseConsonants,
    digits,
  ];

  function updateBabel() {
    const input = inputTextArea.value;
    const seed = parseInt(seedInput.value);

    const rand = new RandomGenerator();
    rand.seed = seed;

    let output = "";

    eachChar: for (const inputChar of input) {
      for (const s of scrambleSets) {
        const index = s.indexOf(inputChar);
        if (index >= 0) {
          output += s.charAt(
            (index + Math.floor(rand.number() * s.length)) % s.length
          );
          continue eachChar;
        }
      }

      // If the character is not in any of the character sets, just copy it over.
      output += inputChar;
      rand.seed = seed;
    }

    outputTextArea.value = output;
  }

  updateBabel();

  inputTextArea.addEventListener("input", updateBabel);
  seedInput.addEventListener("input", updateBabel);
});
