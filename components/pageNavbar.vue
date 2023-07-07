<template>
  <div>
    <div class="header">
      <div class="logotype-wrap">
        <nuxt-link to="/">
          <h1 class="logotype">みずさわぽーたる</h1>
        </nuxt-link>
        <p class="topline">We love typography</p>
      </div>
      <div class="menu-icon-wrap">
        <button class="simple-btn" @click="toggleMenu()">
          <component :is="menuVisibility ? IconX : IconMenu2" />
        </button>
      </div>
    </div>
    <div class="menu" v-if="menuVisibility">
      <ol class="menu-items">
        <li v-for="item in menuItems" :key="item.title">
          <nuxt-link :to="item.link" @click="toggleMenu()">{{ item.title }}</nuxt-link>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { IconMenu2, IconX } from '@tabler/icons-vue';
const menuItems = [
  {
    "title": "ホーム",
    "link": "/"
  },
  {
    "title": "プロフィール",
    "link": "/about"
  },
  {
    "title": "ブログ",
    "link": "/blog"
  },
  {
    "title": "ポートフォリオ",
    "link": "/portfolio"
  },
  {
    "title": "お問い合わせ",
    "link": "/contact"
  },
]
const menuVisibility = ref(false);
const toggleMenu = () => {
  menuVisibility.value = !menuVisibility.value;
}
onMounted(() => {
  try {
    Typekit.load({ async: true });
  } catch (e) {
    console.log(e);
  }
})
</script>

<style lang="scss" scoped>
.header{
  margin: 0;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  border-bottom: #000 1px solid;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  .logotype-wrap {
    display: flex;
    gap: 10px;
    align-items: center;
    a{
      text-decoration: none;
      color: rgb(38, 147, 142);
      .logotype{
        font-family: "Kaisei Opti", sans-serif;
        font-size: 1.3rem;
        user-select: none;
      }
    }
    .topline{
      font-family: 'news-gothic-std','fot-udkakugoc70-pro', sans-serif;
      font-size: 0.8rem;
      margin: 0;
      padding: 0;
      color: #666;
    }
  }
  .menu-icon-wrap{
    display: flex;
    align-items: center;
    .simple-btn{
      background: none;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.menu{
  background: #eee;
  .menu-items{
    list-style: none;
    padding: 40px 20px;
    margin: 0;
    li {
      margin: 10px 0;
      a{
        color: #333;
        letter-spacing: 0.5px;
      }
    }
  }
}
</style>