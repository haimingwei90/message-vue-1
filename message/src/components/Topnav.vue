<template>
  <div class="nav">
    <div class="logo">
      <img src='' >
      <span>Vue Project</span>
    </div>
    <div class="navs">
      <router-link to="/index">首页</router-link>
      <router-link to="/topic">文章</router-link>
      <router-link to="/bbs">留言板</router-link>
    </div>

    <div class="userbox">
        <router-link to="/userinfo">loginname</router-link>
        <router-link to="/loginbt">登录</router-link>

    </div>
  </div>
</template>
<script>
export default {
  name: "Topnav"
};
</script>
<style scoped>
.nav {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 2px;
  border-bottom: 1px solid green;
}
.navs a{
  margin: 0px 10px;  
  cursor: default;
  color: black;
  text-decoration: none;
  font-size: 20px;
}
.navs a:hover{
  
  color: green;
  
}
.userbox a{
    margin: 0px 10px;  
    color: black;
    text-decoration: none;
}
</style>


