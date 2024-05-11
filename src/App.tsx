import { DndContext, DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import "./App.css";
import { Draggable, Droppable } from "./components";
import { useState } from "react";

function App() {
  const containers = ["A", "B", "C"];
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);
  const draggableMarkup = <Draggable id="draggable">Drag me</Draggable>;

  return (
    <div className="App">
      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}
        {containers.map((id) => (
          <Droppable key={id} id={id}>
            {parent === id ? draggableMarkup : "Drop here"}
          </Droppable>
        ))}
      </DndContext>
    </div>
  );

  function handleDragEnd({ over }: DragEndEvent) {
    setParent(over ? over.id : null);
  }
}

export default App;
