<template>
  <div class="page-wrap">
    <div class="menu-to-pages">
      <nuxt-link to="about">
        <img src="/nexco/about.webp">
      </nuxt-link>
      <nuxt-link to="portfolio">
        <img src="/nexco/portfolio.webp">
      </nuxt-link>
      <nuxt-link to="blog">
        <img src="/nexco/blog.webp">
      </nuxt-link>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.page-wrap{
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 20px;
  .menu-to-pages{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 20px;
    border-right: 1px solid #333;
    a{
      img {
        width: 100%;
        max-width: 500px;
        margin: 3px 0;
      }
    }
  }
}
</style>