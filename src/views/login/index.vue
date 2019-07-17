<template>
  <div class="login">
     <div class="login-box">
     <div class="login-img">
         <!-- 头像区域 -->
         <img src="../../assets/logo.png" alt="">
     </div>
     <!-- 登录表单区域 -->
     <div class="btn">
 <el-form  :model="LoginFrom" :rules="LoginFromRules" label-width="0px" ref="LoginFromRef">
  <el-form-item prop="username">
    <el-input v-model="LoginFrom.username"   prefix-icon="iconfont icon-user"></el-input>
  </el-form-item >

 
  <el-form-item prop="passname">
    <el-input v-model="LoginFrom.passname"  prefix-icon="iconfont icon-3702mima"></el-input>
  </el-form-item>
    <el-form-item class="btns">
    <el-button type="primary" @click="login">登录</el-button>
    <el-button @click="LoginFromRef">重置</el-button>
  </el-form-item>
  </el-form>
     </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            LoginFrom:{
               username:"" ,
               passname:""
            },
            LoginFromRules:{
                username:[
             { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                passname:[
                     { required: true, message: '请输入正确密码', trigger: 'blur' },
                { min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        LoginFromRef(){
            // 点击重置按钮，重置登录表单
            // console.log(this);
            this.$refs.LoginFromRef.resetFields()
            
        },
        login(){
            this.$refs.LoginFromRef.validate(valid=>{
              if(!valid) return valid
                
            })
        }
    }
};
</script>
<style lang="less" scoped>
.login{
    background-color: #2b4b6b;
    height: 100%;
}
.login-box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50% ,-50%)
}
.login-img{
    height: 130px;
    width: 130px;
    border: 1px solid #ccc;
    border-radius: 50%; 
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    top:-50%;
    left: 50%;
    transform: translate(-50%,50%);
    background-color: #fff;

   
}
 .login-img img{
        width: 100%;
        height: 100%;
         border-radius: 50%; 
          background-color: #ccc;
    }
    .btn{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .btns{
        display: flex;
        justify-content: flex-end;
    }
</style>
