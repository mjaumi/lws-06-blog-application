import axios from '../../utils/axios';

// getting individual blog from server by blogId
const getBlog = async (blogId) => {
    const response = await axios.get(`/blogs/${blogId}`);
    return response.data;
}

export default getBlog;