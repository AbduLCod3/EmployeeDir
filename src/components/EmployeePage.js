import Header from "./Header";

export default function EmployeePage(props) {
  const arrowEl = <div class="arrowEl"></div>;
  const dataDisplayed = <div className="dataDisplayed">Employee</div>;
  return (
    <div className="employeePage">
      <Header dataDisplayed={dataDisplayed} arrowEl={arrowEl} />
      <div className="EmployeeInfo">
        <div id="empPage">
          <div id="imgControl">
            <img id="imgControl2" src={require("./img1.PNG")} alt="img" />
          </div>
          <div className="julieDiv">
            <ul>
              <li>
                <strong>Julie Taylor</strong>
              </li>
              <li>VP of Marketing</li>
            </ul>
          </div>
        </div>

        <div id="empPage">
          <div>
            <ul>
              <li>
                <strong>Call Office</strong>
              </li>
              <li>781-000-0002 </li>
            </ul>
          </div>
          <div class="arrow"></div>
        </div>

        <div id="empPage">
          <div>
            <ul>
              <li>
                <strong>Call Mobile</strong>
              </li>
              <li>781-000-0002 </li>
            </ul>
          </div>
          <div class="arrow"></div>
        </div>

        <div id="empPage">
          <div>
            <ul>
              <li>
                <strong>SMS</strong>
              </li>
              <li>781-000-0002 </li>
            </ul>
          </div>
          <div class="arrow"></div>
        </div>

        <div id="empPage">
          <div>
            <ul>
              <li>
                <strong>Email</strong>
              </li>
              <li>781-000-0002 </li>
            </ul>
          </div>
          <div class="arrow"></div>
        </div>
      </div>
    </div>
  );
}
