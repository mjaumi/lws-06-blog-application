import axios from '../../utils/axios';

// updating individual blog to server
const updateBlog = async ({ id, isSaved, likes }) => {
    const response = await axios.patch(`/blogs/${id}`, {
        isSaved,
        likes,
    });

    return response.data;
}

export default updateBlog;