import React from 'react';
import './App.css';

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
  return (
    <div className="App">
      <div className="phone">
        <div className="number-pad">
          <div className="text-box">hey</div>
          { Object.entries(numberPad).map((index, key) => 
              <div className="number-key">
                <div className="label">{index[1].label}</div>
                <div className="sub-label">{index[1].subLabel}</div>
              </div>
            ) 
          } 
        </div>
      </div>
    </div>
  );
}

export default App;
