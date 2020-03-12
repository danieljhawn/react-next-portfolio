import Link from 'next/link';

const linkStyle = {
    color: '#093D56'
};

const Header = () => (
    <div>
        {/* <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link> */}
        <div className="navbar-expand navbar-dark bg-dark text-white p-3">
            <div className="container col-6 align-items-center">
                <div className="row align-items-center">
                    <div className="col align-items-center">
                        <h1>Daniel Hawn</h1>
                    </div>
                    <div className="col align-items-center">
                        <div className="navbar-nav justify-content-end align-items-center">
                            <Link>
                                <>
                                <a className="nav-item nav-link active align-items-center" href="/about">About</a> |
                                <a className="nav-item nav-link" href="/portfolio">Portfolio</a> |
                                <a className="nav-item nav-link" href="/contact">Contact</a>
                                </>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Header;