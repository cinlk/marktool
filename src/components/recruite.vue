<template>
  <div class="content">
    <!-- header -->
    <div class="header">
      <div>
      <img src="../assets/icon.png" style="width: 40px; height: 30px;"/>
      </div>  
      <div class="login_register">
        <div class="login" @click="handleClickLogin">登录</div>
        <div class="register" @click="handleClickRegister">注册</div>
      </div>     
    </div>
     
     <div class="main">
          <div class="join">
              <div class="banner_img">
                <img src="../assets/banner.png" style="width:100%; height:100%">
                  <div class="banner_content">
                  <div class="title">招贤纳士</div>
                  <div class="english_title" >COMPANY RECRUITMENT</div>
                  <div class="subtitle">一 JOIN US</div>
                </div> 
              </div>
          </div>
           
          <div class="tag">
                <img src="../assets/recruitecircle.png" style="width: 327px;height: 70px;opacity: 0.9;">
                <div class="hot_title">热招职位</div>
                <div class="hot_eng_title">一 HOT JOB 一</div>    
          </div> 

          <div class="job_detail">
               <div class="job_img">
                  <img src="../assets/jobimg.png" style="width: 100%;height: 100%;">
                  <div class="job_description">
                      <div class="wrap">
                          <img src="../assets/rectangle.png" style="width:100%; height:50%; align-self:flex-end"/>
                          <div class="d1" >招聘岗位</div>
                      </div>
                      <div class="d2">项目负责人</div>
                      <div class="d2">运营管理人员</div>
                      <div class="d2">UI设计师</div>
                      <div class="wrap"  style="margin-top:40px">
                          <img src="../assets/rectangle.png" style="width:100%; height:50%; align-self:flex-end;"/>
                         <div class="d1">岗位要求</div>
                      </div>
                      <div class="d2" style="margin-top:20px">有自驱能力，对项目认真负责，沟通能力强，能清晰表达自我，传递自我价值</div>
                      <div class="wrap" style="margin-top:40px">
                          <img src="../assets/rectangle.png" style="width:100%; height:50%; align-self:flex-end;"/>
                            <div class="d1" >公司福利</div>
                      </div>

                      <div class="d2" style="margin-top:20px">六险一金，免费餐补，加班福利，免费下午茶</div>
                  </div>
               </div>     
          </div>

     </div>
   
    <!-- foot -->
    <div class="footer">
      <div style="margin-bottom:89px; display:flex;flex-direction: column;">
        <div class="item">
           <img style="width: 20px; height: 20px; margin-right:10px" src="../assets/privateDepoly.png">
            <div style="color: #FFFFFF;letter-spacing: 0; font-family: PingFangSC-Medium;font-size: 20px">
            私有化部署
            </div>
        </div>

        <div class="item_text">
              <a href="deploy/deploy.html" target="_blank" style="color: rgba(255,255,255,0.41);
              text-decoration-line: none;">私有化方案介绍</a>
        </div>
      </div>
    
      <div style="margin-bottom:89px; display:flex; flex-direction: column;">
        <div class="item">
          <img style="width: 20px; height: 20px; margin-right:10px" src="../assets/aboutus.png">
          <div style="color: #FFFFFF;letter-spacing: 0;font-family: PingFangSC-Medium;font-size: 20px" >关于我们</div>
        </div>
        <div class="item_text"  style="cursor:pointer" @click="gotoAboutus">
          公司介绍
        </div>

      </div>


      <div style="margin-bottom:89px; display:flex; flex-direction: column;">
        <div class="item">
           <img style="width: 20px; height: 20px; margin-right:10px" src="../assets/recruite.png">

           <div style="color: #FFFFFF;letter-spacing: 0;font-family: PingFangSC-Medium;font-size: 20px">
            公司招聘
           </div>
        </div>
         <div class="item_text"  style="cursor:pointer" @click="gotoRecruite">
            招聘信息
          </div>
      </div>
     
      <div style="margin-bottom:89px; display:flex; flex-direction: column;">
        <div class="item">
           <img style="width: 20px; height: 20px; margin-right:10px" src="../assets/email.png">

           <div style="color: #FFFFFF;letter-spacing: 0;font-family: PingFangSC-Medium;font-size: 20px">
            公司邮箱
           </div>
        </div>
         <div class="item_text">
            hr@bfengtech.com
          </div>
      </div>



      <div style="margin-bottom:89px; display:flex; flex-direction: column;">
        <div class="item">
           <img style="width: 20px; height: 20px; margin-right:10px" src="../assets/address.png">

           <div style="color: #FFFFFF;letter-spacing: 0;font-family: PingFangSC-Medium;font-size: 20px">
            公司地址
           </div>
        </div>
         <div class="item_text">
           上海浦东新区祥科路58号A座719
          </div>
      </div>

      <!-- <div style="margin-bottom:65px;">
        <img style="width:40px;" src="../assets/wechat.png" alt="">
      </div> -->
    </div>


       <div style="font-size:18px; padding-bottom:20px; background-color:#3C3D40;">
          <a href="https://beian.miit.gov.cn/" target="_blank" class="legal">上海冰丰科技有限公司 沪ICP备18044123号-5</a>
       </div>

      <!-- 登录注册弹窗 -->
      <el-dialog
        :visible.sync="login_status"
        width="1000px">
        <div class="dialog_content">
          <div style="width:50%;">
            <img v-if="register_status" style="width:500px;height:500px;" src="../assets/register.png" alt="">
            <img v-else style="width:500px;height:500px;" src="../assets/login.png" alt="">
          </div>

          
          <div style="font-size:25px;padding-left:30px;text-align:left;padding-top:70px;width:470px">
            {{ register_status?'注册':'登录' }}
            
            <div @click="closeDialog" > 
              <img src="../assets/close.png" class="cancelButton">  
            </div>
            <div style="font-size:15px;margin-top:70px;">
              邮箱
            </div>
            <el-input style="width:500px" placeholder="请输入邮箱" v-model="email"></el-input>
            <div style="font-size:15px;margin-top:30px;">
              密码
            </div>
            <el-input placeholder="请输入密码" show-password v-model="password"></el-input>
            <div class="login_button" style="font-size:10px;margin-top:20px;width: 400px;">
              <div @click="handleClickChange">
                {{ register_status?'已有账号':'忘记密码?' }}
              </div>
              <div class="loginButton">
                {{ register_status?'注册':'登录' }}
              </div>
            </div>
          </div>
          
        </div>
      </el-dialog>
    
     
  </div>

  
