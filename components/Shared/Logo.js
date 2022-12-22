import HacksLogo from "/public/static/UI/Hacks.png";
import Image from "next/image";

// TO EDIT SIZE OF LOGO, DO NOT EDIT IMAGE DIMENSIONS DIRECTLY, EDIT CONTAINER WIDTH WRAPPED AROUND

const Logo = (props) => {
  return (
    <>
      <Image
        src={HacksLogo}
        layout="intrinsic"
        alt="Hacks Logo"
        priority
      />
    </>
  );
};
export default Logo;
