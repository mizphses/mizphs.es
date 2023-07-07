<template>
  <div class="footer">
    <p>©2023 mizphses</p>
    <p>
      <nuxt-link href="/content-copyright-policy">
        著作権ポリシー
      </nuxt-link>
    </p>
    <div class="banners">
      <a href="https://sites.google.com/view/happy-busy/" target="_blank">
        <img src="/banners/jikannee.png" height="40px"  />
      </a>
      <a href="https://www.chuo-u.ac.jp/" target="_blank">
        <img src="/banners/chuo-banner.webp" style="border: 1px #000 solid;" height="40px" />
      </a>
      <a href="https://www.coefont.cloud/" target="_blank">
        <img src="/banners/coefont.webp" style="border: 1px #000 solid;" height="40px" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer{
  border-top: 1px solid #ccc;
  margin: auto;
  padding: 0 10px;
  .banners{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    overflow-x: scroll;
  }
}
</style>