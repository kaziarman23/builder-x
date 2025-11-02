import { useSelector } from "react-redux";
import { useGetUserConfigQuery } from "../../redux/features/api/configApi";
import LivePreview from "../../builder/LivePreview";

const MySites = () => {
  const { userEmail } = useSelector((state) => state.userSlice);

  const { data, isLoading, isError, error } = useGetUserConfigQuery(userEmail);

  if (!userEmail) {
    return (
      <p className="text-center mt-20 text-gray-400">
        Please log in to view your saved pages.
      </p>
    );
  }

  if (isLoading) {
    return (
      <p className="text-center mt-20 text-gray-400">
        Loading your saved pages...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-center mt-20 text-red-500">
        Error loading configuration: {error?.message}
      </p>
    );
  }

  // Ensure savedPages is always an array
  const savedPagesRaw = data?.config?.components;
  const savedPages = Array.isArray(savedPagesRaw)
    ? savedPagesRaw
    : savedPagesRaw
    ? [savedPagesRaw]
    : [];

  if (savedPages.length === 0) {
    return (
      <p className="text-center mt-20 text-gray-400">
        You haven’t saved any components yet.
      </p>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-10 text-center text-indigo-600">
          Your Saved Pages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {savedPages.map((savedPage, index) => {
            const componentsArray = Array.isArray(savedPage)
              ? savedPage
              : savedPage?.components
              ? savedPage.components
              : [];

            return (
              <div
                key={index}
                className="border border-gray-700 rounded-2xl shadow-lg p-4 bg-gray-900 flex flex-col transition-transform transform hover:scale-105 hover:shadow-indigo-600/50"
              >
                <div className="overflow-hidden rounded-lg mb-4 h-64 bg-gray-800 flex items-center justify-center">
                  {componentsArray.length > 0 ? (
                    <LivePreview components={componentsArray} />
                  ) : (
                    <p className="text-gray-500 text-center">
                      No components saved
                    </p>
                  )}
                </div>
                <div className="text-center mt-auto">
                  <button className="px-4 py-2 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 cursor-pointer transition">
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
