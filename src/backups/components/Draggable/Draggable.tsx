import { useDraggable } from "@dnd-kit/core";
import { ReactNode } from "react";

import { CSS } from "@dnd-kit/utilities";

type Props = { id: string; children: ReactNode };

export const Draggable = (props: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div style={style} ref={setNodeRef} {...listeners} {...attributes}>
      {props.children}
    </div>
  );
};
