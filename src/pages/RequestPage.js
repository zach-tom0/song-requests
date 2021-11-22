import AuthModal from "../components/Auth/AuthModal";
import SearchCard from "../components/SearchCard/SearchCard";
import classes from "./RequestPage.module.css";

const RequestPage = () => {
  const style = {
    "border-color": "black",
  };

  return (
    <div className={classes.main}>
      <AuthModal />
      <div className={classes.div}>
        <SearchCard />
      </div>
      <div className={classes.div}></div>
    </div>
  );
};

export default RequestPage;
