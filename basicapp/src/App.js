import ExpenseItem from "./components/ExpenseItem";

function App() {
  let expenceDate = new Date(2021, 3, 28);
  let expenceTitle = "School Fee";
  let expenceAmount = 300;

  return (
    <div>
      <h2>Let's getstarted</h2>
      <ExpenseItem
        date={expenceDate}
        title={expenceTitle}
        amount={expenceAmount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
