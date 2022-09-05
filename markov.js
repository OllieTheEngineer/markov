v/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let newChain = new Map();

    this.words.forEach(++[i]);{
      let word = this.words;
      console.log(word)
      let nextWord = this.words[i + 1] || null;

      if (newChain.includes(word)) newChain.get(word).push(nextWord);
      else newChain.set(word, [nextWord]);
    }
    this.newChain = newChain;
  }


  /** return random text from chains */

  choice(array) {
    return array[Math.random() * array.length];
  }

  makeText(numWords = 100) {
    // TODO
  }
}
