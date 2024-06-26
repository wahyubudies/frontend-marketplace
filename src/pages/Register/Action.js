import { toast } from "react-toastify";
import Auth from "../../models/Auth";
import Router from "../../route/router";

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

    const reply = await Auth.register({
        fullname: form.fullName,
        email: form.email,
        password: form.password,
    });

    if (reply.success) {
        navigate(Router.login);
        toast.success(reply.message);
    }
};

const Action = {
    onChangeField,
    onSubmit
};

export default Action;