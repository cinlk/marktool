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
       <div class="bj_aboutus">
            <div class="banner_img">
                <img src="../assets/bj_aboutus.png" style="width:100%; height:100%">
                  <div class="banner_content">
                  <div class="title">公司简介</div>
                  <div class="english_title" >COMPANY PROFILE</div>
                  <div class="subtitle">一 What we do</div>
                </div> 
              </div>
       </div>
        <div class="content_aboutus">
            <div class="us_text">关于我们</div>
            <div class="us_eng">一 BOUT US 一</div>
            <div class="us_detail">上海冰丰科技有限公司,是专门为企业、政府提供数字化软件云综合解決方案的公司。企业数字化是未来的大趋势,以新基建代表的数字化浪潮将为企业提升效益的同时节省更多的成本。我们公司依托北京大学实验室及北京和上海兄弟合作企业,通过自助研发的一套" Apilink-基于定义高可靠软件接口的分层开发的软件系统平台”,从云服务、应用层等开发抽象,可以为政府、企业的数字化软件开发提供快速及保质保量的软件服务。我们提供的服务包括智慧城市、智慧楼宇、智慧物联网云、企业办公效率软件等。团队核心成员来自北京大学及Top互联网企业。</div>
            <div class="us_imgs">
              
                <img src="../assets/e1.png" style="float: left; width: 30%;"/>
                <img src="../assets/e2.png" style="float: left; width: 30%;"/>
                <img src="../assets/e3.png" style="float: left; width: 30%;"/>
            </div>
        </div>

        <div class="coperations">
               <div class="coper_title" >合作伙伴</div>
               <div class="coper_eng_title">COOPERATIVE PARTNER</div>
               <div class="coper_imgs">
                    <img src="../assets/logo_1.png" style="float: left; width: 25%;"/> 
                    <img src="../assets/logo_2.png" style="float: left; width: 40%;"/> 
                    <img src="../assets/logo_3.png" style="float: left; width: 25%;"/> 
                    <img src="../assets/logo_4.png" style="float: left; width: 25%;"/> 
                    <img src="../assets/logo_5.png" style="float: left; width: 40%;"/>
                    <img src="../assets/logo_6.png" style="float: left; width: 25%;"/>    
               </div> 
        </div>

       
        <div class="slogan_content">
           <img src="../assets/bj_2.png" style="width: 100%; height: 100%"/>
           <div class="tags">
                 <div class="tag_content">
                      <div class="t1">更安全</div>
                      <div class="t2">More secure</div>
                 </div>
                 <div class="tag_content">
                      <div class="t1">更智慧</div>
                      <div class="t2">More intelligent</div>
                 </div>
                 <div class="tag_content">
                      <div class="t1">更高效</div>
                      <div class="t2">More efficient</div>
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
  metaInfo: {
    title: 'markhand',
    meta: [
      {
          name: 'description',
          content: 'sketch上最好用的标注工具，它是UI设计师必备的插件',
      },
      {
          name: 'keywords',
          content: 'sketch, UI, 切图, 标准, 设计, 分享, 工具'
      }
    ]
  },
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
    margin: 20px auto;
  }

  .bj_aboutus {
    display: flex;
    height: auto;
  }

  .banner_img {
    position: relative;
    width: auto;
    height: auto;
    background: #00B578;
  }
  .banner_content{
    position: absolute;
    top: 145px;  
    left: 180px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
  .title{
    width: 288px;
    font-family: PingFangSC-Light;
    font-size: 45px;
    color: #FFFEFE;
    letter-spacing: 0;
    font-weight: 200;
    text-align: left;
  }
  
  .english_title{
    width: 499px;
    text-align: left;
    font-family: PingFangSC-Light;
    font-size: 35px;
    color: #FFFEFE;
    letter-spacing: 0;
    font-weight: 200;
    margin-top: 20px;
  }
  .subtitle{
    width: 176px;
    text-align: left;
    font-family: PingFangSC-Light;
    font-size: 20px;
    color: #FFFEFE;
    letter-spacing: 0;
    font-weight: 200;
    margin-top: 50px;
  }

 .content_aboutus {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 0;

  }

 .us_text {
    width: 80px;
    height: 28px;
    font-family: PingFangSC-Medium;
    font-size: 20px;
    color: #050505;
    letter-spacing: 0;
    font-weight: 500;
  }

  .us_eng {
    width: 184px;
    height: 22px;
    opacity: 0.36;
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #050505;
    letter-spacing: 0;
    font-weight: 500;
  }

  .us_detail {
    max-width: 1000px;
    height: 152px;
    font-family: Helvetica;
    font-size: 16px;
    color: #727272;
    letter-spacing: 0;
    line-height: 38px;
    font-weight: 400;
    margin-top: 30px;
    text-align: left;
    
  }

  .us_imgs {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      max-width: 1000px;
      margin-top: 40px;
  }

  .coperations {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

  .coper_title {
    width: 80px;
    height: 28px;
    font-family: PingFangSC-Medium;
    font-size: 20px;
    color: #050505;
    letter-spacing: 0;
    font-weight: 500;
  }

  .coper_eng_title {
    width: 195px;
    height: 22px;
    opacity: 0.36;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #050505;
    letter-spacing: 0;
    font-weight: 500;
  }

  .coper_imgs {

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      max-width: 800px;
      margin-top: 40px;
  }

  

  .slogan_content {
    position: relative;
    width: auto;
    height: auto;
    margin-top: 30px;
  }

  .tags {
      position: absolute;
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      top: 50%;
      left: 50%;
      width: 100%;
      height: auto;
      transform: translate(-50%,-50%);

  }
  .tag_content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

  }
  .t1 {
    width: 210px;
    font-family: PingFangSC-Light;
    font-size: 50px;
    color: rgba(0,0,0,0.85);
    letter-spacing: 0;
    font-weight: 200;

  }
  .t2 {
    width: 300px;
    font-family: PingFangSC-Light;
    font-size: 30px;
    color: rgba(0,0,0,0.85);
    letter-spacing: 0;
    font-weight: 200;
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
    margin-top: 100px;
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