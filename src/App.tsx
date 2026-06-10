import "./App.css";
import SelectedClass from "./components/SelectedClass";
import Class from "./components/SelectedClass";

const App = () => {
  return (
    <>
      <h1>Schedule Builder</h1>
      <form
        className="addCourseForm"
        name="addCourseForm"
        onSubmit={(event) => {
          event.preventDefault();
          const courseName =
            //@ts-expect-error
            document.forms["addCourseForm"]["courseName"].value.trim();
          const startTime =
            //@ts-expect-error
            document.forms["addCourseForm"]["startTime"].value.trim();
          const endTime =
            //@ts-expect-error
            document.forms["addCourseForm"]["endTime"].value.trim();
          const dayOfWeek =
            //@ts-expect-error
            document.forms["addCourseForm"]["dayPicker"].value.trim();
          if (courseName == "") {
            alert("Please enter a course name first to be added.");
            return false;
          }
          if (startTime == "" || startTime == endTime) {
            alert("Please enter a valid course time.");
            return false;
          }
          // alert("Entered Course is " + courseName);
          // alert("Entered Day of Week is " + dayOfWeek);
          // alert("Entered start time is " + startTime);
          // alert("Entered end time is " + endTime);
          return true;
        }}
      >
        <div className="addSection">
          <div>
            <h2>Add Class</h2>
          </div>
          <div className="classData">
            <div>
              <h3>Course Name</h3>
              <input type="text" className="courseName" name="courseName" />
            </div>
            <div>
              <h3>Day of The Week</h3>
              <select className="dayPicker" name="dayPicker">
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </select>
            </div>
            <div>
              <h3>Start Time</h3>
              <input type="time" className="startTime" name="startTime" />
            </div>
            <div>
              <h3>End Time</h3>
              <input type="time" className="endTime" name="endTime" />
            </div>
            <div className="break"></div>
            <button className="addBTN" type="submit">
              Add Course
            </button>
          </div>
          <hr></hr>
          <div className="gridLayout">
            <div className="dayOfWeek">
              Saturday
              <p className="classObject">testing1 with course name and time</p>
              <p className="classObject">testing1</p>
              <p className="classObject">testing1</p>
              <p className="classObject">testing1</p>
            </div>
            <div className="dayOfWeek">
              Sunday
              <p className="classObject">testing1 with course name and time</p>
              <p className="classObject">testing1</p>
              <p className="classObject">testing1</p>
              <p className="classObject">testing1</p>
            </div>
            <div className="dayOfWeek">
              Monday
              <SelectedClass
                day="Monday"
                name="CST 1201"
                start="12:00PM"
                end="1:00PM"
              />
            </div>
            <div className="dayOfWeek">
              Tuesday
              <p className="classObject">testing1 with course name and time</p>
              <p className="classObject">testing1</p>
              <p className="classObject">testing1</p>
              <p className="classObject">testing1</p>
            </div>
            <div className="dayOfWeek">
              Wednesday
              <p className="classObject">testing1 with course name and time</p>
              <p className="classObject">testing1</p>
              <p className="classObject">testing1</p>
              <p className="classObject">testing1</p>
            </div>
            <div className="dayOfWeek">
              Thursday
              <p className="classObject">testing1 with course name and time</p>
              <p className="classObject">testing1</p>
              <p className="classObject">testing1</p>
              <p className="classObject">testing1</p>
            </div>
            <div className="dayOfWeek">
              Friday
              <p className="classObject">testing1 with course name and time</p>
              <p className="classObject">testing1</p>
              <p className="classObject">testing1</p>
              <p className="classObject">testing1</p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default App;
