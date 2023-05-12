import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

export default function HomePage(props) {
  const dataDisplayed = <div className="dataDisplayed">Employee Directory</div>;

  return (
    <div className="homePage">
      <Header dataDisplayed={dataDisplayed} />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}
