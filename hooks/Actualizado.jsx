import React, { useEffect } from "react";

export function Actualizado({ num }) {
  const paragraph = {
    padding: "13% 0% 0% 8%",
    fontFamily: "Century Gothic, sans-serif",
    fontSize: "200%",
  };

  useEffect(() => {
    console.log(`”Actualizando!”`);
  });

  return (
    <>
      <div>
        <p style={paragraph}>{num}</p>
      </div>
    </>
  );
}
