import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <a href="www.google.com" className="btn">
        View Fullscreen
      </a>
    </li>
  );
};

export default QuoteItem;
