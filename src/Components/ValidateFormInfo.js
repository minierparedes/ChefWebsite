export default function validateFormInfo(values) {
    let errors = {};

    if (!values.name) {
        errors.name = "name required";
    }
    if (!values.lastname) {
        errors.lastname = "lastname required";
    }
    if (!values.email) {
        errors.email = "email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "email address is invalid";
    }

    return errors;
}