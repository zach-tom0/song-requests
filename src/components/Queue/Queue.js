import classes from "./Queue.module.css";
import data from "../../resources/data";

const Queue = () => {
  return (
    <div className={classes.queue}>
      <h2>Queued Songs</h2>
      <div className={classes.queueList}>
        {data.length < 1 ? (
          <h2>Queue a Song!</h2>
        ) : (
          <div>
            <ul>
              {data.map((item) => (
                <li>
                  {item.song}: {item.player}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Queue;
