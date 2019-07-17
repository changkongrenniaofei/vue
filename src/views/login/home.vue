<template>
  
      <el-container>
  <el-aside><el-row class="home-container">
  <el-col :span="12">
    <h5>默认颜色</h5>
    <el-menu
      default-active="2"
     >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
         </el-row></el-aside>
       
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  

</el-container>
      <!-- <el-button></el-button> -->

</template>
<script>
export default {
    // methods:{
    //     logout(){
    //         sessionStorage.clear();
    //         this.$router.push("./login")
    //     },
    //     // 获取左侧菜单数据
    //     async getMenus(){
    //         const{
    //             data:{data,meta}
    //         }=await this.$http.get('menus')
    //         if(meta.status!==200) return this.$message.error(meta.msg)
    //         console.log(data);
    //         this.menus=data
    //     }
    // }
};
</script>



<style lang="less" scoped>
.home-container{
    height: 100%;    
}
.el-header{
  background-color: #ccc;
}
.el-main>{
  background-color: #fff;

}
.el-aside{
         background-color: pink;
 
    }

</style>