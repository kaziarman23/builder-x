import RenderComponent from "../components/RenderComponent";

function LivePreview({ components }) {
  return (
    <div className="p-4 bg-blue-200 rounded-2xl w-full h-full overflow-auto">
      {components.map((c, i) => (
        <div key={i} className="mb-3">
          <RenderComponent type={c} />
        </div>
      ))}
    </div>
  );
}

export default LivePreview;
