import { FirstName } from "./App";
import { LastName } from "./App";

const ContextComC = () => {
  return (
    <div>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <p>
                    <h4>This is Contect API</h4>
                    This is {fname} {lname}
                  </p>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </div>
  );
};

export default ContextComC;
