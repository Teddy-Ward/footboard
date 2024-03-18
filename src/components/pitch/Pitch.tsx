import React from 'react';

interface PitchProps {
  // You might add props for width, height, or other customizations later 
}

const Pitch: React.FC<PitchProps> = () => {
  return (
    <div className="pitch-container"> 
      <img src={require('../../assets/images/pitch.svg').default} alt="Football Pitch" />  
    </div>
  );
};

export default Pitch;