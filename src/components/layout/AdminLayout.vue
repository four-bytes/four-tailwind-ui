<template>
  <ThemeProvider>
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

        <AdminLayoutContent>
          <template #header>
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
          </template>
          <slot />
        </AdminLayoutContent>
      </div>
    </SidebarProvider>
  </ThemeProvider>
</template>

<script setup lang="ts">
import ThemeProvider from "./ThemeProvider.vue";
import SidebarProvider from "./SidebarProvider.vue";
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import Backdrop from "./Backdrop.vue";
import AdminLayoutContent from "./AdminLayoutContent.vue";
</script>