</template>

<script>

export default {
  name: "main",
  inject:["reload"],
  data() {
    return {
      login_status: false,
      register_status: false,
      email: '',
      password: '',
      playerOptions: {
            playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
            autoplay: false, // 如果为true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 是否视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
              type: "video/mp4", // 类型
              src: require('../assets/video.mp4')// url地址
            }],
            poster: '', // 封面地址
            notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true, // 当前时间和持续时间的分隔符
              durationDisplay: true, // 显示持续时间
              remainingTimeDisplay: false, // 是否显示剩余时间功能
              fullscreenToggle: true // 是否显示全屏按钮
            }
          }
    }
  },
  methods: {
    handleClickLogin() {
      this.login_status = true
      this.register_status = false
    },
    handleClickRegister() {
      this.login_status = true
      this.register_status = true
    },
    closeDialog() {
      this.login_status = false
      this.register_status = false
    },
    handleClickChange() {
      this.register_status = !this.register_status
    },
    gotoRecruite(){
      
        if (this.$route.name != "recruite"){
          let url = this.$router.resolve(
            {
              path: "/recruite"
            }
          )
          this.reload()
          window.open(url.href, '_blank')          
        }       
    },
     gotoAboutus() {
       if (this.$route.name != "aboutus"){
          let url = this.$router.resolve(
            {
              path: "/aboutus"
            }
          )
          this.reload()
          window.open(url.href, '_blank')          
        } 
    }
  }
}
</script>

