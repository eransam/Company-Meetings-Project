import { NavLink } from "react-router-dom";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">

            <NavLink to="/home">Home</NavLink>
            <span> | </span>
            <NavLink to="/Meeting">Meeting</NavLink>
            <span> | </span>
            <NavLink to="/AddMeeting">Add Meeting</NavLink>

            <hr />

			<h1>Company meetings</h1>

            <Routing />

        </div>
    );
}

export default Layout;
