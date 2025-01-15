import Chart from "./barChart";
import Piechart from "./pieChart";

const Charts: React.FC = () => {
  return (
    <div className="flex flex-wrap md:flex-col lg:flex-row gap-5 justify-between items-center bg-white w-full">
      <Chart />
      <Piechart />
    </div>
  );
};
export default Charts;
