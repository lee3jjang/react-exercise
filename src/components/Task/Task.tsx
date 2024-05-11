import "./Task.css";
import { TTask } from "../../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type TProps = TTask;

export const Task = ({ id, title }: TProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = { transition, transform: CSS.Transform.toString(transform) };

  return (
    <div
      className="task"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <input type="checkbox" className="checkbox" />
      {title}
    </div>
  );
};
