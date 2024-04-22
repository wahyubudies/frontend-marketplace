import { toast } from "react-toastify";
import Auth from "../../models/Auth";
import Router from "../../route/router";
import { store } from "../../store";
import { loginUser } from "../../features/auth/authSlice";
import Cookies from "js-cookie";

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

    const reply = await Auth.login({
        email: form.email,
        password: form.password,
    });

    if (!reply.success) {
        return toast.error(reply.message);
    }

    const userInfo = JSON.stringify(reply.data);
    Cookies.set('userInfo', userInfo);

    store.dispatch(loginUser());
    navigate(Router.home);
    toast.success("Login berhasil");
};

const Action = {
    onChangeField,
    onSubmit
};

export default Action;