import BuilderEditor from "../../builder/BuilderEditor";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <h1 className="text-2xl font-bold mb-4">Welcome to BuilderX</h1>
        <p className="mb-6">
          Build your custom online platform easily using drag & drop.
        </p>
        <div className="border rounded h-full">
          <BuilderEditor />
        </div>
      </div>
    </div>
  );
}
