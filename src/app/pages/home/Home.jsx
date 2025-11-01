import BuilderEditor from "../../builder/BuilderEditor";

export default function Home() {
  return (
    <div className="w-full h-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <h1 className="text-2xl font-bold mb-4">
          Build your custom online platform effortlessly
        </h1>
        <p className="mb-6">
          With Builder X, you can design, arrange, and launch your own
          marketplace or course platform without writing a single line of code.
          Drag, drop, and preview your pages live — it’s fast, intuitive, and
          fully under your control.
        </p>
        <div className="w-full h-full">
          <BuilderEditor />
        </div>
      </div>
    </div>
  );
}
