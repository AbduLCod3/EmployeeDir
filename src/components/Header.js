export default function Header(props) {
  return (
    <div>
      <div className="header">
        <h3>{props.arrowEl}</h3> <h3>{props.dataDisplayed}</h3>{" "}
      </div>
    </div>
  );
}
