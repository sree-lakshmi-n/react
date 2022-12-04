import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // let title = props.title;
  // const [title, setTitle] = useState(props.title);
  // const handleClick = () => {
  //   // title = "Updated";
  //   // console.log("Hi!");
  //   setTitle("Updated!");
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={handleClick}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
