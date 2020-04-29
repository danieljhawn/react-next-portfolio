import Header from "./Header";
import Footer from "./Footer";

const layoutStyle = {
    background: '#5B6068 url("/hexagons.svg") repeat scroll 0 0',
    height: '100vh',
};

const Layout = (props) => (
  <div>
    <Header />
    <div style={layoutStyle}>{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
