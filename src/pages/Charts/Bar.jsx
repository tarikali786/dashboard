import { Stacked } from "./Stacked";
import { Header } from "../../components";
export const Bar = () => {
  return (
    <>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl  ">
        <Header category="Chart " title="Bar" />
        <div className="w-full mt-10">
          <Stacked />;
        </div>
      </div>
    </>
  );
};
