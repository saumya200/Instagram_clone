import "./SearchPage.css";
import search from "../../Images/search.png";
import discoverPeople from "../../Images/discoverPeople.png";
import polarBear from "../../Images/polarBear.jpg";

function SearchPage() {
  return (
    <div>
      <div className="search--page--header">
        <div className="search--tab">
          <img src={search} className="search--page--search--image" />
          <span className="search--page--span">
            <p className="search--page--text">Search</p>
            <img
              src={discoverPeople}
              className="search--page--discover--image"
            />
          </span>
        </div>
        <div className="search--page--images">
          <img src={polarBear} className="polarBear" />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
