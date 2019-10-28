import React, { useState } from 'react';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

export interface Props {
  open: boolean;
  onBackgroundClick?: (words: string[]) => void;
}

export const Overlay: React.FC<Props> = (props) => {
  const [words, setWords] = useState([] as string[]);

  const inputProps = {
    placeholder: 'Add word',
  };

  const handleBackgroundClick = () => {
    return props.onBackgroundClick ? props.onBackgroundClick(words) : null
  };

  return (
    <div style={{display: props.open === true ? 'block' : 'none'}}>
      <div 
      className="overlay"
      onClick={() => handleBackgroundClick()}
      />
      <div className="overlay-content">
        <TagsInput 
          value={words} 
          onChange={(newWords) => setWords(newWords)}
          inputProps={inputProps} />
      </div>
    </div>
  );
};
