import Image from '../assets/images/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.avif';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Emily Ramirez</h1>
      <img src={Image} alt="matrix style binary code falling numbers"></img>
      {props.children}
    </header>
  );
}

export default Header;