<template>
  <div>
    <main class="main-content">
      <div class="top-toggle-wrap">
        <h2>ブログ</h2>
      </div>
      <icon-crane size="3rem" />
      <p>工事中</p>
    </main>
  </div>
</template>

<script setup>
import { IconCrane } from '@tabler/icons-vue';
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