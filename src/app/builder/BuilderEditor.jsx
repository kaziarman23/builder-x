import { useState } from "react";
import COMPONENTS from "./ComponentLibrary";
import LivePreview from "./LivePreview";
import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useSaveUserConfigMutation } from "../redux/features/api/configApi";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

function BuilderEditor() {
  const [components, setComponents] = useState(["Navbar", "Hero"]);
  const { userEmail } = useSelector((state) => state.userSlice);
  const [saveUserConfig, { isLoading: saving }] = useSaveUserConfigMutation();

  const remove = (idx) =>
    setComponents((prev) => prev.filter((_, i) => i !== idx));

  const handleSave = async () => {
    if (!userEmail) {
      toast.error("Please log in to save your layout.");
      return;
    }

    try {
      const siteId = uuid();
      const newPage = { components, siteId };
      await saveUserConfig({ userEmail, config: newPage }).unwrap();
      setComponents(["Navbar", "Hero"]);
      toast.success("Your page has been saved successfully!");
    } catch (error) {
      console.error("Error saving config:", error);
      toast.error("Failed to save your page. Please try again.");
    }
  };

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    if (
      source.droppableId === "library" &&
      destination.droppableId === "page-structure"
    ) {
      const compKey = draggableId.replace("lib-", "");
      setComponents((prev) => {
        const copy = Array.from(prev);
        copy.splice(destination.index, 0, compKey);
        return copy;
      });
      return;
    }

    if (
      source.droppableId === "page-structure" &&
      destination.droppableId === "page-structure"
    ) {
      const copy = Array.from(components);
      const [moved] = copy.splice(source.index, 1);
      copy.splice(destination.index, 0, moved);
      setComponents(copy);
      return;
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {/* Component Library */}
        <Droppable droppableId="library" isDropDisabled={true}>
          {(provided) => (
            <div
              className="border rounded-lg overflow-auto p-4"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h3 className="font-semibold mb-2">Component Library</h3>
              {COMPONENTS.map((c, index) => (
                <Draggable
                  key={c.key}
                  draggableId={`lib-${c.key}`}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`p-2 border rounded-lg mb-2 flex justify-between items-center cursor-move ${
                        snapshot.isDragging ? "bg-gray-700" : "bg-black"
                      }`}
                    >
                      <div>
                        <div className="font-medium">{c.title}</div>
                        <div className="text-sm text-gray-500">{c.example}</div>
                      </div>
                      <button
                        className="px-3 py-1 bg-black border text-white hover:bg-white hover:text-black font-bold rounded-xl cursor-pointer"
                        onClick={() =>
                          setComponents((prev) => [...prev, c.key])
                        }
                      >
                        Add
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* Page Structure Panel */}
        <Droppable droppableId="page-structure">
          {(provided) => (
            <div
              className="border rounded-lg p-2 flex flex-col md:col-span-2"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h3 className="font-semibold mb-2">Page Structure</h3>
              <ul className="space-y-2 flex-1 overflow-auto">
                {components.map((c, i) => (
                  <Draggable key={i} draggableId={`comp-${i}`} index={i}>
                    {(provided, snapshot) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`p-2 border rounded flex justify-between items-center bg-black ${
                          snapshot.isDragging ? "bg-gray-800" : "bg-black"
                        }`}
                      >
                        <div>{c}</div>
                        <button
                          onClick={() => remove(i)}
                          className="px-2 py-2 bg-black border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white cursor-pointer"
                        >
                          <FaRegTrashAlt />
                        </button>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="px-4 py-2 bg-black border text-white rounded hover:bg-white hover:text-black font-bold cursor-pointer"
                >
                  {saving ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          )}
        </Droppable>

        {/* Live Preview */}
        <div className="border rounded-lg p-2 md:col-span-3">
          <h3 className="font-semibold mb-2">Live Preview</h3>
          <div className="h-[50vh] md:h-[70vh] overflow-auto">
            <LivePreview components={components} />
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

export default BuilderEditor;
