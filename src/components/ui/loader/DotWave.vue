<script setup>
</script>
<template>
  <div class="bg-[#fef9f1] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
    <div class="dot-wave">
        <div class="dot-wave__dot"></div>
        <div class="dot-wave__dot"></div>
        <div class="dot-wave__dot"></div>
        <div class="dot-wave__dot"></div>
    </div>
  </div>
</template>
<style scoped>
.dot-wave {
    --uib-size: 47px;
    --uib-speed: 1s;
    --uib-color: black;
  
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: var(--uib-size);
    height: calc(var(--uib-size) * 0.17);
    padding-top: calc(var(--uib-size) * 0.34);
  }
  
  .dot-wave__dot {
    flex-shrink: 0;
    width: calc(var(--uib-size) * 0.17);
    height: calc(var(--uib-size) * 0.17);
    border-radius: 50%;
    background-color: var(--uib-color);
    will-change: transform;
  }
  
  .dot-wave__dot:nth-child(1) {
    animation: jump var(--uib-speed) ease-in-out
      calc(var(--uib-speed) * -0.45) infinite;
  }
  
  .dot-wave__dot:nth-child(2) {
    animation: jump var(--uib-speed) ease-in-out
      calc(var(--uib-speed) * -0.3) infinite;
  }
  
  .dot-wave__dot:nth-child(3) {
    animation: jump var(--uib-speed) ease-in-out
      calc(var(--uib-speed) * -0.15) infinite;
  }
  
  .dot-wave__dot:nth-child(4) {
    animation: jump var(--uib-speed) ease-in-out infinite;
  }
  
  @keyframes jump {
    0%,
    100% {
      transform: translateY(0px);
    }
  
    50% {
      transform: translateY(-200%);
    }
  }
  
  
</style>