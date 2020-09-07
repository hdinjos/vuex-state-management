<template>
  <div>
    <ul>
      <li>
        <h4>
          {{ post.title }}
        </h4>
        <p>
          {{ post.body }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('post', [
      'post',
    ]),
  },
};
</script>
