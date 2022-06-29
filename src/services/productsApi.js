import axiosClient from './clientAxios';

const productApi = {
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, { params });
    },
};
export default productApi;
