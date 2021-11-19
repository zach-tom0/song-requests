import Header from "../Layout/Header";

const Layout = (props) => {
    return (
      <>
        <Header />
        <main>{props.children}</main>
      </>
    );
  };
  
  export default Layout;
  