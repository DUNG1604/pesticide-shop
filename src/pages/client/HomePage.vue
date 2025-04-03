<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay as SwiperAutoplay, Pagination as SwiperPagination, Navigation as SwiperNavigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const images = [
  "https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045-2.jpg",
  "https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045-2.jpg",
  "https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045-2.jpg",
];
</script>

<template>
<div class="container">
  <div class="wrapper">
    <div>
      <div class="flex">
        <div class="w-[50%]">
          <swiper
            :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
            :slides-per-view="1"
            :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :pagination="{ clickable: true }"
            class="w-full max-w-4xl"
          >
            <swiper-slide v-for="(image, index) in images" :key="index">
              <img :src="image" alt="Slide Image" class="w-full h-auto" />
            </swiper-slide>
          </swiper>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>