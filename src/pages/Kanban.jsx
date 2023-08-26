import { Header } from "../components";
import {KanbanElement} from "./KanbanElement"
export const Kanban = () => {
  return (
    <div className="m-4 md:m-10 mt-10 p-2 md:p-4   bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <KanbanElement/>
    </div>
  );
};
