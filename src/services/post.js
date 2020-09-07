import { api } from '@/plugins/axios';

export const getPost = async () => {
  const response = await api.get('http://jsonplaceholder.typicode.com/posts');
  const { data } = response;
  return data;
};
