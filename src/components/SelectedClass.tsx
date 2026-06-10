//@ts-expect-error
const SelectedClass = ({ name, day, start, end }) => {
  return (
    <>
      <p className="classObject">
        {name} - {day} - {start} - {end}
      </p>
    </>
  );
};

export default SelectedClass;
