import "./BreadCrumb.sass";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((segment) => segment);

  return pathnames.length > 0 ? (
    <nav className="breadCrumbs">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
          {pathnames.length > 0 && " > "}
        </li>

        {pathnames.map((segment, index) => {
          const path = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={index}>
              {isLast ? (
                <span>{decodeURIComponent(segment)}</span>
              ) : (
                <Link to={path}>{decodeURIComponent(segment)}</Link>
              )}
              {!isLast && ">"}
            </li>
          );
        })}
      </ul>
    </nav>
  ) : null ;
};

export default BreadCrumbs;
