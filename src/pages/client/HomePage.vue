<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Autoplay as SwiperAutoplay,
  Pagination as SwiperPagination,
  Navigation as SwiperNavigation
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "https://live.staticflickr.com/2919/32726853103_ac1707e094_z.jpg",
  "https://cdn.fpt-is.com/vi/nong-nghiep-xanh-11-1717331444.jpg",
  "https://media.tapchitaichinh.vn/w1480/images/upload/vuminh/2018_05_11/tppdonbaycuanganhnongnghiepvietnam710dobd_HQAR.JPG"
];

const items = [
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  },
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  },
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  },
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  },
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  },
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  },
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  },
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  },
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  },
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  },
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  },
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  }


];
const items1 = [
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  },
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  },
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  },
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  },
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  },
  {
    image: "https://diypestcontrol.com/media/section/item/n/e/new-icons_hydroponic_2_1.png",
    alt: "item2",
    title: "Bed Bug Control"
  }
];
const products = [
  {
    image: 'https://diypestcontrol.com/media/catalog/product/cache/cc0a38734da17dda79cae1bac0d773f8/q/4/q4_.jpg',
    name: 'Pest Control Kit   ',
    description: 'This is a great product',
    price: '$19.99'
  },
  {
    image: 'https://diypestcontrol.com/media/catalog/product/cache/cc0a38734da17dda79cae1bac0d773f8/g/e/general_pest_control_kit.jpg',
    name: 'Termiticide & Insecticide  ',
    description: 'This is another great product',
    price: '$29.99'
  },
  {
    image: 'https://diypestcontrol.com/media/catalog/product/cache/cc0a38734da17dda79cae1bac0d773f8/q/4/q4_.jpg',
    name: 'Pest Control Kit   ',
    description: 'This is a great product',
    price: '$19.99'
  },
  {
    image: 'https://diypestcontrol.com/media/catalog/product/cache/cc0a38734da17dda79cae1bac0d773f8/g/e/general_pest_control_kit.jpg',
    name: 'Termiticide & Insecticide  ',
    description: 'This is another great product',
    price: '$29.99'
  },
  {
    image: 'https://diypestcontrol.com/media/catalog/product/cache/cc0a38734da17dda79cae1bac0d773f8/q/4/q4_.jpg',
    name: 'Pest Control Kit   ',
    description: 'This is a great product',
    price: '$19.99'
  },
  {
    image: 'https://diypestcontrol.com/media/catalog/product/cache/cc0a38734da17dda79cae1bac0d773f8/g/e/general_pest_control_kit.jpg',
    name: 'Termiticide & Insecticide  ',
    description: 'This is another great product',
    price: '$29.99'
  },
  {
    image: 'https://diypestcontrol.com/media/catalog/product/cache/cc0a38734da17dda79cae1bac0d773f8/q/4/q4_.jpg',
    name: 'Pest Control Kit   ',
    description: 'This is a great product',
    price: '$19.99'
  },
  {
    image: 'https://diypestcontrol.com/media/catalog/product/cache/cc0a38734da17dda79cae1bac0d773f8/g/e/general_pest_control_kit.jpg',
    name: 'Termiticide & Insecticide  ',
    description: 'This is another great product',
    price: '$29.99'
  },
];
</script>

<template>
  <div class="container">
    <div class="flex items-center justify-center gap-4 py-3 ">
      <div class="text-title2 font-bold">PEST CONTROL SUPPLIES & LAWN CARE PRODUCTS</div>
      <div
        class="px-5 py-2.5 border-[2px] border-primary rounded-[5px] text-title cursor-pointer hover:bg-secondary2 hover:text-white">
        Start Shopping
      </div>
    </div>
    <div class="wrapper">
      <div class="mt-[20px]">
        <div class="grid grid-cols-3 gap-6 justify-center items-center">
          <div class="col-span-2">
            <swiper
              :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
              :slides-per-view="1"
              :loop="true"
              :autoplay="{ delay: 3000, disableOnInteraction: false }"
              :pagination="{ clickable: true }"
              class="w-full max-w-4xl max-h-[420px]"
            >
              <swiper-slide v-for="(image, index) in images" :key="index">
                <img :src="image" alt="Slide Image" class="w-full h-auto" />
              </swiper-slide>
            </swiper>
          </div>
          <div class="col-span-1">
            <div class="grid grid-cols-3 px-2 py-4 custom-shadow rounded-[4px]">
              <div class="col-span-1 px-1.5">
                <img src="@/assets/images/item1.webp" alt="">
              </div>
              <div class="col-span-2 text-[18px] font-bold px-1.5">
                <div class="text-title">Pest Control Products</div>
                <div class="flex text-title2 cursor-pointer">Shop All <img class="w-[16px]" src="@/assets/icons/nextOrange.svg" alt=""></div>
              </div>
            </div>
            <div class="grid grid-cols-3 px-2 py-4 custom-shadow rounded-[4px] mt-5">
              <div class="col-span-1 px-1.5">
                <img src="@/assets/images/item1.webp" alt="">
              </div>
              <div class="col-span-2 text-[18px] font-bold px-1.5">
                <div class="text-title">Pest Control Products</div>
                <div class="flex text-title2 cursor-pointer">Shop All <img class="w-[16px]" src="@/assets/icons/nextOrange.svg" alt=""></div>
              </div>
            </div>
            <div class="grid grid-cols-3 px-2 py-4 custom-shadow rounded-[4px] mt-5">
              <div class="col-span-1 px-1.5">
                <img src="@/assets/images/item1.webp" alt="">
              </div>
              <div class="col-span-2 text-[18px] font-bold px-1.5">
                <div class="text-title">Pest Control Products</div>
                <div class="flex text-title2 cursor-pointer">Shop All <img class="w-[16px]" src="@/assets/icons/nextOrange.svg" alt=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--      -->
      <div class="text-title flex justify-between items-center rounded-[5px] overflow-hidden border-[2px] border-secondary2 mt-[30px]">
        <div class="ml-4">
          <p><i class="fa fa-info-circle text-title2" aria-hidden="true"></i> Are you a <strong>Pest Management Professional</strong>?</p>
        </div>
        <div class="flex items-center">
          <p class="mr-6">You could receive: </p>
          <ul class="flex gap-4 py-6">
            <li><i class="fa fa-check text-title2" aria-hidden="true"></i> Volume Discounts</li>
            <li><i class="fa fa-check text-title2" aria-hidden="true"></i> Priority Shipping</li>
            <li><i class="fa fa-check text-title2" aria-hidden="true"></i> Deals &amp; More</li>
          </ul>
          <button
            class="ml-4 px-5 py-6 bg-secondary2 text-white cursor-pointer hover:bg-secondary3 hover:text-white">
            View All
          </button>
        </div>
      </div>
