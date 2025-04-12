<template>
  <div class="flex">


    <div
      class="fixed !bg-[#000c17] inset-y-0 left-0 z-30 p-2 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0"
      :class="{ '-translate-x-full': !isOpen && !sidebarStore.collapsed }">

      <a-menu v-model:open-keys="state.openKeys" v-model:selected-keys="state.selectedKeys" mode="inline" theme="dark"
              :inline-collapsed="sidebarStore.collapsed" :items="items" @click="handleMenuClick" />

      <div class="absolute bottom-0 w-full p-4 border-t border-gray-800 lg:hidden" @click="toggleCollapsed">
        <MenuFoldOutlined v-if="state.collapsed" class="text-white" />
        <MenuUnfoldOutlined v-else class="text-white" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch, h, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  MobileOutlined,
  PictureOutlined,
  SettingOutlined,
  FormOutlined,
  ReadOutlined,
  SnippetsOutlined
} from "@ant-design/icons-vue";
import { useSidebarStore } from "@/stores/sidebar.js";

const route = useRoute();
const router = useRouter();
const isOpen = ref(false);
const sidebarStore = useSidebarStore();
const state = reactive({
  collapsed: sidebarStore.collapsed,
  selectedKeys: [] as string[],
  openKeys: [] as string[],
  preOpenKeys: [] as string[]
});

const items = reactive([
  {
    key: "1",
    icon: () => h(UserOutlined),
    label: "회원관리",
    title: "회원관리",
    path: "/admin/membership-management"
  },
  {
    key: "2",
    icon: () => h(MobileOutlined),
    label: "회원사관리",
    title: "회원사관리",
    path: "/admin/mobile-hub"
  },
  {
    key: "3",
    icon: () => h(PictureOutlined),
    label: "전시정보관리",
    title: "전시정보관리",
    path: "/admin/exhibition-information-management"
  },
  {
    key: "4",
    icon: () => h(SnippetsOutlined ),
    label: "카테고리",
    title: "카테고리",
    path: "/admin/exhibition-category-management"
  },
  {
    key: "5",
    icon: () => h(SettingOutlined),
    label: "메인관리",
    title: "메인관리",
    path: "/admin/manager/base"
  },
  {
    key: "sub1",
    icon: () => h(FormOutlined),
    label: "신청/문의현황",
    title: "신청/문의현황",
    children: [
      {
        key: "6",
        label: "전시신청",
        title: "전시신청",
        path: "/admin/state/app-list"
      },
      {
        key: "7",
        label: "문의사항",
        title: "문의사항",
        path: "/admin/state/inquiry"
      }
    ]
  },
  {
    key: "sub2",
    icon: () => h(ReadOutlined),
    label: "게시판관리",
    title: "게시판관리",
    children: [
      {
        key: "8",
        label: "코이코 뉴스",
        title: "코이코 뉴스",
        path: "/admin/page/board/news"
      },
      // {
      //   key: "8",
      //   label: "위생허가 FAQ",
      //   title: "위생허가 FAQ",
      //   path: "/admin/page/board/faq"
      // },
      // {
      //   key: "9",
      //   label: "위생허가 진행상황",
      //   title: "위생허가 진행상황",
      //   path: "/admin/page/board/permission"
      // },
      {
        key: "9",
        label: "산업정보",
        title: "산업정보",
        path: "/admin/page/board/info"
      },
      {
        key: "10",
        label: "마케팅 뉴스",
        title: "마케팅 뉴스",
        path: "/admin/page/board/marketing"
      },
      {
        key: "11",
        label: "갤러리",
        title: "갤러리",
        path: "/admin/page/board/gallery"
      }
    ]
  }
]);

watch(
  () => route.path,
  (newPath) => {
    const findActiveItem = (items: any[]): any => {
      for (const item of items) {
        if (item.path === newPath) return item;
        if (item.children) {
          const childMatch = findActiveItem(item.children);
          if (childMatch) return childMatch;
        }
      }
      return null;
    };

    const activeItem = findActiveItem(items);
    if (activeItem) {
      state.selectedKeys = [activeItem.key];
      const parentItem = items.find(item =>
        item.children?.some((child: any) => child.key === activeItem.key)
      );
      if (parentItem) {
        state.openKeys = [parentItem.key];
      }
    }
  },
  { immediate: true }
);


watch(
  () => [...state.openKeys],
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  }
);

const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
  if (!state.collapsed) {
    isOpen.value = true;
  }
};

const handleMenuClick = ({ key }: { key: string }) => {
  const findItemByKey = (items: any[], targetKey: string): any => {
    for (const item of items) {
      if (item.key === targetKey) return item;
      if (item.children) {
        const childMatch = findItemByKey(item.children, targetKey);
        if (childMatch) return childMatch;
      }
    }
    return null;
  };

  const clickedItem = findItemByKey(items, key);
  if (clickedItem?.path) {
    router.push(clickedItem.path);
    isOpen.value = false;
  }
};
</script>

<style scoped>
@media (max-width: 1024px) {
  .transform {
    transition: transform 0.3s ease-in-out;
  }
}

:deep(.ant-menu) {
  background-color: transparent;
}
:deep(.ant-menu-item) {
  background-color: #000c17;
}
</style>
