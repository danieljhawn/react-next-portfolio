import Header from './Header';
import Footer from './Footer';

const layoutStyle = {
background: '#C4C4C4',
background: '-moz-linear-gradient(top, #C4C4C4 0%, #A2A2A2 51%, #000000 100%)',
background: '-webkit-linear-gradient(top, #C4C4C4 0%, #A2A2A2 51%, #000000 100%)',
background: 'linear-gradient(to bottom, #C4C4C4 0%, #A2A2A2 51%, #000000 100%)'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;