import { Link, useLocation } from "react-router-dom";
import "./index.css"
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaMailBulk, FaClock, FaTv, FaCopyright, FaQuestionCircle} from "react-icons/fa";
function KanbasNavigation() {
    const style = { color: "red"}
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" style={style}/>  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" style={style} />  },
    { label: "Courses",   icon: <FaBook className="fs-2" style={style}/>           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" style={style}/> },
    { label: "Inbox",  icon: <FaMailBulk className="fs-2" style={style} /> },
    { label: "History",  icon: <FaClock className="fs-2" style={style} /> },
    { label: "Studio",  icon: <FaTv className="fs-2" style={style}/> },
    { label: "Commons",  icon: <FaCopyright className="fs-2" style={style}/> },
    { label: "Help",  icon: <FaQuestionCircle className="fs-2" style={style}/> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation col-sm-1 d-none d-sm-block">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;