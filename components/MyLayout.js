import Header from './Header';
import Footer from './Footer';

const layoutStyle = {
//   margin: 10,
//   padding: 20,
background: '#C4C4C4',
background: '-moz-linear-gradient(top, #C4C4C4 0%, #A2A2A2 51%, #000000 100%)',
background: '-webkit-linear-gradient(top, #C4C4C4 0%, #A2A2A2 51%, #000000 100%)',
background: 'linear-gradient(to bottom, #C4C4C4 0%, #A2A2A2 51%, #000000 100%)'
//   border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;