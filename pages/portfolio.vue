<template>
  <div>
    <main class="main-content">
      <div class="top-toggle-wrap">
        <h2>制作物 Portfolio</h2>
      </div>
        <p>個人開発者として何個かアプリなどを作ってきましたが、その大半がサーバーを削除したりコード非公開にしたりしてます。</p>
        <work-component 
          pageText = '
          <p>フォームに入れた情報をワクチン予診票に自動入力してくれるアプリ。日付と署名だけ手書きです。</p>
          <p>（ちなみに非公開の理由は当時かなり未熟だったのでコードがえげつなく汚いから）</p>
          <a href="https://www.itmedia.co.jp/news/articles/2109/03/news146.html">ITmediaさんに記事化されました。</a>
          '>
          <icon-vaccine size="3rem" />
        </work-component>
    </main>
  </div>
</template>

<script setup>
import { IconVaccine } from '@tabler/icons-vue';
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
      border: none;
      border-radius: 0;
      background: #000;
      color: #fff;
    }
  }
}
</style>