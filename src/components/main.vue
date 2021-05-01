<template>
  <div class="content">
    <!-- header -->
    <div class="header">
      <div class="login_register">
        <div class="login" @click="handleClickLogin">登录</div>
        <div class="register" @click="handleClickRegister">注册</div>
      </div>     
    </div>
     
    <!-- title -->
    <div class="title">
      <div style="flex:1">
        <div class="title_left" style="position: relative;z-index: 1;">
        <img class="header_img" style="opacity: 0.8;" src="../assets/header.png">
        <div class="title_text">
          <div style="font-weight: bolder;font-family: Helvetica;letter-spacing: -1.44px;margin: bottom 30px;">
            锡兰切图大师
          </div>
          <div style="font-size:50px;font-weight:600;">
            sketch切图神器
          </div>
          <!-- <div style="font-size:30px; font-weight:100">Sketchmeasure增强版</div> -->
            <div class="download_area">
              <a class="downLoad"  download="markhand.zip">
                下载sketch插件
              </a>
          <div style="display:flex;height:40px;align-items:center;">
            <div>
              <a href="demo/index.html" target="_blank" style="color:black">查看示例</a>
            </div>
            <div style="background-color: #04DDA3;border-radius:40px;margin-left:20px;">
              <svg style="font-size:40px" class="icon" aria-hidden="true">
                <use  xlink:href="#icon-xiangyousanjiaoxing-copy"></use>
              </svg>
            </div>
          </div>
        </div>
          </div>
        </div>
      
      </div>
      
      <div class="video">
        <video-player class="video-player vjs-custom-skin" 
              ref="videoPlayer" 
              :playsinline="true" 
              :options="playerOptions">
        </video-player> 
      </div>
    </div>

    <!-- main -->
    <div class="main">
      <!-- 左右布局 -->
      <div class="main_item">
        <div class="main_left">
          <div class="main_leftText">
            <div style="font-size:50px;font-weight:bold;">
            一键导出HTML
            </div>
            <div style="margin-top:50px;display:flex;align-items:center;font-size:16px;">
              <div  >
                <img style="width:10px;height:10px;border-radius:50%;background-color:#878BAD;" src="../assets/ellipse.png">
              </div>

              <div style="text-align:left;margin-left:20px;">
                一键自动生成 HTML 页面，离线下检查所有设计细节，包括 CSS 样式。
              </div>
            </div>
            <div style="margin-top:50px;display:flex;align-items:center;font-size:16px;">
              <div  >
                <img style="width:10px;height:10px;border-radius:50%;background-color:#878BAD;" src="../assets/ellipse.png">
              </div>
              <div style="text-align:left;margin-left:20px;">点击工具栏上的导出HTML按钮或使用快捷键control ⌃ + shift ⇧ + E。</div>
            </div>
          </div>
          <img class="main_center" style="bottom:0;right:20px;" src="../assets/separate.png" >
        </div>
        <div class="main_right">
          <img style="width:50%;height:50%;position: absolute;top:0;right:0;" src="../assets/bj1.png">
          <img style="width:95%;height:95%;position: absolute;bottom:0;left:0;" src="../assets/main1.png">
        </div>
      </div>
      <div class="main_item">
        <div class="main_right">
          <img style="width:50%;height:50%;position: absolute;bottom:0;left:0;" src="../assets/bj2.png">
          <img style="width:95%;height:95%;position: absolute;top:0;right:0;" src="../assets/main2.png">
        </div>
        <div class="main_right">
          <div class="main_rightText">
            <div style="font-size:50px;font-weight:bold;">
            标注区域&坐标
            </div>
            <div style="margin-top:50px;display:flex;align-items:center;font-size:16px;">
              <div  >
                <img style="width:10px;height:10px;border-radius:50%;background-color:#878BAD;" src="../assets/ellipse.png">
              </div>
              <div style="text-align:left;margin-left:20px;">
                在图层上标记出坐标位置以及显示的区域。
              </div>
            </div>
            <div style="margin-top:50px;display:flex;align-items:center;font-size:16px;">
              <div  >
                <img style="width:10px;height:10px;border-radius:50%;background-color:#878BAD;" src="../assets/ellipse.png">
              </div>
              <div style="text-align:left;margin-left:20px;">点击工具栏上的坐标和区域按钮或使用快捷键control ⌃ + shift ⇧ + 1和6。</div>
            </div>
          </div>
          <img class="main_center" style="bottom:0;left:20px;" src="../assets/separate.png" >
        </div>
        
      </div>
      <div class="main_item">
        <div class="main_left">
          <div class="main_leftText">
            <div style="font-size:50px;font-weight:bold;">
            标注间隔&尺寸
            </div>
            <div style="margin-top:50px;display:flex;align-items:center;font-size:16px;">
              <div  >
                <img style="width:10px;height:10px;border-radius:50%;background-color:#878BAD;" src="../assets/ellipse.png">
              </div>
              <div style="text-align:left;margin-left:20px;">
                选中画板上图层，设置图层大小以及周围间隔距离
              </div>
            </div>
            <div style="margin-top:50px;display:flex;align-items:center;font-size:16px;">
              <div  >
                <img style="width:10px;height:10px;border-radius:50%;background-color:#878BAD;" src="../assets/ellipse.png">
              </div>
              <div style="text-align:left;margin-left:20px;">点击工具栏上的间隔按钮或使用快捷键control ⌃ + shift ⇧ + 2和3 </div>
            </div>
          </div>
          <img class="main_center" style="bottom:0;right:20px;" src="../assets/separate.png" >
        </div>
        <div class="main_right">
          <img style="width:50%;height:50%;position: absolute;top:0;right:0;" src="../assets/bj3.png">
          <img style="width:95%;height:95%;position: absolute;bottom:0;left:0;" src="../assets/main3.png">
        </div>
      </div>
      <div class="main_item">
        <div class="main_right">
          <img style="width:50%;height:50%;position: absolute;bottom:0;left:0;" src="../assets/bj4.png">
          <img style="width:95%;height:95%;position: absolute;top:0;right:0;" src="../assets/main4.png">
        </div>
        <div class="main_right">
          <div class="main_rightText">
            <div style="font-size:50px;font-weight:bold;">
            备注切图
            </div>
            <div style="margin-top:50px;display:flex;align-items:center;font-size:16px;">
              <div  >
                <img style="width:10px;height:10px;border-radius:50%;background-color:#878BAD;" src="../assets/ellipse.png">
              </div>
              <div style="text-align:left;margin-left:20px;">
                添加文字，设计文字为切图的注释
              </div>
            </div>
            <div style="margin-top:50px;display:flex;align-items:center;font-size:16px;">
              <div  >
                <img style="width:10px;height:10px;border-radius:50%;background-color:#878BAD;" src="../assets/ellipse.png">
              </div>
              <div style="text-align:left;margin-left:20px;">点击工具栏上的 间隔 按钮或使用快捷键control ⌃ + shift ⇧ + 6 </div>
            </div>
          </div>
          <img class="main_center" style="bottom:0;left:20px;" src="../assets/separate.png" >
        </div>
        
      </div>
    </div>

   
    <div class="download_sketch">
      <a  class="dowload_href"  download="markhand.zip">下载sketch插件</a>
    </div>
   
   
   <div class="footer"></div>
    <!-- foot -->
    <!-- <div class="footer">
      <div style="margin-bottom:89px; display:flex;flex-direction: column;">
        <div class="item">
           <img style="width: 25px; height: 25px; margin-right:10px; object-fit:contain" src="../assets/privateDepoly.png">
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
          <img style="width: 25px; height: 25px; margin-right:10px; object-fit:contain" src="../assets/aboutus.png">
          <div style="color: #FFFFFF;letter-spacing: 0;font-family: PingFangSC-Medium;font-size: 20px" >关于我们</div>
        </div>
        <div class="item_text"  style="cursor:pointer" @click="gotoAboutus">
          公司介绍
        </div>

      </div>


      <div style="margin-bottom:89px; display:flex; flex-direction: column;">
        <div class="item">
           <img style="width: 25px; height: 25px; margin-right:10px; object-fit:contain" src="../assets/recruite.png">

           <div style="color: #FFFFFF;letter-spacing: 0;font-family: PingFangSC-Medium;font-size: 20px">
            公司招聘
           </div>
        </div>
         <div class="item_text" style="cursor:pointer" @click="gotoRecruite">
            招聘信息
          </div>
      </div>
     
      <div style="margin-bottom:89px; display:flex; flex-direction: column;">
        <div class="item">
           <img style="width: 25px; height: 25px; margin-right:10px; object-fit:contain" src="../assets/email.png">

           <div style="color: #FFFFFF;letter-spacing: 0;font-family: PingFangSC-Medium;font-size: 20px">
            公司邮箱
           </div>
        </div>
         <div class="item_text">
            hr@bfengtech.com
          </div>
      </div> -->


