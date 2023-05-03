import classes from "./HighlightedQuote.module.css";
import { Route, useParams } from "react-router-dom";
import Comments from "../comments/Comments";

const HighlightedQuote = (props) => {
  let param = useParams();
  console.log(param.quoteid);
  return (
    <figure className={classes.quote}>
      <p>Individuals Quote</p>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
      <Route path={`/quotes/${param.quoteid}/comment`}>
        <Comments />
      </Route>
    </figure>
  );
};

export default HighlightedQuote;
