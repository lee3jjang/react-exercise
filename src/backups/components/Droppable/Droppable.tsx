import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

type Props = { id: string; children: ReactNode };

export const Droppable = (props: Props) => {
  const { isOver, setNodeRef } = useDroppable({ id: props.id });
  const style = {
    color: isOver ? "red" : undefined,
    backgroundColor: isOver ? "yellow" : undefined,
    padding: "10px 20px",
    border: "3px dashed blue",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
};
