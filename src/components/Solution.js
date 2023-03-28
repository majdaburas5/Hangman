import React from "react";

export default function Solution() {
  let spaces = [" _ ", " _ ", " _ ", " _ "];
  let hint = "Your ideal mood when coding";

  return (
    <div>
      {spaces.map((s) => (
        <span>{s}</span>
      ))}
      <div>
        <em>{hint}</em>
      </div>
    </div>
  );
}
