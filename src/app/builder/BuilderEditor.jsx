import { useState, useEffect } from "react";
import ComponentLibrary from "./ComponentLibrary";
import LivePreview from "./LivePreview";
import {
  FaAngleDoubleUp,
  FaAngleDoubleDown,
  FaRegTrashAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import {
  useGetUserConfigQuery,
  useSaveUserConfigMutation,
} from "../redux/features/api/configApi";
import toast from "react-hot-toast";

function BuilderEditor() {
  const [components, setComponents] = useState(["Navbar", "Hero"]);
  const { userEmail } = useSelector((state) => state.userSlice);

  const { data: userConfig, refetch } = useGetUserConfigQuery(userEmail);
  const [saveUserConfig, { isLoading: saving }] = useSaveUserConfigMutation();

  // Load the last saved page if exists
  useEffect(() => {
    if (Array.isArray(userConfig?.config) && userConfig.config.length > 0) {
      const lastPage = userConfig.config[userConfig.config.length - 1];
      if (lastPage?.components) setComponents(lastPage.components);
    }
  }, [userConfig]);

  const add = (c) => setComponents((prev) => [...prev, c]);
  const remove = (idx) =>
    setComponents((prev) => prev.filter((_, i) => i !== idx));

  const moveUp = (idx) => {
    if (idx === 0) return;
    setComponents((prev) => {
      const copy = [...prev];
      [copy[idx - 1], copy[idx]] = [copy[idx], copy[idx - 1]];
      return copy;
    });
  };

  const moveDown = (idx) => {
    setComponents((prev) => {
      if (idx === prev.length - 1) return prev;
      const copy = [...prev];
      [copy[idx + 1], copy[idx]] = [copy[idx], copy[idx + 1]];
      return copy;
    });
  };

  const handleSave = async () => {
    if (!userEmail) {
      toast.error("Please log in to save your layout.");
      return;
    }

    try {
      const newPage = { components };

      // Send only the new page to append on server
      await saveUserConfig({ userEmail, config: newPage }).unwrap();

      setComponents(["Navbar", "Hero"]);
      toast.success("Your page has been saved successfully!");
      refetch();
    } catch (error) {
      console.error("Error saving config:", error);
      toast.error("Failed to save your page. Please try again.");
    }
  };

  return (
    <div className="h-full grid grid-cols-3 gap-4 p-4">
      {/* Sidebar */}
      <div className="col-span-1 border rounded-lg overflow-auto">
        <ComponentLibrary onAdd={add} />
      </div>

      {/* Page structure panel */}
      <div className="col-span-2 border rounded-lg p-2 flex flex-col">
        <div className="flex-1 overflow-auto">
          <h3 className="font-semibold mb-2">Page Structure</h3>
          <ul className="space-y-2">
            {components.map((c, i) => (
              <li
                key={i}
                className="p-2 border rounded flex justify-between items-center"
              >
                <div>{c}</div>
                <div className="space-x-1 flex">
                  <button
                    onClick={() => moveUp(i)}
                    className="px-2 py-2 bg-black border border-white text-white rounded hover:bg-white hover:text-black cursor-pointer"
                  >
                    <FaAngleDoubleUp />
                  </button>
                  <button
                    onClick={() => moveDown(i)}
                    className="px-2 py-2 bg-black border border-white text-white rounded hover:bg-white hover:text-black cursor-pointer"
                  >
                    <FaAngleDoubleDown />
                  </button>
                  <button
                    onClick={() => remove(i)}
                    className="px-2 py-2 bg-black border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white cursor-pointer"
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

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

      {/* Live Preview */}
      <div className="col-span-3 border rounded-lg p-2">
        <h3 className="font-semibold mb-2">Live Preview</h3>
        <div style={{ height: "70vh" }}>
          <LivePreview components={components} />
        </div>
      </div>
    </div>
  );
}

export default BuilderEditor;
