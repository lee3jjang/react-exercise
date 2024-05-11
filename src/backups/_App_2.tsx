import { DndContext, DragEndEvent } from "@dnd-kit/core";
import "./App.css";
import { Draggable, Droppable } from "../components";
import { useState } from "react";

function App() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable id="draggable">Drag me</Draggable>;

  return (
    <div className="App">
      <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        <Droppable id="droppable">
          {isDropped ? draggableMarkup : "Drop here"}
        </Droppable>
      </DndContext>
    </div>
  );

  function handleDragEnd(event: DragEndEvent) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }
}

export default App;
