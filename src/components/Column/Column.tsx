import "./Column.css";
import { TTask } from "../../types";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Task } from "../Task";

type TProps = { tasks: TTask[] };

export const Column = ({ tasks }: TProps) => {
  return (
    <div className="column">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </SortableContext>
    </div>
  );
};
