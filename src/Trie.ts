export class TrieNode {
  char: string = '';
  isWord: boolean = false;
  children: {[char: string]: TrieNode} = {};

  toString() {
    return `${this.char} ${this.isWord}`;
  }
}

export class Trie {
  head: TrieNode = new TrieNode();

  add(word: string) {
    let curr = this.head;

    for (let char of word) {
      if (!curr.children[char]) {
        let node = new TrieNode();
        node.char = char;
        curr.children[char] = node;
      }
      curr = curr.children[char];
    }

    curr.isWord = true;
  }

  isValid(word: string) {
    let curr = this.head;

    for (let char of word) {
      let node: TrieNode | undefined = curr.children[char];
      if (node){
        curr = node;
        continue;
      }
      return false;
    }

    if (curr.char === word[word.length - 1] && curr.isWord) {
      return true;
    }

    return false;
  }

  traverse(node: TrieNode) {
    if (!node) {
      return;
    }

    console.log(node.toString());

    for (const [key, child] of Object.entries(node.children)) {
      this.traverse(child)
    }
  }

  print() {
    this.traverse(this.head)
  }
}

export class T9 {
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

  mapDigits: {[digit: number]: string[]} = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  dictionary: Set<string> = new Set();
  trie: Trie = new Trie();

  constructor(dictionary?: string[]) {
    if (!dictionary) {
      return;
    }

    this.dictionary = new Set(dictionary);

    for (let word of dictionary) {
      this.trie.add(word);
    }
  }

  validWords(sequence: string): string[] {
    let valid: string[] = [];

    for (let digit of sequence) {
      for (let char of this.mapDigits[parseInt(digit)]) {
        
      }
    }

    return valid;
  }
}
