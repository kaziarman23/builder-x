const Loading = ({ message }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      {/* Heading */}
      <p className="mb-4 text-2xl font-semibold tracking-[0.2em] text-white">
        {message ? message : "Loading Data"}
      </p>

      {/* Bars */}
      <div className="flex w-20 items-center justify-center">
        <span className="[@keyframes_loader]:{0%:{width:0.2em;}25%:{width:0.7em;}50%:{width:1.5em;}100%:{width:0.2em;}} mx-0.5 h-[3px] w-[0.2em] animate-[loader_1s_ease-in-out_infinite] rounded-md bg-indigo-500 [animation-delay:0.2s]" />
        <span className="mx-0.5 h-[3px] w-[0.2em] animate-[loader_1s_ease-in-out_infinite] rounded-md bg-indigo-500 [animation-delay:0.4s]" />
        <span className="mx-0.5 h-[3px] w-[0.2em] animate-[loader_1s_ease-in-out_infinite] rounded-md bg-indigo-500 [animation-delay:0.6s]" />
        <span className="mx-0.5 h-[3px] w-[0.2em] animate-[loader_1s_ease-in-out_infinite] rounded-md bg-indigo-500 [animation-delay:0.8s]" />
      </div>

      {/* Inline keyframes (Tailwind arbitrary property syntax) */}
      <style>{`
        @keyframes loader {
          0% { width: 0.2em; }
          25% { width: 0.7em; }
          50% { width: 1.5em; }
          100% { width: 0.2em; }
        }
      `}</style>
    </div>
  );
};

export default Loading;
