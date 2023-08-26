import { Header, LineCharts } from "../../components";

export const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl  ">
      <Header category="Chart " title="Inflation" />
      <div className="w-full mt-10">
        <LineCharts
          currentColor="blue"
          id="line"
          type="Line"
          height="30"
          width="70"
          color="blue"
        />
      </div>
    </div>
  );
};
