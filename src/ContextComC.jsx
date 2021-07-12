import { FirstName } from "./App";

const ContextComC = () => {
  return (
    <div>
      <FirstName.Consumer>
        {(fname) => {
          return <p>This is {fname}</p>;
        }}
      </FirstName.Consumer>
    </div>
  );
};

export default ContextComC;
