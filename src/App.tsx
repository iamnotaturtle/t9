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

const validWords: string[] = [];

const App: React.FC = () => {
  const t9 = new T9(['a', 'b', 'c', 'cat']);

  const [sequence, setSequence] = useState('');
  const [validWords, setValidWords] = useState([] as string[]);

  const handleKey = (label: string) => {
    setSequence(sequence + label);
    const words = t9.getValidWords(sequence);
    console.log('words', words);
    setValidWords(words);
  }

  return (
    <div className="App">
      <div className="phone">
        <div className="number-pad">
          <div className="text-box">
            <div className="sequence">
              {sequence}
            </div>
          {
            validWords.map((word, index) => (
              <div className="word" key={index}>
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
          <div className="back-space" onClick={() => setSequence(sequence.slice(0, sequence.length - 1))}>
            &#9003;
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
