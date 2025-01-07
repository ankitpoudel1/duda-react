import React from "react";

import Rive from '@rive-app/react-canvas';

export const Simple = () => (
  <Rive
    style={{height:100,width:100}}
    src="https://cdn.rive.app/animations/vehicles.riv"
    stateMachines="bumpy"
  />
);