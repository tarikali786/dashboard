import { PriceChart } from "./PriceChart";
import { Header, LineCharts } from "../../components";

export const Financial = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl  ">
      <Header category="Chart " title="Inflation" />
      <div className="w-full mt-10">
        <PriceChart />
      </div>
    </div>
  );
};
