export default function Navbar() {
    return (
        <div className="container">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <span className="title is-pink">
                            <i className="fa-solid fa-piggy-bank"></i>

                            <strong> Pigify </strong>
                        </span>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <a href="#home" className="navbar-item">
                            <span className="icon">
                                <i className="fas fa-book"></i>
                            </span>

                            <span> Documentation </span>
                        </a>

                        <a href="#whitepaper" className="navbar-item">
                            <span className="icon whitepaper-icon">
                                <i className="fa-solid fa-paperclip"></i>
                            </span>

                            <span> Whitepaper </span>
                        </a>

                        <a href="#roadmap" className="navbar-item">
                            <span className="icon has-text-expo">
                                <i className="fas fa-shoe-prints"></i>
                            </span>

                            <span> Roadmap </span>
                        </a>

                        <a href="#tokenomics" className="navbar-item">
                            <span className="icon is-yellow">
                                <i className="fa-solid fa-bolt"></i>
                            </span>

                            <span> Tokenomics </span>
                        </a>

                        <div className="navbar-item">
                            <a href="#" className="button">
                                <strong>Presale</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}