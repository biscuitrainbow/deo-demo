<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']" @click="onMenuChange">
        <a-menu-item key="contract">
          <a-icon type="user" />
          <span class="nav-text">สร้างสัญญากู้ยืม</span>
        </a-menu-item>
        <a-menu-item key="contract-list">
          <a-icon type="video-camera" />
          <span class="nav-text">ตรวจสอบสถานะกู้ยืม</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="user" />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content
        :style="{ margin: '24px 16px 0', padding: '24px 24px', background: '#fff' }"
      >
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: "app",
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    onMenuChange({ item, key, keyPath }) {
      switch (key) {
        case "contract": {
          this.$router.push("/contract/create");
          break;
        }
        case "contract-list": {
          this.$router.push("/contract");
          break;
        }
      }
    }
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Kanit:200,300,400,500,700&display=swap&subset=thai");

#app {
  font-family: "Kanit", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

#components-layout-demo-responsive {
  min-height: 100vh;
  font-family: "Kanit", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
