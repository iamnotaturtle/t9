import React from 'react';

export interface Props {
  open: boolean;
  onBackgroundClick?: () => void;
}

export const OverlayHelp: React.FC<Props> = (props) => {
  const handleBackgroundClick = () => {
    return props.onBackgroundClick ? props.onBackgroundClick() : null
  };

  return (
    <div style={{display: props.open === true ? 'block' : 'none'}}>
      <div 
      className="overlay"
      onClick={() => handleBackgroundClick()}
      />
      <div className="overlay-content">
        <div className="help-title">
          Overview
        </div>
        <div className="help-content">
          Type in a sequence and view suggested words. Tap on a suggested word to select it.
          Add words to the dictionary by tapping the logo in upper left corner.
        </div>
      </div>
    </div>
  );
};
