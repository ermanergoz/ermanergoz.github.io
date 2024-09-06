import "../styles/layout/layout.scss";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <div className="layout">
        {props.children}
      </div>
    </>
  );
}

export default Layout;
