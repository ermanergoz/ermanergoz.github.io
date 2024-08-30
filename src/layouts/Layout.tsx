import Header from "../components/Header";
import "../styles/layout/layout.scss";

interface LayoutProps {
  children: React.ReactNode[];
}

function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <div className="layout">
        {props.children.map((s) => {
          return s;
        })}
      </div>
    </>
  );
}

export default Layout;
