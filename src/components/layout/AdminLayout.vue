<template>
  <ThemeProvider
    :default-theme="defaultTheme"
    :storage-key="storageKey"
    :sync-with-system="syncWithSystem"
  >
    <SidebarProvider>
      <div class="min-h-screen xl:flex bg-gray-50 dark:bg-gray-950">
        <slot name="sidebar">
          <Sidebar>
            <template #logo="slotProps">
              <slot name="sidebar-logo" v-bind="slotProps" />
            </template>
            <template #default="slotProps">
              <slot name="sidebar-nav" v-bind="slotProps" />
            </template>
            <template #footer="slotProps">
              <slot name="sidebar-footer" v-bind="slotProps" />
            </template>
          </Sidebar>
        </slot>

        <Backdrop />

        <div
          class="flex-1 transition-all duration-300 ease-in-out"
          :class="[isExpanded || isHovered ? 'lg:ml-[290px]' : 'lg:ml-[90px]']"
        >
          <slot name="header">
            <Header>
              <template #logo>
                <slot name="header-logo" />
              </template>
              <template #center>
                <slot name="header-center" />
              </template>
              <template #actions>
                <slot name="header-actions" />
              </template>
            </Header>
          </slot>

          <div class="p-4 mx-auto max-w-screen-2xl md:p-6">
            <slot></slot>
          </div>
        </div>
      </div>
    </SidebarProvider>
  </ThemeProvider>
</template>

<script setup lang="ts">
import { useSidebar } from "../../composables/useSidebar";
import ThemeProvider from "./ThemeProvider.vue";
import SidebarProvider from "./SidebarProvider.vue";
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import Backdrop from "./Backdrop.vue";
import type { Theme } from "../../composables/useTheme";

withDefaults(
  defineProps<{
    defaultTheme?: Theme;
    storageKey?: string;
    syncWithSystem?: boolean;
  }>(),
  {
    defaultTheme: "light",
    storageKey: "theme",
    syncWithSystem: true,
  },
);

const { isExpanded, isHovered } = useSidebar();
</script>
