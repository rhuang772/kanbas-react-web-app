import ModuleList from "../Modules/List";
import { FaBookOpen, FaChartBar, FaCreativeCommons, FaHome, 
    FaRegCheckCircle, FaBullhorn, FaBell, FaRegFileExcel, FaCalendar } from "react-icons/fa";

function Home() {
    const style = { color: "red" };
    return (
        <div>
            <div className="flex-fill row">
                <h2>Home</h2>
                <ModuleList />
                <div className="col-md-4">
                    <h3>Course Status</h3>
                    <hr />
                    <button type="button"><FaRegFileExcel/>Unpublish</button>&nbsp;
                    <button className="green-background white" type="button" disabled><FaRegCheckCircle/> Published</button><br /><br />
                    <button className="course-status-button" type="button"><FaBookOpen/> Import Existing
                        Content</button><br />
                    <button className="course-status-button" type="button"><FaCreativeCommons/> Import From Commons</button><br />
                    <button className="course-status-button" type="button"><FaHome/> Choose Home Page</button><br />
                    <button className="course-status-button" type="button"><FaChartBar/> View Course Stream</button><br />
                    <button className="course-status-button" type="button"><FaBullhorn/> New Announcement</button><br />
                    <button className="course-status-button" type="button"><FaChartBar/> New Analytics</button><br />
                    <button className="course-status-button" type="button"><FaBell/> View Course Notifications</button><br /><br />
                    <h5>To Do</h5>
                    <hr />
                    <p>
                        <a href="#" style={style}>Grade A1 - Propulsion Assignment</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FaCalendar/> <a href="#" style={style}> View
                            Calendar</a>
                    </p>
                    <h5>Coming Up</h5>
                    <hr />
                    <p><FaCalendar/> <a href="#"
                        style={style}>Lecture RS4550.12631.202410 Sep 7 at
                        11:45am</a></p>
                    <p><FaCalendar /> <a href="#"
                        style={style}>Lecture RS4550.12631.202410 Sep 11 at
                        11:45am</a></p>
                    <p><FaCalendar /> <a href="#"
                        style={style}>RS4570 06 SP23 Lecture Sep 11 at 6pm
                    </a></p>
                </div>
            </div>
        </div>
    );
}
export default Home;