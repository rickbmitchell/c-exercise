import "./App.scss";
import Card from "./components/card/card";

function App() {
  var onClick = () => {
    alert("You clicked the button!");
  };

  return (
    <main className="exercise-page">
      <div className="container">
        <div className="row">
          <h1 className="exercise-page__heading">Add a New Object</h1>
          <p className="exercise-page__intro-text">
            Choose an option below. You can always change your mind or make
            edits later.
          </p>
        </div>
      </div>
      <div className="container card-container">
        <div className="row">
          <div className="col-sm card-wrapper">
            <Card
              headline="From Scanned Data"
              description={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <strong>ut labore et dolore magna aliqua</strong>. Ut enim ad minim veniam, quis nostrud exercitation.</p>}
              icon="check"
              button
              buttonId="scan-data"
              buttonText="Scan data"
              onClickOne={onClick}
              warning
              warningText="Time-saver"
            />
          </div>
          <div className="col-sm card-wrapper">
            <Card
              headline="Import file"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon="import"
              button
              buttonId="import-xlsx"
              buttonText="Import XLSX"
              buttonTwo
              buttonTwoId="import-xml"
              buttonTwoText="Import XML"
              onClickOne={onClick}
              onClickTwo={onClick}
            />
          </div>
          <div className="col-sm card-wrapper">
            <Card
              headline="Copy from"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon="copy"
              button
              buttonId="copy-object"
              buttonText="Copy object"
              buttonTwo
              buttonTwoId="copy-other-object"
              buttonTwoText="Copy other object"
              onClickOne={onClick}
              onClickTwo={onClick}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <hr className="exercise-page__divider" />
          <p>
            or,{" "}
            <a className="exercise-page__link" href="#" target="_blank">
              start with a blank template
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