<style scoped>
>>>.el-input__inner {
	width: 220px;
  border-radius: 0;
  width: 400px;
  padding-left: 0;
	border-top-width: 0px;
	border-left-width: 0px;
	border-right-width: 0px;
	border-bottom-width: 1px;
}
>>>.el-input__suffix {
  left: 370px;
}
>>>.el-dialog__header {
  display: none;
}
>>>.el-dialog__body {
  height: 500px;
  padding: 0px;
}
.content {
  position: relative;
}
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.2em;
    fill: currentColor;
    overflow: hidden;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 80%;
    margin: 0 auto;
  }
  .header_img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 466px;
    height: 514px;
    opacity: 0.5;
  }
  .login_register {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 15px;
    width: 180px;
    height: 40px;
  }
  .login {
    width: 70px;
    height: 30px;
    line-height: 30px;
    border-right: #D8D8D8 2px solid;
    margin-right: 15px;
  }
  .register {
    width: 75px;
    height: 40px;
    line-height: 40px;
    background-color: #04DDA3;
    border-radius:20px 5px 20px 20px;
  }
  .login:hover {
    cursor: pointer;
  }
  .register:hover {
    cursor: pointer;
  }

  .loginButton {
    width: 170px;
    height: 50px;
    font-size: 18px;
    text-align: center;
    line-height: 52px;
    background-color: #04DDA3;
    border-radius:25px 5px 25px 25px;
  }

  .cancelButton {
    position: absolute;
    width: 25px;
    height: 25px;
    right: 20px;
    top: 30px;
    line-height: 15px;
    font-size: 15px;
    text-align: center;
  }



  .main {
    width: 100%;
    margin: 40px auto;
  }
  .join {
    display: flex;
    height: auto;

  }
  .banner_img {
    position: relative;
    width: auto;
    height: auto;
    background: #00B578;
  }


  .banner_content {
    position: absolute;
    top: 145px;  
    left: 140px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

  }
  .title {
    width: 288px;
    font-family: PingFangSC-Light;
    font-size: 52px;
    color: #FFFEFE;
    letter-spacing: 0;
    font-weight: 200;
    text-align: left;
  }
  .english_title {
    width: 658px;
    height: 45px;
    font-family: PingFangSC-Light;
    font-size: 40px;
    color: #FFFEFE;
    letter-spacing: 0;
    font-weight: 200;  
    text-align: left;
  }
  .subtitle {
    width: 164px;
    height: 25px;
    font-family: PingFangSC-Light;
    font-size: 25px;
    color: #FFFEFE;
    letter-spacing: 0;
    font-weight: 200;
    text-align: left;
    margin-top: 50px;
  } 

  .tag {
      display: flex;
      height: auto;
      flex-direction: column;
      margin-top: 30px;
      align-items: flex-end;
  }

  .hot_title {
    width: 160px;
    height: 33px;
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #050505;
    letter-spacing: 0;
    font-weight: 500;
    align-self: center;
  }
   
  .hot_eng_title {
    width: 160px;
    height: 22px;
    opacity: 0.36;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #050505;
    letter-spacing: 0;
    font-weight: 500;
    align-self: center;
  } 

  .job_detail {
    
    width: 80%;
    margin: 10px auto;
  }

  .job_img {
    position: relative;
    width: auto;
    height: auto;
  }

  .job_description {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      top: 120px;
      left: 160px; 
  }

  .wrap {
      display: flex;
      /* position: absolute; */
      justify-content: flex-start;
      align-items: flex-start;  
      margin-top: 20px;
      height: 42px;
      width: 120px;
     
  } 
  .d1 {
    
    /* width: 168px;
    height: 59px; */
    position: absolute;
    font-family: PingFangSC-Medium;
    font-size: 30px;
    color: #00B578;
    letter-spacing: 0;
    font-weight: 500;
    text-align: left;
    
  }

  .d2 {
    /* width: 124px;
    height: 44px; */
    font-family: PingFangSC-Medium;
    font-size: 20px;
    color: #727272;
    letter-spacing: 0;
    font-weight: 500;
    text-align: left;
    margin: 15px 0;
  }


  .login_dialog {
    width:1000px;
    background-color: #fff;
    box-sizing: border-box;
    border: 1px solid black;
    position: absolute;
    top: 0;
  }
  .dialog_content {
    display: flex;
    justify-content: space-evenly;
  }
  .login_button {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .footer {
    width: 100%;
    height: 250px;
    margin-top: 30px;
    background-color: #3C3D40;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    text-align: left;
  }

  .legal {
    width: 412px;
    height: 28px;
    font-family: PingFangSC-Medium;
    font-size: 20px;
    color: rgba(255,255,255,0.41);
    letter-spacing: 0;
    font-weight: 500;
    text-decoration-line: none;
  }
  .item {
    display: flex; 
    justify-content: space-around; 
    align-items: center;
  }
  .item_text {
    position: absolute;
    width: 136px;
    font-family: PingFangSC-Medium;
    font-size: 10px;
    color: rgba(255,255,255,0.41);
    letter-spacing: 0;
    font-weight: 500;
    margin-top: 40px;
    text-align: left;
    margin-left: 31px;
    

    
  }
</style>