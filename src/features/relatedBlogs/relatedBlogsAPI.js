import axios from '../../utils/axios';

// getting all the related blogs from server
const getRelatedBlogs = async ({ tags, blogId }) => {
    const queryString = tags?.length ? tags.map(tag => `tags_like=${tag}`).join('&') + `&id_ne=${blogId}` : `id_ne=${blogId}`;
    const response = await axios.get(`/blogs?${queryString}`);
    return response.data;
}

export default getRelatedBlogs;