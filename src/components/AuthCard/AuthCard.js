import classes from "./AuthCard.module.css";

const Card = (props) => {
  return <div className={classes.div}>{props.children}</div>;
};

export default Card;
