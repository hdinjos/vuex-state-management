import { getPost } from '@/services/post';

export const actions = {
  async posts(store) {
    try {
      const data = await getPost();
      store.commit('posts', data);
    } catch (error) {
      console.log(error);
    }
  },
  post(store, data) {
    store.commit('post', data);
  },
};
