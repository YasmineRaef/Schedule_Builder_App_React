import "./App.css";
import SelectedClass from "./components/SelectedClass";
import { useState } from "react";

const App = () => {
  //Business Logic
  const [classes, setClasses] = useState([]);

  return (
    <>
      <h1>Schedule Builder</h1>
      <form
        className="addCourseForm"
        name="addCourseForm"
        onSubmit={(event) => {
          event.preventDefault();

          const courseName = event.target.courseName.value;
          const start = event.target.startTime.value;
          const end = event.target.endTime.value;
          const day = event.target.dayPicker.value;

          if (courseName === "") {
            alert("Please enter a course name first to be added.");
            return;
          }
          if (start === "" || start === end) {
            alert("Please enter a valid course time.");
            return;
          }

          const addedClass = { name: courseName, day, start, end };
          //@ts-expect-error
          setClasses([...classes, addedClass]);

          event.target.courseName.value = "";
          event.target.startTime.value = "";
          event.target.endTime.value = "";
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
          <hr />
          <div className="gridLayout">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <div className="dayOfWeek" key="dayOfWeek">
                <strong>{day}</strong>
                {classes
                  //@ts-expect-error
                  .filter((course) => course.day === day)
                  .map((course, index) => (
                    <SelectedClass
                      key={index}
                      //@ts-expect-error
                      name={course.name}
                      //@ts-expect-error
                      day={course.day}
                      //@ts-expect-error
                      start={course.start}
                      //@ts-expect-error
                      end={course.end}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </form>
    </>
  );
};

export default App;