<!--      -->
      <div>
        <h3 class="text-title text-[30px] text-center py-[30px]">Pest Control Products</h3>
        <div class="grid grid-cols-6 gap-4">
          <div v-for="(item, index) in items" :key="index" class="col-span-1 cursor-pointer group">
            <div>
              <img :src="item.image" :alt="item.alt" class="object-cover">
            </div>
            <div class="font-semibold text-center py-5 text-title group-hover:text-title2">{{ item.title }}</div>
          </div>
        </div>
      </div>
      <div class="flex justify-center my-4">
        <button
          class="px-5 py-2.5 bg-secondary2  rounded-[5px] text-white cursor-pointer hover:bg-secondary3 hover:text-white">
          View All
        </button>
      </div>
<!--      -->
      <div>
        <h3 class="text-title text-[30px] text-center py-[30px]">Lawn & Garden Products</h3>
        <div class="grid grid-cols-6 gap-4">
          <div v-for="(item, index) in items1" :key="index" class="group col-span-1 cursor-pointer">
            <div>
              <img :src="item.image" :alt="item.alt" class="object-cover">
            </div>
            <div class="font-semibold text-center py-5 text-title group-hover:text-title2">{{ item.title }}</div>
          </div>
        </div>
      </div>
      <div class="flex justify-center my-4">
        <button
          class="px-5 py-2.5 bg-secondary2  rounded-[5px] text-white cursor-pointer hover:bg-secondary3 hover:text-white">
          View All
        </button>
      </div>
<!--      -->
      <div class="grid grid-cols-2 gap-5">
        <div class="col-span-1 relative max-h-[286px]">
          <div class="w-full h-full">
            <img src="@/assets/images/item5.jpg" class="w-full h-full object-cover" alt="">
          </div>
          <div class="px-6 text-[20px] absolute bottom-0 w-full h-[88px] text-white bg-primary bg-opacity-60 flex items-center">
            <h3>Take care of <strong>rats, mice, and other crawling critters </strong>this winter.</h3>
            <div class="flex justify-center items-center">
              <button
                class="flex items-center justify-center h-[40px] w-[200px] text-[16px] px-3 py-2.5 border-[2px] border-white rounded-[5px] text-white cursor-pointer hover:bg-secondary3 ">
                Rodent Control
              </button>
            </div>
          </div>
        </div>
        <div class="col-span-1 relative max-h-[286px]">
          <div class="w-full h-full">
            <img src="@/assets/images/item4.jpg" class="w-full h-full object-cover" alt="">
          </div>
          <div class="py-8 text-[20px] absolute top-0 right-0 w-[232px] h-full text-white bg-primary bg-opacity-60 flex flex-col justify-between">
            <h3 class="text-center">Get ready for spring weeds<strong> NOW!</strong></h3>
            <div class="flex justify-center">
              <button
                class="text-[16px] px-3 py-2.5 border-[2px] border-white rounded-[5px] text-white cursor-pointer hover:bg-secondary3 ">
                Shop Pre-Emergents
              </button>
            </div>
          </div>
        </div>
      </div>
