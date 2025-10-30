import toast from "react-hot-toast";

function toastSuccess(message) {
  toast.success(message);
}

function toastError(message) {
  toast.error(message);
}

function toastInvalidLink() {
  toast.error("This Link is not Real");
}

export default { toastSuccess, toastError, toastInvalidLink };
