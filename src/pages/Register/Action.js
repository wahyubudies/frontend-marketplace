import RequestUtility from "../../utils/request";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const onChangeField = (e, form, setForm) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({
        ...form,
        [name]: value
    });
};

const onSubmit = async (e, form) => {
    e.preventDefault();
    const data = {
        fullname: form.fullName,
        email: form.email,
        password: form.password,
    };

    const response = await RequestUtility.sendRequest({
        method: 'post',
        url: SERVER_URL + "/auth/signup",
        data,
        type: "json"
    });
    console.log(response);
};

const Action = {
    onChangeField,
    onSubmit
};

export default Action;