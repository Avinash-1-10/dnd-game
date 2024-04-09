import React from "react";

interface Props {
  handleCheck: () => void; // Function to handle the check button click
  handleReset: () => void; // Function to handle the reset button click
}

const Buttons: React.FC<Props> = ({ handleCheck, handleReset }) => {
  return (
    <div className="flex justify-center items-center gap-5"> {/* Container for buttons */}
      {/* Check button */}
      <button onClick={handleCheck} className="bg-green-600 text-white px-3 py-1 rounded-md">
        Check
      </button>
      {/* Reset button */}
      <button onClick={handleReset} className="bg-yellow-500 text-white px-3 py-1 rounded-md">
        Reset
      </button>
    </div>
  );
};

export default Buttons;
