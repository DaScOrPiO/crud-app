import Navigation from "./navigation";
import Header from "./header";
import data from "./data";

export default function NestedLayout({ children }) {
  return (
    <div className="page-container">
      <Navigation dataArr={data} />
      <div className="page-items">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
