import { toast } from "react-toastify";
import Product from "../../../models/Product";
import Router from "../../../route/router";

const onChangeField = ({ e, form, setForm }) => {
    const value = e.target.value;
    const name = e.target.name;
    const type = e.target.type;
    const files = e.target.files;

    if (type === "file") {
        return setForm({
            ...form,
            [name]: files
        });
    }
    setForm({
        ...form,
        [name]: value
    });
};

const onSubmit = async ({ e, form, navigate }) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", form.name);
    data.append("description", form.description);
    data.append("price", form.price);
    data.append("stock", form.stock);
    data.append("categoryId", form.category);
    data.append("weight", form.weight);

    Array.from(form.imageProduct).forEach(file => {
        data.append("imageProduct", file);
    });

    const reply = await Product.addProductItem(data);

    if (!reply.success) {
        return toast.error(reply.message);
    }

    navigate(Router.admin.product.home);
    toast.success("Sukses menambahkan produk!");
};

const onDeleteById = async (id, navigate) => {
    const reply = await Product.deleteProductItem(id);

    if (!reply.success) {
        return toast.error(reply.message);
    }

    navigate(Router.admin.product.home);
    toast.success("Sukses menghapus produk!");
};

const onDeleteItemGallery = async (id, navigate) => {
    const reply = await Product.deleteItemGallery(id);

    if (!reply.success) {
        return toast.error(reply.message);
    }

    navigate(Router.admin.product.home);
    toast.success("Sukses menghapus gallery!");
};

const onUpdate = async ({ e, navigate, form }) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", form.name);
    data.append("description", form.description);
    data.append("price", form.price);
    data.append("stock", form.stock);
    data.append("categoryId", form.category);
    data.append("weight", form.weight);
    data.append("id", form.id);

    const reply = await Product.editProductItem(data);

    if (!reply.success) {
        return toast.error(reply.message);
    }

    navigate(Router.admin.product.home);
    toast.success("Sukses mengupdate produk!");
};

const Action = {
    onChangeField,
    onSubmit,
    onDeleteById,
    onUpdate,
    onDeleteItemGallery
};

export default Action;