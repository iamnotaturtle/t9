import React from 'react';

export interface Props {
  open: boolean;
  onBackgroundClick?: () => void;
}

export const Overlay: React.FC<Props> = (props) => {
  return (
    <div style={{display: props.open === true ? 'block' : 'none'}}>
      <div 
      className="overlay"
      onClick={() => props.onBackgroundClick ? props.onBackgroundClick() : null}
      />
      <div className="overlay-content">
        <div className="overlay-title">
          Add words
        </div>
      </div>
    </div>
  );
};
