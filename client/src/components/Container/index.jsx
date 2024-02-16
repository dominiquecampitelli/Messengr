import React from "react";

import { Panel, Content } from "./styles";

export default function Container({ children }) {
  return (
    <Panel>
      <Content>{children}</Content>
    </Panel>
  );
}
