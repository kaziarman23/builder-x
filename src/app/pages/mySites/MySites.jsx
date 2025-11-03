import { useSelector } from "react-redux";
import {
  useDeleteUserConfigMutation,
  useGetUserConfigQuery,
} from "../../redux/features/api/configApi";
import LivePreview from "../../builder/LivePreview";
import customToast from "../../components/Notifications";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Loading from "../../components/Loading";

const MySites = () => {
  // Hooks
  const { userEmail } = useSelector((state) => state.userSlice);
  const { data, isLoading, isError, error, refetch } =
    useGetUserConfigQuery(userEmail);
  const [deleteUserConfig, { isLoading: deleting }] =
    useDeleteUserConfigMutation();
  const { toastInvalidLink } = customToast;

  if (!userEmail) {
    return (
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <h1 className="font-bold text-3xl text-gray-400">
          Please log in to view your saved websites.
        </h1>
      </div>
    );
  }

  // handel Loading
  if (isLoading) {
    return <Loading message={"Loading your website Data"} />;
  }

  // handel Error
  if (isError) {
    return (
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <h1 className="font-bold text-3xl text-red-500">
          Error loading configuration: {error?.message || "Unknown error"}
        </h1>
      </div>
    );
  }

  const websites = Array.isArray(data?.config) ? data.config : [];

  // handel empty content
  if (websites.length === 0) {
    return (
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <h1 className="font-bold text-3xl text-white">
          You haven’t created any websites yet. 🚫
        </h1>
      </div>
    );
  }

  // handle delete
  const handleDelete = async (siteId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      background: "#111827",
      color: "#fff",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteUserConfig({ userEmail, siteId }).unwrap();
      toast.success("Site deleted successfully!");
      refetch();
    } catch (err) {
      console.error("Delete failed:", err);
      toast.error("Failed to delete the site. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-10 text-center text-indigo-500 mt-10">
          You'r Saved Websites
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {websites.map((website, index) => {
            const components = Array.isArray(website.components)
              ? website.components
              : [];
            return (
              <div
                key={website.id || index}
                className="border border-gray-700 rounded-2xl shadow-lg p-4 bg-gray-900 flex flex-col transition-transform transform  hover:shadow-indigo-600/50"
              >
                <div className="overflow-hidden rounded-lg mb-4 h-96 bg-gray-800 flex items-center justify-center">
                  {components.length > 0 ? (
                    <LivePreview components={components} />
                  ) : (
                    <p className="text-gray-500 text-center">
                      No components saved
                    </p>
                  )}
                </div>

                <div className="flex justify-start items-center gap-3">
                  <button
                    className="px-4 py-2 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition cursor-pointer"
                    onClick={toastInvalidLink}
                  >
                    Download
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg font-semibold transition cursor-pointer ${
                      deleting
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-red-500 hover:bg-red-600 text-white"
                    }`}
                    onClick={() => handleDelete(website.siteId)}
                    disabled={deleting}
                  >
                    {deleting ? "Deleting..." : "Delete"}
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
