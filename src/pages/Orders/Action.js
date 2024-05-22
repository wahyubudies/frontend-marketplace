import { toast } from "react-toastify";
import Order from "../../models/Order";

const infoStatus = (status) => {
  if (status === "WAITING PAYMENT") {
    return "Menunggu Pembayaran";
  } else if (status === "PAID") {
    return "Pembayaran Berhasil";
  } else {
    return "Invalid Status";
  }
};
const infoColorStatus = (status) => {
  if (status === "WAITING PAYMENT") {
    return "text-amber-400 font-semibold";
  } else if (status === "PAID") {
    return "text-green-500 font-semibold";
  } else {
    return "text-rose-500 font-semibold";
  }
};

const onChangeFile = ({ e, form, setForm }) => {
  const file = e.target.files[0];
  setForm({ ...form, imagePayment: file });
};

const onSubmit = async ({ e, form }) => {
  e.preventDefault();
  try {
    const formData = new FormData();
    formData.append("orderId", form.orderId);
    formData.append("imagePayment", form.imagePayment, form.imagePayment.name);

    const reply = await Order.proofPayment(formData);

    if (!reply.success) {
      return toast.error(reply.message);
    }

    toast.success("Pembayaran Berhasil");
    window.location.reload();
  } catch (error) {
    return toast.error(error);
  }
};

const Action = {
  infoStatus,
  infoColorStatus,
  onChangeFile,
  onSubmit,
};

export default Action;
