/*
  1:歌曲搜索接口
    请求地址:https://autumnfish.cn/search
    请求方法:get
    请求参数:keywords(查询关键字)
    响应内容:歌曲搜索结果
  2:歌曲url获取接口
    请求地址:https://autumnfish.cn/song/url
    请求方法:get
    请求参数:id(歌曲id)
    响应内容:歌曲url地址
  3.歌曲详情获取
    请求地址:https://autumnfish.cn/song/detail
    请求方法:get
    请求参数:id(歌曲id)
    响应内容:歌曲详情(包括封面信息)
  4.热门评论获取
    请求地址:https://autumnfish.cn/comment/hot?type=0
    请求方法:get
    请求参数:id(歌曲id,地址中的type固定为0)
    响应内容:歌曲的热门评论
  5.mv地址获取
    请求地址:https://autumnfish.cn/mv/url
    请求方法:get
    请求参数:id(mvid,为0表示没有mv)
    响应内容:mv的地址
*/
var app = new Vue({
  el: "#app",
  data: {
    // 歌曲搜索
    keywords: "",
    // 歌曲列表
    musicList: [],
    // 音乐播放地址
    musicUrl: "",
    // 音乐图片
    musicCover: "",

  },
  methods: {
    // 歌曲搜索方法
    searchMusic: function () {
      var that = this
      axios.get("https://autumnfish.cn/search?keywords=" + this.keywords)
        .then(function (response) {
          // console.log(response.data.result.songs)
          that.musicList = response.data.result.songs;
          // 清空输入框
          that.keywords = "";
        }, function (error) {
          console.log(error)
        })
    },
    // 歌曲播放方法
    playMusic: function (id) {
      var that = this
      axios.get("https://autumnfish.cn/song/url?id=" + id)
        .then(function (response) {
          // console.log(response.data.data[0].url)
          // 设置音乐播放地址
          that.musicUrl = response.data.data[0].url;
        }, function (error) {
          console.log(error);
        })
        // 获取封面信息 (接口500)
        // axios.get("https://autumnfish.cn/song/detail?id=" + id)
        // .then(function (response) {
        //   console.log(response.data)
        // }, function (error) {
        //   console.log(error);
        // })

        // 获取评论信息 (接口 400)
        // axios.get("https://autumnfish.cn/comment/hot?type=0?id=" + id)
        // .then(function (response) {
        //   console.log(response.data)
        // }, function (error) {
        //   console.log(error);
        // })
    }

  }
});
