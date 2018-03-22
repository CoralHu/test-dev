// pages/index/index.js
const innerAudioContext = wx.createInnerAudioContext();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    arrayType: ['success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn', 'success_circle', 'success_no_circle', 'waiting_circle', 'circle', 'download', 'info_circle', 'cancel', 'search', 'clear'],
    boxs: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    country: ['中国', '美国', '巴西', '日本'],
    index: 0,
    time: '19:23',
    date: '2018-03-14',
    arraySheng: ['陕西', '黑龙江'],
    arrayShi: [
      ['西安', '咸阳'],
      ['哈尔滨', '大庆']
    ],
    indexSheng: 0,
    indexShi: 0,
    /**audio */
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',

    duration: 0,
    curTimeVal: 0,
    playSrc:"../../images/index_play.png",
    pauseSrc:"../../images/stop_play.png",
    /**
     * 视频
     */
    videosrc: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 2
      }]
  },
  mychange: function (e) {
    console.log(e);
  },
  checkboxChange: function (e) {
    console.log(e.detail.value);
  },
  myinputFunc: function (e) {
    console.log(e.detail.value);
  },
  bindPickerChange: function (e) {
    console.log(e.detail.value);
    this.setData({ index: e.detail.value });
  },
  bindPickerTime: function (e) {
    this.setData({ time: e.detail.value });
  },
  bindPickerDate: function (e) {
    this.setData({ date: e.detail.value });
  },
  myPicker1: function (e) {
    this.setData({ indexSheng: e.detail.value });
  },
  myPicker2: function (e) {
    this.setData({ indexShi: e.detail.value });
  },
  radioChange: function (e) {
    console.log(e.detail.value);
  },
  sliderChange: function (e) {
    console.log(e.detail.value);
  },
  switchChange: function (e) {
    console.log(e.detail.value);
  },
  textareaInput: function (e) {
    console.log(e.detail.value);
  },
  formSubmit: function (e) {
    console.log(e.detail.value);
  },
  /**音频 */
  audioPlay: function () {
    this.audio.play();
  },
  audioPause: function () {
    this.audio.pause();
  },
  audio20: function () {
    this.audio.seek(20);
  },
  audioStart: function () {
    this.audio.seek(0);
  },
  // 视频
  play: function () {
    console.log("play");
  },
  playing: function (res) {
    console.log(res);
  },
  draw2: function () {
    var context = wx.createContext();
    //设置线条颜色为绿色
    context.setStrokeStyle("#FF0000");
    //线条宽度5
    context.setLineWidth(5);
    //绘制矩形
    context.rect(0, 0, 200, 200);
    //关闭
    context.stroke();
    wx.drawCanvas({
      canvasId: 'canvas2',
      actions: context.getActions() // 获取绘图动作数组
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.audio = wx.createAudioContext('myAudio');
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createContext();
    //设置线条颜色为绿色
    context.setStrokeStyle("#00ff00");
    //线条宽度5
    context.setLineWidth(5);
    //绘制矩形
    context.rect(0, 0, 200, 200);
    //关闭
    context.stroke();
    // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
    wx.drawCanvas({
      canvasId: 'canvas1',
      actions: context.getActions() // 获取绘图动作数组
    });
    
    innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
  },
  innerplay: function (e) {
    var that = this;
    innerAudioContext.play();
    innerAudioContext.onPlay((res) => {
      that.innerupdateTime(that)
    }) //没有这个事件触发，无法执行updatatime
  },
  innerpause: function () {
    innerAudioContext.pause();
  },
  innerupdateTime: function (that) {
    innerAudioContext.onTimeUpdate((res) => {
      //更新时把当前的值给slide组件里的value值。slide的滑块就能实现同步更新
      console.log("duratio的值：", innerAudioContext.duration.toFixed(2))
      console.log("currentTime", innerAudioContext.currentTime.toFixed(2))
      that.setData({
        duration: innerAudioContext.duration.toFixed(2) *
        100,
        curTimeVal: innerAudioContext.currentTime.toFixed(2) *
        100,
      })
    })
    //播放到最后一秒
    if (innerAudioContext.duration.toFixed(2) - innerAudioContext.currentTime.toFixed(2)
      <= 0) {
      that.setStopState(that)
    }
    innerAudioContext.onEnded(() => {
      that.setStopState(that)
    })
  },
  //拖动滑块
  slideBar: function (e) {
    let that = this;
    var curval = e.detail.value; //滑块拖动的当前值
    innerAudioContext.seek(curval); //让滑块跳转至指定位置
    innerAudioContext.onSeeked((res) => {
      this.innerupdateTime(that) //注意这里要继续出发updataTime事件，
    })
  },
  setStopState: function (that) {
    that.setData({
      curTimeVal: 0
    })
    innerAudioContext.stop()
  },

  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }



})