export default function Header() {
    //Constants
    const logoObject = require(`../assets/logo.svg`);
    const logoURL = logoObject.default;

    return (
        <Header className="Header">
            <img src={logoURL} alt="YellowCorp logo"/>
            <p>testing header</p>            
        </Header>
    )
}
