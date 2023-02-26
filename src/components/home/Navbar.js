import {useState} from "react";
import PresaleModal from "./PresaleModal";

export default function Navbar() {
    const [isPresaleModalOpen, setPresaleModalOpen] = useState(false);
    const [isNavbarActive, setNavbarActive] = useState(false);

    return (
        <section>
            <PresaleModal isActive={isPresaleModalOpen} handleClose={() => { setPresaleModalOpen(false) } } />
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                        <span className="title is-pink">
                            <i className="fa-solid fa-piggy-bank"></i>

                            <strong> Pigify </strong>
                        </span>
                        </a>

                        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                           data-target="navbar" onClick={() => { setNavbarActive(!isNavbarActive) }}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbar" className={"navbar-menu" + (isNavbarActive ? " is-active" : "")}>
                        <div className="navbar-end">
                            <a href="https://pigify.gitbook.io/introduction/" target="_blank" className="navbar-item">
                            <span className="icon whitepaper-icon">
                                <i className="fa-solid fa-paperclip"></i>
                            </span>

                                <span className="navbar-text"> Whitepaper </span>
                            </a>

                            <a href="#roadmap" className="navbar-item">
                            <span className="icon has-text-expo">
                                <i className="fas fa-shoe-prints"></i>
                            </span>

                                <span className="navbar-text"> Roadmap </span>
                            </a>

                            <a href="#tokenomics" className="navbar-item">
                            <span className="icon is-yellow">
                                <i className="fa-solid fa-bolt"></i>
                            </span>

                                <span className="navbar-text"> Tokenomics </span>
                            </a>

                            <div className="navbar-item">
                                <a onClick={() => { setPresaleModalOpen(true) } } className="button presale-button is-white">
                                    <strong>Presale</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}