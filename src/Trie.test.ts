import {Trie, T9} from './Trie';

describe('Trie', () => {
  it('adds word correctly', () => {
    let trie = new Trie();
    trie.add('cat');
    trie.add('lemon');
    trie.add('cataract');

    expect(trie.isValid('cat')).toBe(true);
    expect(trie.isValid('catamaran')).toBe(false);
    expect(trie.isValid('cata')).toBe(false);
  });  
});

describe('T9', () => {
  it('should return valid words for sequence', () => {
    let t9 = new T9(['cat', 'bat', 'banana']);
    expect(t9.getValidWords('228')).toEqual(['cat', 'bat']);
  });

  it('should add valid words to trie', () => {
    let t9 = new T9();
    t9.addWord('set');
    expect(t9.getValidWords('738')).toEqual(['set']);
  });
});