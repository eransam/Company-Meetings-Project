import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import AddMeeting from "../../MeetingArea/AddMeeting/AddMeeting";
import Meeting from "../../MeetingArea/Meeting/Meeting";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/Meeting" element={<Meeting />} />
                <Route path="/AddMeeting" element={<AddMeeting />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </div>
    );
}

export default Routing;
