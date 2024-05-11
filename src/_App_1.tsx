import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import "./App.css";
import { useState } from "react";
import { Column, Input } from "./components";
import type { TTask } from "./types";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

function App() {
  const [tasks, setTasks] = useState<TTask[]>([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]);

  const addTask = (title: string) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };

  const getTaskPos = (id: number) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over) return;
    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(Number(active.id));
      const newPos = getTaskPos(Number(over.id));
      return arrayMove(tasks, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="App">
      <h1>My Tasks ✅</h1>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <Input onSubmit={addTask} />
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
}

export default App;
