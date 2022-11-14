import "./ExpenseItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  // let title = props.title;
  const [title, setTitle] = useState(props.title);
  const handleClick = () => {
    // title = "Updated";
    // console.log("Hi!");
    setTitle("Updated!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
