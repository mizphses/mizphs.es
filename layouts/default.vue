<template>
  <div class="root">
    <page-navbar class="navigation" />
    <page-navbar class="navigation_hidden" />
    <slot />
    <page-footer />
  </div>
</template>

<style lang="scss" scoped>
.navigation{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}.navigation_hidden{
  opacity: 0;
  user-select: none;
}
</style>