export default function Footer() {
    return (
        <footer className="mt-6">
            <div className="container has-text-centered">
                <div className="columns pt-4">
                    <div className="column">
                        <span className="title is-pink">
                            <i className="fa-solid fa-piggy-bank"></i>

                            <strong> Pigify </strong>
                        </span>
                    </div>

                    <div className="column">
                        <p className="subtitle"><strong>Useful links</strong></p>


                        <p><a href="https://pigify.gitbook.io/introduction/">Whitepaper</a></p>
                        <p><a href="https://github.com/PigifyApp">Open Source</a></p>
                    </div>

                    <div className="column">
                        <p className="subtitle"><strong>Contact us</strong></p>
                        <p>
                            <a href="mailto:contact@hysland.com">
                                <span style={{ color: "white" }}><i className="fa-solid fa-envelope"></i></span> contact@hysland.com
                            </a>
                        </p>

                        <p>
                            <a href="https://twitter.com/PigifyApp">
                                <span style={{ color: "white" }}><i className="fa-brands fa-twitter"></i></span> @PigifyApp
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mt-4 has-text-centered">
                <p className="py-4">
                    <strong>
                        Made with ❤️ by <a href="https://twitter.com/dresnite">@dresnite</a>
                    </strong>
                </p>
            </div>
        </footer>
    );
}