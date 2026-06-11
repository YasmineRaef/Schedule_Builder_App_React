import "./App.css";
import SelectedClass from "./components/SelectedClass";
import { useState } from "react";

const App = () => {
  //Business Logic
  const [classes, setClasses] = useState([]);
  const [colorIndex, setColorIndex] = useState([0]);
  const timeSlots = [
    "",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
  ];
  const classColors = [
    "#fa7d0f",
    "#facb0f",
    "#71fa0f",
    "#0ffad3",
    "#5b71fc",
    "#9c0ffa",
    "#ff54b5",
  ];

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

          const addedClass = {
            name: courseName,
            day,
            start,
            end,
            //@ts-expect-error
            color: classColors[colorIndex],
          };
          //@ts-expect-error
          setClasses([...classes, addedClass]);
          //@ts-expect-error
          setColorIndex((colorIndex + 1) % classColors.length);

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
            <div className="timeRuler">
              {timeSlots.map((time) => (
                <div className="timeLabel" key={time}>
                  {time}
                </div>
              ))}
            </div>
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
                <strong className="dayHeader">{day}</strong>
                {/*!TODO: Implement the time sync of the added classes as we did
                !TODO with the days of the week*/}
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
                      //@ts-expect-error
                      color={course.color}
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
