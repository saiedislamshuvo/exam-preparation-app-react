import toast from 'react-hot-toast';

export const notify = ({ message, status }) => {
    if (status) {
        return toast.success(message);
    } else {
        return toast.error(message)
    }
}

export const fieldRequired = (fileds) => {

    const arr = fileds.filter(field => field.value == '');
    if (arr.length > 0) {
        notify({
            message: `${arr[0].name} filed is required.`,
            status: false
        });
        return true;
    }
    return false;
}