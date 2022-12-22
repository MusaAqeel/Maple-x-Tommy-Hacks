import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Icon = styled.svg`
  width: 100%;
  height: 100%;
  cursor: pointer;

  & circle,
  & path {
    transition: fill 0.3s ease-out;
  }

  &:hover circle {
    fill: #3b5998;
  }

  &:hover path {
    fill: #ffffff;
  }
`;
const FacebookIcon = () => {
  return (
    <Wrapper>
      <Icon
        alt="Twitter"
        priority={true}
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25.0004" cy="24.9998" r="20.8333" fill="#F9F9F9" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.5369 17.6642C29.8876 17.5344 29.0106 17.4373 28.4591 17.4373C26.9657 17.4373 26.8687 18.0866 26.8687 19.1255V20.9749H30.6018L30.2764 24.8058H26.8687L26.8687 36.4582H22.1945L22.1945 24.8058H19.7921L19.7921 20.9749H22.1945V18.6053C22.1945 15.3596 23.72 13.5415 27.5501 13.5415C28.8808 13.5415 29.8547 13.7363 31.1205 13.996L30.5369 17.6642Z"
          fill="#171C28"
        />
      </Icon>
    </Wrapper>
  );
};
export default FacebookIcon;
