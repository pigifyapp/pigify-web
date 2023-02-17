export default function StakingCard() {
    return (
        <div className="mx-auto" style={{width: "60vh"}}>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        PGY is available for stake
                    </p>

                    <button className="card-header-icon" aria-label="more options">
                        <span className="icon">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </header>
                <div className="card-content">
                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                        <br />
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item">Save</a>
                    <a href="#" className="card-footer-item">Edit</a>
                    <a href="#" className="card-footer-item">Delete</a>
                </footer>
            </div>
        </div>
    );
}