import React from "react";

const { useState } = require("react");

const Line = ({ emoji }) => {
  const [lineToCopy, setLineToCopy] = useState(false);

  return (
    <div
      onMouseEnter={() => setLineToCopy(true)}
      onMouseLeave={() => setLineToCopy(false)}
      onClick={() => {
        navigator.clipboard.writeText(emoji.symbol);
      }}
      className="line"
    >
      <span>
        {emoji.symbol} {emoji.title}
      </span>
      {lineToCopy && <span className="copy-span">Click to copy !</span>}
    </div>
  );
};

export default Line;
