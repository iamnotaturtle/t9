import React, {useState} from 'react';
import './App.css';
import {T9} from './Trie';

const numberPad = {
  1: {
    label: '1',
    subLabel: '.,?/',
  },
  2: {
    label: '2',
    subLabel: 'ABC',
  },
  3: {
    label: '3',
    subLabel: 'DEF',
  },
  4: {
    label: '4',
    subLabel: 'GHI',
  },
  5: {
    label: '5',
    subLabel: 'JKL',
  },
  6: {
    label: '6',
    subLabel: 'MNO',
  },
  7: {
    label: '7',
    subLabel: 'PQRS',
  },
  8: {
    label: '8',
    subLabel: 'TUV',
  },
  9: {
    label: '9',
    subLabel: 'WXYZ',
  },
}

const App: React.FC = () => {
  const t9 = new T9(['a', 'b', 'c', 'cat', 'bat']);

  const [sequence, setSequence] = useState('');
  const [word, setWord] = useState('');
  const [validWords, setValidWords] = useState([] as string[]);

  const handleKey = (label: string) => {
    const updatedSequence = sequence + label;
    setSequence(updatedSequence);
    const words = t9.getValidWords(updatedSequence);
    setValidWords(words);
  };

  const handleBack = () => {
    const updatedSequence = sequence.slice(0, sequence.length - 1);
    setSequence(updatedSequence);
    const words = t9.getValidWords(updatedSequence);
    setValidWords(words);
  };

  const handleWord = (suggestedWord: string) => {
    setWord(suggestedWord);
  };

  return (
    <div className="App">
      <div className="toolbar">
        <div className="logo">
          T9
        </div>
        <div className="help">
          &#x3f;
        </div>
      </div>
      <div className="phone">
        <div className="number-pad">
          <div className="selected-word">
            {word}
          </div>
          <div className="text-box">
            <div className="sequence">
              {sequence}
            </div>
          </div>
          <div className="suggestions">
            {
              validWords.map((word, index) => (
                <div className="word" key={index} onClick={() => handleWord(word)}>
                  {word}
                </div>
              ))
            }
          </div>
          { Object.entries(numberPad).map((index, key) => 
              <div className="number-key" key={key} onClick={() => handleKey(index[1].label)}>
                <div className="label">{index[1].label}</div>
                <div className="sub-label">{index[1].subLabel}</div>
              </div>
            ) 
          }
          <div className="back-space" onClick={() => handleBack()}>
            &#9003;
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
