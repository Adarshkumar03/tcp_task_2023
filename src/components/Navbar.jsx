const downArrow = "https://generation-sessions.s3.amazonaws.com/821cf9d36b242fc3bb455c9c4d7fe6d5/img/icon-font-awesome-solid-angle-down-2.svg";
const logo = "https://generation-sessions.s3.amazonaws.com/821cf9d36b242fc3bb455c9c4d7fe6d5/img/logo-3.svg";

const Navbar = () => {
  return <div className="navbar-container">
  <div className="navbar">
    <div className="text-wrapper">About</div>
    <div className="text-wrapper">Features</div>
    <div className="text-wrapper">Download</div>
    <div className="text-wrapper">Support</div>
    <div className="div-2">
      <div className="text-wrapper">Partners</div>
      <img
        className="icon-font-awesome"
        src={downArrow}
      />
    </div>
  </div>
  <div className="join-container">
    <button className="button"><div className="sign-up">Sign In</div></button>
    <button className="div-wrapper"><div className="text-wrapper-2">Sign Up</div></button>
  </div>
  <img
    className="logo"
    src={logo}
  />
</div>
}

export default Navbar;