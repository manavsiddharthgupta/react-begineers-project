import { Redirect, Route, Switch } from "react-router-dom";
import QuoteList from "./components/quotes/QuoteList";
import QuoteForm from "./components/quotes/QuoteForm";
import HighlightedQuote from "./components/quotes/HighlightedQuote";
function App() {
  let allquotes = [
    {
      text: "use ThokoCondoms while having sex",
      author: "Manav Gupta",
      id: "q1",
    },
    {
      text: "Aids ko rokne ke liye use kare ThokoCondom",
      author: "Shashank Raj",
      id: "q2",
    },
    {
      text: "Flavour wala lene ke liya use karein ThokoCondoms",
      author: "Vikash kr Upadhyay",
      id: "q3",
    },
  ];
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" exact>
        <QuoteList quotes={allquotes} />
      </Route>
      <Route path="/quotes/:quoteid">
        <HighlightedQuote />
      </Route>
      <Route path="/quoteform">
        <QuoteForm />
      </Route>
    </Switch>
  );
}

export default App;
