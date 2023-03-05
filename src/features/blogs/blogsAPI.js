import axios from '../../utils/axios';

const getBlogs = async () => {
    const response = await axios('/blogs');
    return response.data;
}

export default getBlogs;