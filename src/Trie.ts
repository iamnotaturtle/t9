export class TrieNode {
  value: string = '';
  words:{[word: string]: number} = {};
  children: {[char: string]: TrieNode} = {};

  toString() {
    return `value: ${this.value}, words: ${JSON.stringify(this.words)}`;
  }
}

export class Trie {
  head: TrieNode = new TrieNode();
  mapLetters: {[letter: string]: number} = {
    A: 2,
    B: 2,
    C: 2,
    D: 3,
    E: 3,
    F: 3,
    G: 4,
    H: 4,
    I: 4,
    J: 5,
    K: 5,
    L: 5,
    M: 6,
    N: 6,
    O: 6,
    P: 7,
    Q: 7,
    R: 7,
    S: 7,
    T: 8,
    U: 8,
    V: 8,
    W: 9,
    X: 9,
    Y: 9,
    Z: 9,
  };

  add(word: string): TrieNode {
    let curr = this.head;

    for (let char of word) {
      let digit = this.mapLetters[char.toUpperCase()];

      if (!curr.children[digit]) {
        let node = new TrieNode();
        node.value = digit.toString();
        curr.children[digit] = node;
      }
      curr = curr.children[digit];
    }
    curr.words[word] ? curr.words[word] += 1 : curr.words[word] = 1;

    return curr;
  }

  getValidWords(sequence: string): string[] {
    let curr = this.head;
    for (let digit of sequence) {
      let node: TrieNode | undefined = curr.children[digit];
      if (node){
        curr = node;
        continue;
      } else {
        break;
      }
    }

    if (sequence.endsWith(curr.value)) {
      return Object.keys(curr.words);
    }

    return [];
  }

  isValid(word: string) {
    let curr = this.head;
    for (let char of word) {
      let digit = this.mapLetters[char.toUpperCase()];
      let node: TrieNode | undefined = curr.children[digit];
      if (node){
        curr = node;
        continue;
      }
      return false;
    }

    if (curr.words[word]) {
      return true;
    }

    return false;
  }

  traverse(node: TrieNode) {
    if (!node) {
      return;
    }

    console.log(node.toString());

    for (const [, child] of Object.entries(node.children)) {
      this.traverse(child);
    }
  }

  print() {
    this.traverse(this.head)
  }
}

export class T9 {
  dictionary: Set<string>;
  trie: Trie =  new Trie();

  constructor(words: string[] = []) {
    this.dictionary = new Set(words);

    this.dictionary.forEach(word => {
      this.addWord(word);
    });
  }

  addWord(word: string) {
    this.dictionary.add(word);
    this.trie.add(word);
  }

  getValidWords(sequence: string) {
    // TODO: prompt user to add word?
    return this.trie.getValidWords(sequence);
  }
}