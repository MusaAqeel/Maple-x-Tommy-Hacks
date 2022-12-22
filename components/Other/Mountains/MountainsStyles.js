import styled from "styled-components";

/**
 * Container for each mountain image layer
 */
export const Layers = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 0;
  min-width: 100vw;
`;

export const Layer0 = styled(Layers)`
  transform: translateZ(-200px) scale(3);
  z-index: 0;
`;
export const Layer1 = styled(Layers)`
  transform: translateZ(-150px) scale(2.5);
  z-index: 0;
  bottom: -50%;
`;
export const Layer2 = styled(Layers)`
  transform: translateZ(-50px) scale(2);
  z-index: 0;
  bottom: -23%;
`;
export const Layer3 = styled(Layers)`
  transform: translateZ(-20px) scale(1.4);
  z-index: 0;
  bottom: -10%;
`;
export const Layer4 = styled(Layers)`
  transform: translateZ(0px) scale(1);
  z-index: 0;
`;

/**
 * Covers for each mountain layer
 */

export const Layer1Cover = styled.section`
  display: block;
  position: absolute;
  top: 99%;
  left: 0;
  right: 0;
  min-height: 100vh;
  z-index: 3;
  background-color: #7fb9d3;
`;
export const Layer2Cover = styled(Layer1Cover)`
  top: 96%;
  background-color: #4f91b3;
`;
export const Layer3Cover = styled(Layer1Cover)`
  top: 98%;
  background-color: #182e47;
`;
export const Layer4Cover = styled(Layer1Cover)`
  top: 99%;
  background-color: #171c28;
`;