<!-- 
      <div style="margin-bottom:89px; display:flex; flex-direction: column;">
        <div class="item">
           <img style="width: 25px; height: 25px; margin-right:10px;object-fit:contain" src="../assets/address.png">

           <div style="color: #FFFFFF;letter-spacing: 0;font-family: PingFangSC-Medium;font-size: 20px">
            公司地址
           </div>
        </div>
         <div class="item_text">
           上海浦东新区祥科路58号A座719
          </div>
      </div> -->

      <!-- <div style="margin-bottom:65px;">
        <img style="width:40px;" src="../assets/wechat.png" alt="">
      </div> -->
    <!-- </div> -->

<!-- 
       <div style="font-size:18px; padding-bottom:20px; background-color:#3C3D40;">
          <a href="https://beian.miit.gov.cn/" target="_blank" class="legal">上海冰丰科技有限公司 沪ICP备18044123号-5</a>
       </div> -->

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
            <div style="font-size:15px;margin-top:70px;" v-if="!register_status">
              手机号
            </div>
            
            <el-input  placeholder="请输入手机号" v-model="loginData.phone"  v-if="!register_status"></el-input>
            <div style="font-size:15px;margin-top:30px;" v-if="!register_status">
              密码
            </div>
            <el-input placeholder="请输入密码" show-password v-model="loginData.password" v-if="!register_status"></el-input>
            

            <el-input  placeholder="请输入手机号" v-model="registryData.phone"  v-if="register_status"></el-input>

            <el-input placeholder="请输入密码" show-password v-model="registryData.password" v-if="register_status"></el-input>

            <!-- <div style="font-size:15px;margin-top:70px;">短信验证码</div> -->
            <!-- <el-input placeholder="请输入短信验证码"  v-model="registryData.code" v-if="register_status"></el-input> -->

            <div class="verify" v-if="register_status">
                                <el-input   type="tel" class="inputs"  placeholder="短信验证码" v-model="registryData.code"></el-input>
                                <el-button
                                    type="primary"
                                    @click="getVerify"
                                    class="codeButton"
                                    :disabled="disabled=!show"
                                >
                                <span v-show="show">获取验证码</span>
                                <span v-show="!show">{{count}} s</span>
                                </el-button>
            </div>


            <div class="verify" v-if="register_status">
                    <el-input class="inputs" v-model="registryData.verifyCode"  placeholder="图形验证码" ></el-input>
                    <div  @click="refreshCode()">
                       <s-identify  :identifyCode="identifyCode"></s-identify >
                    </div>
                </div>



            <div class="login_button" style="font-size:10px;margin-top:20px;width: 400px;">
              <div @click="handleClickChange">
                {{ register_status?'已有账号':'新用户注册' }}
              </div>
              <div class="loginButton" @click="trigger">
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
    title: '锡兰切图',
    meta: []
  },
  
  data() {
    return {
      login_status: false,
      register_status: false,
      loginData:{
            phone: '',
            password: '',
      },
      registryData:{
          phone:"",
          code:"",
          password:"",
          verifyCode:""
      },
      identifyCodes: "1234567890",
      identifyCode: "",
      show: true,
      count:"",
      timer:null,
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
  mounted(){
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {

      trigger(){
          if (this.register_status == false){
              if (this.checkPhone(this.loginData.phone) == false){
                return
              }
              if (this.checkPassword(this.loginData.password) == false){

                this.$message.error("密码必须大于6位")

                return
              }

          }else if (this.register_status){
              if (this.checkPhone(this.registryData.phone) == false){
                return
              }
              if (this.checkPassword(this.registryData.password) == false){
                this.$message.error("密码必须大于6位")
                  return
              }

              if(this.identifyCode != this.registryData.verifyCode){
                this.$message.error("图形验证码错误")
                return
              }
              if(this.registryData.code.length !=6  || !/^[0-9]+\.?[0-9]*$/.test(this.registryData.code)){
                   this.$message.error("请填写正确的验证码");
                    return
                }

          }
      },
      randomNum(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            },
        refreshCode() {
          this.identifyCode = "";
          this.makeCode(this.identifyCodes, 4);
        },

        makeCode(o, l) {
          for (let i = 0; i < l; i++) {
            this.identifyCode += this.identifyCodes[
              this.randomNum(0, this.identifyCodes.length)
            ];
          }
            //console.log(this.identifyCode);
    },

     checkPhone(phone) {
            //let phone = this.registryData.phone;
            if (!/^1[3456789]\d{9}$/.test(phone)) {
                this.$message.error("请填写正确的手机号");
                return false;
            }


        },

        checkPassword(pw){
          pw = pw.trim()

          if (pw.length <= 6){
            return false
          }
          return true 
        },


        getVerify() {
            // 验证手机号
            if (this.checkPhone(this.registryData.phone) == false) {
                return false;
            } else {
                 // 发送验证码请求
                // var _this = this;
                // this.$axios.post("sms",{
                //      type:"registry",
                //      phone: _this.registryData.phoneNum
                // }).then(function (res) {
                //     // http status OK 被axios 进行了处理，这只http为ok才有数据处理 ？
                    
                //     if (res.data && res.data.code == 200){
                //         _this.$message.success("发送验证码成功");
                //     }else if(res.response){
                //         if (res.response.data.code == 409){
                //          _this.$message.error("账号已存在");

                //         }else{
                //          _this.$message.error("发送验证码错误");

                //         }
                //     }
                   
                // }).catch(function (error) {
                //     //console.log(error) 区分不同错误类型？
                //     _this.$message.error("发送验证码异常");
                // });



                const TIME_COUNT = 60; //更改倒计时时间
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer); // 清除定时器
                            this.timer = null;
                        }
                    }, 1000);
                }
            }
        },




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
    gotoRecruite( ){
      
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
    justify-content: flex-end;
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


.el-input{
  height: 50px;
  margin-top:10px
}
  .title {
    margin-top: 100px;
    padding-right: 24px;
    height: 460px;
    margin-bottom: 100px;
    display: flex;
    justify-content: flex-start;
  }
  .title_text {
    position: absolute;
    z-index: 2;
    left: 120px;
    top: 0;
    font-size:70px;
    color:#151D31;
    text-align: left;
    margin-top: 50px;
  }
  .download_area {
    position: absolute;
    width: 500px;
    display: flex;
    align-items: center;
    /* justify-content: space-evenly; */
    justify-content: start;
    font-size: 15px;
    margin-top: 60px;
    text-align: center;
  }
  .downLoad {
    width: 174px;
    height: 50px;
    color: #000000;
    font-family: PingFangSC-Regular;
    letter-spacing: -0.63px;
    line-height: 50px;
    background-color: #04DDA3;
    border-radius:20px 5px 20px 20px;
    /* margin-left: 300px; */
    text-align: center;
    margin-right: 70px;
    text-decoration-line: none;
  }

  .dowload_href{
    
    display: block;
    color: #000000;
    font-family: PingFangSC-Regular;
    line-height: 50px;
    background-color: #04DDA3;
    border-radius:20px 5px 20px 20px;
    /* margin-left: 300px; */
    text-align: center;
    text-decoration-line: none;
  }
  .video {
    /* margin-left: 500px; */
    width: 650px;
    min-width: 400px;
    /* height: 600px; */
    position: absolute;
    right: 60px;
    top: 140px;
  }

  .main {
    width: 80%;
    margin: 100px auto;
  }
  .main_item {
    margin-top: 100px;
    display: flex;
    height: auto;
    justify-content: space-around;
  }
  .main_left {
    position: relative;
    width: 50%;
    display: flex;
    justify-content: flex-start;
  }
  .main_right {
    position: relative;
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }
  .main_leftText {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    text-align: left;
    width:400px;
    height: 400px;
  }
  .main_rightText {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: right;
    text-align: left;
    width:400px;
    height: 400px;
  }
  .main_center {
    position: absolute;
    width:50px;
    
  }
  .main_right {
    position: relative;
    width:800px;
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

.inputs{
  width: 50%;
  display: inline-flex;
  margin-right: 10px;
}

.verify {
    
      width: 100%;
      /* height: 40px; */
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      justify-items: center;
    }


    .codeButton{
        
        /* width: 130px; */
        height: 40px;
        align-self: right;
        margin-bottom: 10px;
        
    }


  .download_sketch {

    margin: 10px auto;
    width: 174px;
    height: 50px;
    font-size: 15px;
    text-align: center;
    line-height: 20px;
    align-items: center;
    justify-content: start;
    background-color: #04DDA3;
    border-radius:20px 5px 20px 20px;
    
  }
  .footer {
    width: 100%;
    height: 50px;
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
    margin-left: 36px;
    

    
  }
</style>