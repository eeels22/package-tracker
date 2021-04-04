export default function Header() {
    //Constants
    const logoHeaderObject = require(`../assets/logo.svg`);
    const logoHeaderURL = logoHeaderObject.default;

    return (
        <header className="Header">
            <p>Testing Header</p>   
            <img src={logoHeaderURL} alt="YellowCorp logo" className="logo-header" />                     
        </header>
    )
}
