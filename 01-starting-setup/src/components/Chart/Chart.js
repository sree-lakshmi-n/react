import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        <ChartBar
          key={props.label}
          value={props.value}
          max={null}
          month={props.label}
        />;
      })}
    </div>
  );
};
export default Chart;
