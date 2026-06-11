const GRID_START = timeToMinutes("8:00");
const PX_PER_MINUTE = 32 / 60;
const EXTRA_OFFSET = 100;

//@ts-expect-error
const SelectedClass = ({ name, day, start, end }) => {
  //Business Logic
  const startMin = timeToMinutes(start);
  const endMin = timeToMinutes(end);
  const classDuration = endMin - startMin;
  const duration = Math.max(classDuration, 40);
  const topOffset = EXTRA_OFFSET + (startMin - GRID_START) * PX_PER_MINUTE;
  const classHeight = duration * PX_PER_MINUTE;

  return (
    <>
      <div
        className="classObject"
        style={{
          background: "palevioletred",
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
  const [hour, minute] = duration.split(":").map(Number);
  return hour * 60 + minute;
}

export default SelectedClass;
