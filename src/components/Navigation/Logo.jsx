// import Logo from "/BeKlube logo - 3031x1130.png";
import logo from "./../../../src/assets/BT_logo.png";

const Logo = () => {
  return (
    <div className=" relative w-[180px] md:w-[220px] lg:w-[260px] xl:w-[300px] h-full">
      <a href="/" className="block h-full">
        {/* Base Logo */}
        <img
          src={logo}
          className=" w-full h-auto object-contain absolute inset-0 transition-opacity duration-300 max-h-full"
          alt="Home"
        />
        
        {/* Hovered Logo
        <img
          src={Logo}
          className=" hover:bg-contain hover:bg-clip-content hover:bg-white  hover:rounded-lg w-full h-auto object-contain opacity-0 absolute inset-0 transition-opacity duration-300 hover:opacity-100 max-h-full"
          alt="Home"
        /> */}
      </a>
    </div>
  );
};

export default Logo;
