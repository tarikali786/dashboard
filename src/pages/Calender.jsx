import { Header } from "../components";
import { CalendarElement } from "./CalenderElement";
export const Calender = () => {
  return (
    <div className="m-4 md:m-10 mt-10 p-2 md:p-4   bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <CalendarElement />
    </div>
  );
};
