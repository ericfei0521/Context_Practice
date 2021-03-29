const NumberBox = ({ numbers, section, setNumber, status }) => {
  return (
    <div className="numbersection">
      <h1>{section}</h1>
      {numbers.map((number) => {
        if (number !== "sections" && number !== "") {
          return (
            <button
              value={number}
              name={section}
              key={`${section}${number}`}
              disabled={
                status[number].includes(section) || !status[number].length
                  ? false
                  : true
              }
              onClick={(e) => setNumber(e.target.value, e.target.name, false)}
            >
              {number}
            </button>
          );
        }
      })}
    </div>
  );
};
export default NumberBox;
