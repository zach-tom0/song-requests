import Queue from "../components/Queue/Queue";
import AuthModal from "../components/Auth/AuthModal";
import SearchCard from "../components/SearchCard/SearchCard";
import classes from "./RequestPage.module.css";
import NowPlaying from "../components/NowPlaying/NowPlaying";

const RequestPage = () => {
  
  
  return (
    <div className={classes.main}>
      <AuthModal />
      
      <div className={classes.div}>
        <SearchCard />
      </div>
      
      <div className={classes.div}>
        <div className={classes.queue}>
          <Queue /> 
        </div>  
        <div className={classes.nowplaying}>
          <NowPlaying />
        </div>
      </div>

    </div>
  );
};

export default RequestPage;
