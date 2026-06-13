### Project:

Create a mini project mimicing a student schedule builder in React.

### Built:

- Created the full UI with hard-coded code with full **CSS** & **HTML**
- Added a *CSS Grid* for visualizing the added class schedule based on time and day of the week

```js
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
```

- Hard coded a time based 1-hour incrementing ruler to map classes based on time
- Added the ability for the student/user to write the class name, enter the day, start time and end time of the class.
- Created a class component to hold all data related to each class including the class name, class start time, end time, day, and the color.

```js
const GRID_START = timeToMinutes("8:00");
const PX_PER_MINUTE = 32 / 60;
const EXTRA_OFFSET = 42;

//@ts-expect-error
const SelectedClass = ({ name, day, start, end, color }) => {
  //Business Logic
  const startMin = timeToMinutes(start);
  const endMin = timeToMinutes(end);
  const classDuration = endMin - startMin;
  const duration = Math.max(classDuration, 40);
  const topOffset = EXTRA_OFFSET + (startMin - GRID_START) * PX_PER_MINUTE;
  const classHeight = EXTRA_OFFSET / 2 + duration * PX_PER_MINUTE;

  return (
    <>
      <div
        className="classObject"
        style={{
          background: `${color}`,
          position: "absolute",
          top: `${topOffset}px`,
          height: `${classHeight}px`,
          left: "5px",
          right: "5px",
        }}
      >
        {name} <br /> {start} - {end}
      </div>
    </>
  );
};

function timeToMinutes(duration: string) {
  var [hour, minute] = duration.split(":").map(Number);
  return hour * 60 + minute;
}

export default SelectedClass;

```

- Started with hard coding data on primary commits, then replaced with dynamic React states that re-render when hot restarted.
- Impelmented a feature for class background color changing when new classes are added based upon a predefined color array.

```js
const classColors = [
    "#fa7d0f",
    "#facb0f",
    "#71fa0f",
    "#0ffad3",
    "#5b71fc",
    "#9c0ffa",
    "#ff54b5",
  ];

setColorIndex((colorIndex + 1) % classColors.length);
```

- Implemented basic error handling for checking if the class name is empty before adding a class, and when the start date is the same as the end date.

```js
if (courseName === "") {
  alert("Please enter a course name first to be added.");
  return;
}
if (start === "" || start === end) {
  alert("Please enter a valid course time.");
  return;
}
```

### Current Work in progress:

- Align added classes with the time ruler to the left so that classes are added at the right corresponding time.
- Sanitizing the data entered by the user to ensure data is error-free.
- Modify the class object sizing to make sure the height of the class is computed automatically based on duration computing.
- Style and modify spacing to make the website more visually appealing.

### Extra features:

- Will replace the course name text field to a search bar for the user to search for classes.
- Add an edit/Update and Delete options on the class objects that are added in the grid.
- Make the website more dynamic by selecting and dragging classes where day and time will be automatically updated.
- Publish the final project on Gihub Pages.

### Disclaimer:
I use **WSL** on my Windows machine, and I had some problems with the `yarn dev` command on hot reload.  
***The following code was copied in the `vite.config.ts` file:***
```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

//Detect if running in WSL by checking for /proc/version
const isWSL =
  fs.existsSync("/proc/version") &&
  fs
    .readFileSync("/proc/version", "utf-8")
    .toLocaleLowerCase()
    .includes("microsoft");

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: isWSL,
      interval: 200,
    },
  },
});

```
*The original PR can be found here:*    
**PR #1: Implement WSL detection in Vite config** https://github.com/jonathan-chin/ttp-citytech-2026-summer-example-react-chat-app/pull/1
