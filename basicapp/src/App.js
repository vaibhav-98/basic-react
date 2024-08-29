import Expenses from "./components/Expenses";

function App() {
  // let expenceDate = new Date(2021, 3, 28);
  // let expenceTitle = "School Fee";
  // let expenceAmount = 300;

  let expense = [
    {
      id: "e1",
      title: "School Fee",
      amount: 250,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e2",
      title: "Books",
      amount: 350,
      date: new Date(2021, 10, 12),
    },
    {
      id: "e3",
      title: "House rent",
      amount: 2500,
      date: new Date(2024, 5, 12),
    },
    {
      id: "e4",
      title: "Travel",
      amount: 500,
      date: new Date(2022, 8, 14),
    },
  ];

  return (
    <div>
      <h2>Let's getstarted</h2>
       <Expenses item={expense}/>
    </div>
  );
}

export default App;