<!--      -->
      <div>
        <h3 class="text-title text-[30px] text-center py-[30px] font-bold">Shop All Products</h3>
        <swiper
          :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
          :space-between="20"
          :slides-per-view="4"
          :slides-per-group="4"
          :loop="true"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
          :navigation="true"
        >
          <swiper-slide class="py-1 px-1" v-for="(product, index) in products" :key="index">
            <div class="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center custom-shadow">
              <div class="size-[170px] overflow-hidden">
                <img :src="product.image" :alt="product.name" class="size-full object-cover" />
              </div>
              <div class="text-center">
                <h3 class="font-semibold text-[15px] line-clamp-1 text-title">{{ product.name }}</h3>
                <p class="text-gray-500 text-sm line-clamp-1">{{ product.description }}</p>
                <p class="text-[17px] font-semibold text-title2">{{ product.price }}</p> <!-- Hiển thị giá -->
              </div>
              <div
                class="text-sm font-semibold mt-2 px-4 py-1 border-[2px] border-primary rounded-[5px] text-title cursor-pointer hover:bg-secondary2 hover:text-white">
                Buy Now
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
<!--      -->
      <div>
        <div class="text-title p-2.5">
          <h3 class="text-[30px] pt-[30px]">Can I do my own pest control?</h3>
          <p class="mt-2">Most people are capable of following a pest management strategy. We provide access to educational resources to help you select, purchase, and use any item in our product line. We carry insect baits, professional insecticides/pesticides, traps, herbicides, and many other helpful professional items.</p>
          <p class="mt-2">By using recommended professional products instead of a commercial extermination service, you can get rid of pests or rodents at a cost savings of up to 70%</p>
        </div>
        <div class="grid grid-cols-2 mt-[30px] gap-3">
          <div class="rounded-[5px] col-span-1 w-full max-h-[180px] overflow-hidden">
            <img src="@/assets/images/item6.jpg" alt="item" class="size-full object-cover">
          </div>
          <div class="rounded-[5px] col-span-1 w-full max-h-[180px] overflow-hidden">
            <img src="@/assets/images/item7.jpg" alt="item" class="size-full object-cover">
          </div>
        </div>
        <div class="grid grid-cols-2 mt-4 gap-3">
          <div class="bg-bg1 col-span-1 text-title text-[20px] flex items-center justify-center py-4 rounded-[5px]">Do-It-Yourself Learning Center Articles <img class="w-[16px]" src="@/assets/icons/next.svg" alt=""></div>
          <div class="bg-bg1 col-span-1 text-title text-[20px] flex items-center justify-center py-4 rounded-[5px]">Do-It-Yourself Learning Center Articles <img class="w-[16px]" src="@/assets/icons/next.svg" alt=""></div>
        </div>
      </div>
<!--      -->
      <div class="grid grid-cols-2 gap-4 mt-[30px]">
        <div class="col-span-1 text-title p-2.5">
          <h3 class="text-title text-[30px]">About DIY Pest Control</h3>
          <p class="mt-2.5">Our website is dedicated to providing DIYers with the information you need to do your own pest control. We provide information on insect identification, insect control instructions, rodent identification, rodent control measures, professional equipment, and information about professional strength insecticides and herbicides.</p>
          <p class="mt-2.5">Can't find the answer to your pest control question?  We employ expertly trained pest control technicians to advise you.</p>
          <p class="mt-2.5">We are your best source for professional / commercial grade pest control supplies, approved for both residential and commercial pest control. We ship from both Atlanta, Georgia and Phoenix, Arizona for fast delivery.</p>
          <div class="flex my-4">
            <button
              class="text-[20px] px-5 py-2.5 bg-secondary2 text-white cursor-pointer hover:bg-secondary3 hover:text-white">
              More About Us
            </button>
          </div>
        </div>
        <div class="col-span-1">
          <img src="@/assets/images/item8.jpg" alt="item" class="size-full object-contain">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-shadow {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16), 0 1px 3px rgba(0, 0, 0, 0.23);
}

:deep(.swiper-pagination-bullet) {
  width: 14px; /* Điều chỉnh kích thước ngang */
  height: 14px; /* Điều chỉnh kích thước dọc */
  background-color: white; /* Màu sắc */
  opacity: 1; /* Đảm bảo chấm hiển thị rõ */
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #c1ccd0;
}
:deep(.swiper-button-next) {
  color: #f79121; /* Màu chữ (màu mũi tên) */
  font-size: 20px; /* Kích thước của mũi tên */
  width: 30px; /* Kích thước tổng thể của nút */
  height: 30px; /* Chiều cao nút */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Tùy chỉnh nút prev */
:deep(.swiper-button-prev) {
  color: #f79121; /* Màu chữ (màu mũi tên) */
  font-size: 20px; /* Kích thước của mũi tên */
  width: 30px; /* Kích thước tổng thể của nút */
  height: 30px; /* Chiều cao nút */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Tùy chỉnh khi hover */
:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  color: #E57B18; /* Màu khi hover */
  transform: scale(1.1); /* Tạo hiệu ứng phóng to khi hover */
}
.pmp-banner-block {
  display: flex
;
  overflow: hidden;
  position: relative;
  justify-content: space-between;
  border: 2px solid #bac8ce;
  align-items: center;
  min-height: 72px;
  border-radius: 4px;
  background-color: #fff;
  color: #1b1e4b;
}
</style>