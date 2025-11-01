import { useState, useEffect } from "react";
import ComponentLibrary from "./ComponentLibrary";
import LivePreview from "./LivePreview";
import { saveConfig, loadConfig } from "../utils/api";
import auth from "../firebase/firebase.config";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

function BuilderEditor() {
  const [components, setComponents] = useState(["Navbar", "Hero"]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (u) => {
      if (u) {
        setUserId(u.uid);
        try {
          const r = await loadConfig(u.uid);
          if (r.data?.config?.components)
            setComponents(r.data.config.components);
        } catch (error) {
          console.log(error);
        }
      } else setUserId(null);
    });
    return () => unsub();
  }, []);

  function add(c) {
    setComponents((s) => [...s, c]);
  }
  function remove(idx) {
    setComponents((s) => s.filter((_, i) => i !== idx));
  }
  function moveUp(idx) {
    if (idx === 0) return;
    setComponents((s) => {
      const copy = [...s];
      [copy[idx - 1], copy[idx]] = [copy[idx], copy[idx - 1]];
      return copy;
    });
  }
  function moveDown(idx) {
    setComponents((s) => {
      if (idx === s.length - 1) return s;
      const copy = [...s];
      [copy[idx + 1], copy[idx]] = [copy[idx], copy[idx + 1]];
      return copy;
    });
  }

  async function handleSave() {
    if (!userId) {
      alert("Login to save");
      return;
    }
    const token = await auth.currentUser?.getIdToken();
    await saveConfig(userId, { components }, token);
    alert("Saved");
  }

  return (
    <div className="h-full grid grid-cols-3 gap-4 p-4">
      <div className="col-span-1 border rounded-lg overflow-auto">
        <ComponentLibrary onAdd={add} />
      </div>
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
                <div className="space-x-1">
                  <button
                    onClick={() => moveUp(i)}
                    className="px-2 py-2 hover:bg-white hover:text-black cursor-pointer  bg-black border-whtie border rounded"
                  >
                    <FaAngleDoubleUp />
                  </button>
                  <button
                    onClick={() => moveDown(i)}
                    className="px-2 py-2 hover:bg-white hover:text-black cursor-pointer bg-black border-whtie border rounded"
                  >
                    <FaAngleDoubleDown />
                  </button>
                  <button
                    onClick={() => remove(i)}
                    className="px-2 py-2 cursor-pointer  hover:bg-red-500 hover:text-white bg-black border hover:border-red-500 text-red-500 rounded"
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
            className="px-4 py-2 bg-black border text-white rounded hover:bg-white hover:text-black font-bold cursor-pointer"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
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
