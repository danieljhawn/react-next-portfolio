import Header from './Header';

const layoutStyle = {
  margin: 10,
  padding: 20,
  backgroundColor: '#DDD',
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;