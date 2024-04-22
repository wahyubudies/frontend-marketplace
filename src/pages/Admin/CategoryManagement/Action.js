import { toast } from "react-toastify";
import Router from "../../../route/router";
import Category from '../../../models/Category'

const onChangeField = ({ e, form, setForm }) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({
        ...form,
        [name]: value
    });
};

const onChangeFile = ({ e, form, setForm }) => {
    const file = e.target.files[0]; 
    setForm({ ...form, 
        iconCategory: file
     });
};

const onSubmit = async ({ e, form, navigate }) => {
    e.preventDefault();

    if (!form.name || !form.iconCategory) {
        return toast.error("Nama kategori dan icon kategori harus diisi!");
    }

    if (!(form.iconCategory instanceof File)) {
        return toast.error("Icon kategori harus berupa file yang valid!");
    }

    try {

        const formData = new FormData();
        formData.append('name', form.name);
        formData.append("iconCategory",form.iconCategory, form.iconCategory.name);
        
        const reply = await Category.addCategory(formData);
        
        if (!reply.success) {
            return toast.error(reply.message);
        }

        navigate(Router.admin.category.home);
        toast.success("Kategori Berhasil ditambahkan");
    } catch (error) {
        return toast.error(error);
    }
};

const onUpdate = async ({ e, form, navigate }) => {
    e.preventDefault();
    if (!form.name || !form.iconCategory) {
        return toast.error("Nama kategori dan icon kategori harus diisi!");
    }

    if (!(form.iconCategory instanceof File)) {
        return toast.error("Icon kategori harus berupa file yang valid!");
    }
    try {

        const formData = new FormData();
        formData.append("id", form.id)
        formData.append('name', form.name);
        formData.append("iconCategory", form.iconCategory !== null ? form.iconCategory : null, form.iconCategory !== null ? form.iconCategory.name : null);

        console.log(formData);
        const reply = await Category.editCategory(formData);

        if (!reply.success) {
            return toast.error(reply.message);
        }

        navigate(Router.admin.category.home);
        toast.success("Kategori Berhasil ditambahkan");
    } catch (error) {
        return toast.error(error);
    }
};


const getDetailCategory = async ({ id, setDetail }) => {
    try {
        const data = await Category.getDetailCategory(id);
        setDetail({
            name: data.data.name,
            icon: data.data.icon
        });
    } catch (error) {
        setDetail({
            name: null,
            icon: null
        });
    }
}


const Action = {
    onChangeField,
    onChangeFile,
    onSubmit,
    getDetailCategory,
    onUpdate,
};

export default Action;