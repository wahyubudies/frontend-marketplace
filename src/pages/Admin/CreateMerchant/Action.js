import { toast } from "react-toastify";
import { Auth } from "../../../models";
import Router from "../../../route/router";

const onChangeField = ({ e, form, setForm }) => {
    const value = e.target.value;
    const name = e.target.name;

    setForm({
        ...form,
        [name]: value
    });
};

const onSubmit = async ({ e, form, navigate }) => {
    e.preventDefault();

    const reply = await Auth.createMerchant(form);

    if (!reply.success) {
        return toast.error(reply.message);
    }

    toast.success("Sukses menjadi merchant!");
    // navigate(Router.admin.home);
    window.location.href = Router.admin.home
}

const Action = {
    onChangeField,
    onSubmit
};

export default Action;