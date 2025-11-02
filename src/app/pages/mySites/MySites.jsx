import { useSelector } from "react-redux";
import { useGetUserConfigQuery } from "../../redux/features/api/configApi";
import LivePreview from "../../builder/LivePreview";

const MySites = ({ onOpenPage }) => {
  const { userEmail } = useSelector((state) => state.userSlice);
  const { data, isLoading, isError, error } = useGetUserConfigQuery(userEmail);

  if (!userEmail) {
    return (
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <h1 className="font-bold text-3xl text-gray-400">
          Please log in to view your saved websites.
        </h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <h1 className="font-bold text-3xl text-white">
          Loading your saved websites...
        </h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <h1 className="font-bold text-3xl text-red-500">
          Error loading configuration: {error?.message || "Unknown error"}
        </h1>
      </div>
    );
  }
  console.log("user config data:", data);
  const websites = Array.isArray(data?.config) ? data.config : [];

  if (websites.length === 0) {
    return (
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <h1 className="font-bold text-3xl text-white">
          You haven’t created any websites yet. 🚫
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="w-full h-20 bg-yellow-400/40 rounded-2xl text-black flex justify-center items-center flex-col">
          <h1 className="text-2xl">This page is under Development!</h1>
          <h1 className="text-2xl">
            Finding way to responsive this mini website in the card.
          </h1>
        </div>
        <h2 className="text-3xl font-bold mb-10 text-center text-indigo-500 mt-10">
          You'r Saved Websites
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {websites.map((website, index) => {
            const components = Array.isArray(website.components)
              ? website.components
              : [];

            return (
              <div
                key={website.id || index}
                className="border border-gray-700 rounded-2xl shadow-lg p-4 bg-gray-900 flex flex-col transition-transform transform hover:scale-105 hover:shadow-indigo-600/50"
              >
                <div className="overflow-hidden rounded-lg mb-4 h-64 bg-gray-800 flex items-center justify-center">
                  {components.length > 0 ? (
                    <LivePreview components={components} />
                  ) : (
                    <p className="text-gray-500 text-center">
                      No components saved
                    </p>
                  )}
                </div>

                <div className="text-center mt-auto">
                  <button
                    className="px-4 py-2 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition cursor-pointer"
                    onClick={() => {
                      if (onOpenPage) onOpenPage(components);
                    }}
                  >
                    Open
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MySites;
