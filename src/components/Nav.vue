<template>
  <nav class="navbar">
    <RouterLink class="item" to="/">Home</RouterLink>
    <RouterLink class="item" to="/foo">Foo</RouterLink>
    <RouterLink class="item" to="/bar">Bar</RouterLink>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: flex-start;
}

.item {
  margin: 0 1em 0 0;
}
</style>