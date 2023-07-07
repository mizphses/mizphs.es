<template>
  <div>
    <main class="main-content">
      <div class="top-toggle-wrap">
        <h2>自己紹介 About</h2>
        <div>
          <button class="simple-btn" @click="toggleTypeofIntro()">
            <component :is="typeIntro ? IconSchool : IconSettings" />
            <span style="font-size: 0.8em; user-select:none;">&nbsp;/</span>
            <component :is="typeIntro ?IconSettings : IconSchool" size="0.8em" />
            &nbsp
            切り替える
          </button>
        </div>
      </div>
      <div v-if="typeIntro">
        <div class="self-intro">
          <img src="~/assets/icons/myface.webp" height="200px" />
          <div>
            <p style="font-size: 2rem; margin: 0;">尾川 ふみのり</p>
            <p style="font-size: 1.3rem; margin: 0;">Fuminori Ogawa</p>
          </div>
        </div>
        <h3>現在の所属</h3>
        <p>2023~ 株式会社CoeFont Marketing(業務委託)</p>
        <p>2021~ 中央大学 経済学部 経済情報システム学科 (学士課程)</p>
        <h3>過去の学歴・職歴</h3>
        <p>2022 携帯電話販売員(MVNO) アルバイト</p>
        <p>2018~2021 岡山学芸館高校 普通科清秀高等部</p>
        <p>2015~2018 岡山学芸館清秀中学校</p>
      </div>
      <div v-else>
        <div class="self-intro">
          <img src="~/assets/icons/yatogame.webp" height="200px" />
          <div>
            <p style="font-size: 2rem; margin: 0;">mizphses</p>
            <a href="//github.com/mizphses" class="gh-button">
              <img src="/banners/gh.webp" width="100px" />
            </a>
          </div>
        </div>
        <h3>現在の所属</h3>
        <p>2023~ 株式会社CoeFont Marketing(業務委託)</p>
        <p>マーケティング部門直属のエンジニアとして、マーケティング業務に関連するWEBサイト・サービスの開発や素材類のデザインなどを行なっています。</p>
        <p>その他、Google Analytics、VWOなど各種ツールの運用・導入などもしました（マーケティングエンジニア的な業務）。</p>
        <hr />
        <h3>これまでの作品</h3>
        <p>個人開発者として何個かアプリなどを作ってきましたが、その大半がサーバーを削除したりコード非公開にしたりしてます。</p>
        <p>詳細につきましては、<nuxt-link to="portfolio">ポートフォリオ</nuxt-link>ページをご参照ください。</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { IconSettings, IconSchool, IconBrandGithub } from '@tabler/icons-vue';

const typeIntro = ref(true);
const toggleTypeofIntro = () => {
  typeIntro.value = !typeIntro.value;
}
</script>

<style lang="scss" scoped>
.main-content {
  max-width: 1200px;
  margin: auto;
  padding: 0 15px;
  color: #333;
  .top-toggle-wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      padding: 5px 10px;
      border: none;
      border-radius: 10px;
      background: #000;
      color: #fff;
      display: flex;
      align-items: center;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  .self-intro{
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    margin-bottom: 20px;
    .gh-button{
      &:hover {
        opacity: 0.8;
        color: #fff !important;
      }
    }
  }
}
</style>