import React from "react";

interface Props {
  children?: React.ReactNode;
}

function NonLogged({ children }: Props) {
  return (
    <div>
      NonLogged
      {children}
    </div>
  );
}

export default NonLogged;
