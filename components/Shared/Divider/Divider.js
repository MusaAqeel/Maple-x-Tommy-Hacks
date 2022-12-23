import React from "react";

import { Wrapper, Shape } from "./DividerStyles";

const Divider = () => {
  return (
    <Wrapper>
      <Shape
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 155"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0H1920V89.3302C1920 89.3302 1717.5 154.519 1405 154.519C1092.5 154.519 878.455 89.3302 520 89.3302C161.545 89.3302 0 155 0 155V0Z"
          fill="#20388B"
        />
      </Shape>
    </Wrapper>
  );
};
export default Divider;
