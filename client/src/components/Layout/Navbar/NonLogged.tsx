import React from "react";

interface Props {
  children?: React.ReactNode;
}

function NonLogged({ children }: Props) {
  return <>{children}</>;
}

export default NonLogged;
