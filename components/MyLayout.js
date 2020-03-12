import Header from './Header';
import Footer from './Footer';

const layoutStyle = {
//   margin: 10,
//   padding: 20,
  backgroundColor: '#DDD',
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