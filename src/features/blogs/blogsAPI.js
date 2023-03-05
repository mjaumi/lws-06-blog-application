import axios from '../../utils/axios';

// getting all the blogs from server
const getBlogs = async () => {
    const response = await axios.get('/blogs');
    return response.data;
}

export default getBlogs;