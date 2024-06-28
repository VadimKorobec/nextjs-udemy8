import MainHeader from "../mainHeader/mainHeader";

const Layout = (props) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
