### Project:

Create a mini project mimicing a student schedule builder in React.

### Built:

- Created the full UI with hard-coded code with full **CSS** & **HTML**
- Added a _CSS Grid_ for visualizing the added class schedule based on time and day of the week
- Hard coded a time based 1-hour incrementing ruler to map classes based on time
- Added the ability for the student/user to write the class name, enter the day, start time and end time of the class.
- Created a class object to hold all data related to each class including the class name, class start time, end time, day, and the color.

![[Pasted image 20260611140213.png]]

- Started with hard coding data on primary commits, then replaced with dynamic React states that re-render when hot restarted.

![[Pasted image 20260611140424.png]]

- Implmented a feature for class backgroung color changing when new classes are added based upon a predefined color array.
- Implemented basic error handling for checking if the class name is empty before adding a class, and when the start date is after the end date or when they are equal.

![[Pasted image 20260611135634.png]]

### Current Work in progress:

- Align added classes with the time ruler to the left so that classes are added at the right corresponding time.
- Add more data cleansing chacking on the data entered by the user to ensure data is error-free
- Modify the class object sizing to make sure the height of the class is computed automatically based on duration computing.
- Style and modify spacing to make the website more dynamic

### Extra features:

- Will replace the course name text field to a search bar for the user to search for classes.
- Add an edit/Update and Delete options on the class objects that are added in the grid
- Make the website more dynamic by selecting and dragging classes where day and time will be automatically updated
- Publish the final project on Gihub Pages.
