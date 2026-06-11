//@ts-expect-error
const SelectedClass = ({ name, day, start, end }) => {
  return (
    <>
      <p className="classObject">
        {name} - {start} to {end}
      </p>
    </>
  );
};

export default SelectedClass;
