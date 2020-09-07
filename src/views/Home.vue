<template>
  <div class="home">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <a href="javascript:void(0)" @click="onTitleClick(post)">
          <h4>{{post.title}}</h4>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters('post', ['posts']),
  },
  async mounted() {
    await this.getPosts();
  },
  methods: {
    ...mapActions('post', {
      getPosts: 'posts',
      setPost: 'post',
    }),
    async onTitleClick(post) {
      await this.setPost(post);
      this.$router.push('/detail');
    },
  },
}
</script>
