const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2021-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://blog.tangly1024.com' },
    { title: '访问文档中心获取更多帮助', url: 'https://docs.tangly1024.com' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
     高_英雄_钛_1 : '分享实用工具资源' ,
     高_英雄_钛_2 : '与副业赚钱方法' ,
     高_英雄_钛_3 : "与我们同在" ,
     高_英雄_钛_4 : '拾光分享' ,
     高_英雄_钛_5 : '最新实用资源分享' ,
     嗨 : 'https://qshare.cc' ,
  // 英雄区遮罩文字
    标题 : '随便逛逛' ,

  // 英雄区显示三个置顶分类
    Heo_英雄_类别_1 : {   标题 : '必看精选' , 乌拉圭网址 : '/tag/必看精选'   } ,
    Heo_英雄_类别_2 : {   标题 : '热门文章' , 乌拉圭网址 : '/tag/热门文章'   } ,Heo_英雄_类别_2 : {   标题 : '热门文章' , 乌拉圭网址 : '/tag/热门文章'   } ,
    Heo_英雄_类别_3 : {   标题 : '实用教程' , 乌拉圭网址 : '/tag/实用教程'   } ,Heo_英雄_类别_3 : {   标题 : '实用教程' , 乌拉圭网址 : '/tag/实用教程'   } ,

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章// 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
    HEO_HERO_RECOMMEND_POST_TAG : '推荐' ,HEO_HERO_RECOMMEND_POST_TAG : '推荐' ,
    HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME : 假的 , // 推荐文章排序，为`true`时将强制按最后修改时间倒序HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME : 假的 , // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片//   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换// 右侧个人资料卡牌欢迎语，点击可自动切换
    HEO_INFOCARD_GREETINGS : [HEO_INFOCARD_GREETINGS : [
      '你好！我是拾光君' ,'你好！我是拾光君' ,
      "旧分象热解" ,"旧分象热解" ,
     新一代的"独产" ,
     行者 ,
      "牛仔裤" ,"牛仔裤" ,
     "青少年青少年 ,"青少年青少年 ,
    '✨ 一起遇见更好的自己''✨ 一起遇见更好的自己'
    ] ,] ,

  // 个人资料底部按钮// 个人资料底部按钮
    Heo_Info_Card_url1 : '/about' ,Heo_Info_Card_url1 : '/about' ,
    Heo_info_卡德_伊康1 : 'fas fa-user' ,Heo_info_卡德_伊康1 : 'fas fa-user' ,
   HO_IN_卡尔德_url2 : 'https://github.com/tangly1024' ,HO_IN_卡尔德_url2 : 'https://github.com/tangly1024' ,
   HO_IN_卡德_ICON2 : "福法-吉特布" ,HO_IN_卡德_ICON2 : "福法-吉特布" ,
   Heo_Info_Card_url3 : 'https://www.qshare.cc' ,Heo_Info_Card_url3 : 'https://www.qshare.cc' ,
   HO_Info_CAD_31-t3 : '了解更多' ,HO_Info_CAD_31-t3 : '了解更多' ,

  // 用户技能图标// 用户技能图标
    海 : [ 海 : [海 : [ 海 : [
     { {{ {
        头衔_1 : 'AfterEffect' , 头衔_1 : 'AfterEffect' ,头衔_1 : 'AfterEffect' , 头衔_1 : 'AfterEffect' ,
        IMG_1 : '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp' ,IMG_1 : '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp' , IMG_1 : '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp' ,
           色度_1 : '#989bf8' , 色度_1 : '#989bf8' , 色度_1 : '#989bf8' , 色度_1 : '#989bf8' ,色度_1 : '#989bf8' , 色度_1 : '#989bf8' , 色度_1 : '#989bf8' , 色度_1 : '#989bf8' ,
           头衔_2 : 'Sketch' ,头衔_2 : 'Sketch' , 头衔_2 : 'Sketch' ,头衔_2 : 'Sketch' ,头衔_2 : 'Sketch' , 头衔_2 : 'Sketch' ,
       IMG_2 : '/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp' , IMG_2 : '/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp' , IMG_2 : '/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp' , IMG_2 : '/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp' ,IMG_2 : '/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp' , IMG_2 : '/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp' , IMG_2 : '/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp' , IMG_2 : '/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp' ,
       色彩_2 : '#ffffff' 色彩_2: '#ffffff' 色彩_2: '#ffffff' 色彩_2: '#ffffff'色彩_2 : '#ffffff' 色彩_2: '#ffffff' 色彩_2: '#ffffff' 色彩_2: '#ffffff'
     } , } , } , } ,} , } , } , } ,
     { { { {{ { { {
      title_1: 'Docker',title_1: 'Docker',title_1: 'Docker',title_1: 'Docker',title_1: 'Docker',title_1: 'Docker',title_1: 'Docker',title_1: 'Docker',
       IMG_1 : '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp' , IMG_1 : '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp' , IMG_1 : '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp' , IMG_1 : '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp' ,IMG_1 : '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp' , IMG_1 : '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp' , IMG_1 : '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp' , IMG_1 : '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp' ,
         色度_1 : '#57b6e6' , 色度_1 : '#57b6e6' , 色度_1 : '#57b6e6' , 色度_1 : '#57b6e6' ,色度_1 : '#57b6e6' , 色度_1 : '#57b6e6' , 色度_1 : '#57b6e6' , 色度_1 : '#57b6e6' ,
         头衔_2 : 'Photoshop' , 头衔_2 : 'Photoshop' , 头衔_2 : 'Photoshop' , 头衔_2 : 'Photoshop' ,头衔_2 : 'Photoshop' , 头衔_2 : 'Photoshop' , 头衔_2 : 'Photoshop' , 头衔_2 : 'Photoshop' ,
          IMG_2 : '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp' , IMG_2 : '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp' , IMG_2 : '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp' , IMG_2 : '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp' , IMG_2 : '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp' , IMG_2 : '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp' , IMG_2 :'/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp' , IMG_2 : '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp' ,IMG_2 : '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp' , IMG_2 : '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp' , IMG_2 : '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp' , IMG_2 : '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp' , IMG_2 : '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp' , IMG_2 : '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp' , IMG_2 :'/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp' ,IMG_2 : '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp' ,
         色彩_2 : '#4082c3' 色彩_2 : '#4082c3' 色彩_2 : '#4082c3' 色彩_2 : '#4082c3'色彩_2 : '#4082c3' 色彩_2 : '#4082c3' 色彩_2 : '#4082c3' 色彩_2 : '#4082c3'
       } , } , } , } ,} , } , } , } ,
      {  { {  {{  { {  {
        头衔_1 :头衔_1 :头衔_1 : 
         IMG_1:
        色度_1 :
       头衔_2 :
       IMG_2 :  , IMG_2 : '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp' ,
       色彩_2 : '#ffffff'色彩_2 : '#ffffff'色彩_2 : '#ffffff'色彩_2 : '#ffffff'色彩_2 : '#ffffff'色彩_2 : '#ffffff'色彩_2 : '#ffffff'色彩_2 : '#ffffff'
     } ,} ,} ,} ,} ,} ,} ,} ,
    {{{{{{{{
       头衔_1 : 'Swift' ,头衔_1 : 'Swift' ,头衔_1 : 'Swift' ,头衔_1 : 'Swift' ,头衔_1 : 'Swift' ,头衔_1 : 'Swift' ,头衔_1 : 'Swift' ,头衔_1 : 'Swift' ,
         , IMG_1 : '/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp' , IMG_1 : '/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp'IMG_1 : '/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp' , IMG_1 : '/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp' ,IMG_1 : '/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp' , IMG_1 : '/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp' ,
         色度_1 : '#eb6840' , 色度_1 : '#eb6840' ,色度_1 : '#eb6840' , 色度_1 : '#eb6840' ,色度_1 : '#eb6840' , 色度_1 : '#eb6840' ,色度_1 : '#eb6840' , 色度_1 : '#eb6840' ,'#eb6840' , 色度_1 : '#eb6840' ,色度_1 : '#eb6840' , 色度_1 : '#eb6840' ,色度_1 : '#eb6840' , 色度_1 : '#eb6840' ,色度_1 : '#eb6840' , 色度_1 : '#eb6840' ,
         头衔_2 : 'Principle' , 头衔_2 : 'Principle' ,头衔_2 : 'Principle' , 头衔_2 : 'Principle' ,
         IMG_2 : '/images/heo/2023f76570d2770c8e84801f7e107cd911b5073202.webp' , IMG_2 : '/images/heo/2023f76570d2770c8e84801f7e107cd911b5073202.webp' ,IMG_2 : '/images/heo/2023f76570d2770c8e84801f7e107cd911b5073202.webp' , IMG_2 : '/images/heo/2023f76570d2770c8e84801f7e107cd911b5073202.webp' ,
        色彩_2 : '#8f55ba' 色彩_2 : '# 8 f55ba '色彩_2 : '#8f55ba' 色彩_2 : '# 8 f55ba ''#8f55ba' 色彩_2 : '# 8 f55ba '色彩_2 : '#8f55ba' 色彩_2 : '# 8 f55ba '
      } , } ,} , } ,} , } ,} , } ,
     { {{ {{ {{ {
        头衔_1 : ' 插图作者 ' , 头衔_1 : 'illustrator' ,头衔_1 : ' 插图作者 ' , 头衔_1 : 'illustrator' ,头衔_1 : 头衔_1 : 头衔_1 : 
       IMG_1 : IMG_1 : IMG_1 : IMG_1 : IMG_1 : '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp' , IMG_1 : '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp' ,IMG_1 : '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp' , IMG_1 : '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp' ,
       色度_1 : '#f29e39' ,色度_1 : '#f29e39' ,色度_1 : '#f29e39' ,色度_1 : '#f29e39' ,
       头衔_2 : 'CSS3' , 头衔_2 :CSS3 ,头衔_2 : 'CSS3' , 头衔_2 :CSS3 ,头衔_2 : 'CSS3头衔_2 :CSS3 ,头衔_2 : 'CSS3头衔_2 :CSS3 ,
       IMG_2 : 'heo/20237c548846044a20dad68a13c0f0e1502f074602.webp' , IMG_2 : '/im/heo/20237/heo/20237IMG_2 : '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp'heo/20237IMG_2 : '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp' , IMG_2 : '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp'heo/20237c548846044a20dad68a13c0f0e1502f074602.webp' ,IMG_2 : '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp' , IMG_2 : '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp'heo/20237c548846044a20dad68a13c0f0e1502f074602.webp' ,
       色彩_2 : '#2c51db'22c51db'2'#2c51db'22c51db'2
     } , } ,} , } ,} , } ,} , } ,
    {{{{{{{{
       头衔_1 : 'JS' , 头衔_1 : 'JS' ,头衔_1 : 'JS' , 头衔_1 : 'JS' ,头衔_1 : 'JS' , 头衔_1 : 'JS' ,头衔_1 : 'JS' , 头衔_1 : 'JS' ,头衔_1 : 'JS' , 头衔_1 : 'JS' ,头衔_1 : 'JS' , 头衔_1 : 'JS' ,头衔_1 : 'JS' , 头衔_1 : 'JS' ,头衔_1 : 'JS' , 头衔_1 : 'JS' ,
        IMG_1 : '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp' , IMG_1 : ' /images/ 兴奋的 /2023786e7fc488f453d5fb2be760c96185c0075502.webp' ,ages/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp' , IMG_1 : ' /images/ 兴奋的 /2023786e7fc488f453d5fb2be760c96185c0075502.webp' ,IMG_1 : '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp' , IMG_1 : ' /images/ 兴奋的 /2023786e7fc488f453d5fb2be760c96185c0075502.webp' ,ages/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp' , IMG_1 : ' /images/IMG_1 : '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp' , IMG_1 : ' /images/ 兴奋的 /2023786e7fc488f453d5fb2be760c96185c0075502.webp' ,ages/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp' , IMG_1 : ' /images/ 兴奋的 /2023786e7fc488f453d5fb2be760c96185c0075502.webp' ,IMG_1 : '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp' , IMG_1 : ' /images/ 兴奋的 /2023786e7fc488f453d5fb2be760c96185c0075502.webp' ,ages/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp' , IMG_1 : ' /images/ 兴奋的 /2023786e7fc488f453d5fb2be760c96185c0075502.webp' ,
       色度_1 : '#f7cb4f' ,色度_1 : '#f7cb4f' ,色度_1 ,色度_1 :色度_1 ,
         头衔_2 : ' Html , 头衔_2 : , 头衔_2 : , 头衔_2 : ,头衔_2 : , 头衔_2 : , 头衔_2 : , 头衔_2 : ,头衔_2 : , 头衔_2 : , 头衔_2 : , 头衔_2 : ,头衔_2 : , 头衔_2 : , 头衔_2 : , 头衔_2 : ,头衔_2 : ' Html头衔_2 : ' Html ' , 头衔_2Html ' ,头衔_2Html ' , 头衔_2Html ' , 头衔_2Html ' , 头衔_2Html ' ,头衔_2Html ' , 头衔_2Html ' , 头衔_2Html ' , 头衔_2Html ' ,头衔_2Html ' , 头衔_2Html ' , 头衔_2Html ' , 头衔_2Html ' ,' Html '头衔_2 : ' Html ' , 头衔_2 : ' Html ' , 头衔_2 : ' Html ' ,头衔_2 : ' Html ' , 头衔_2 : ' Html ' , 头衔_2 : ' Html ' , 头衔_2 : ' Html ' ,头衔_2 : ' Html ' , 头衔_2 : ' Html ' , 头衔_2 : ' Html ' , 头衔_2 : ' Html ' ,头衔_2 : ' Html ' , 头衔_2 : ' Html ' , 头衔_2 : ' Html ' , 头衔_2 : ' Html ' ,
         IMG_2 : '  ' /images/  兴奋的  /202372b4d760fd8a497d442140c295655426070302.webp' ' /images/  兴奋的  /202372b4d760fd8a497d442140c295655426070302.webp'兴奋的  /202372b4d760fd8a497d442140c295655426070302.webp' ,IMG_2 : '/im 年龄 /heo/  202372IMG_2 : ' /images/兴奋的  /202372b4d760fd8a497d442140c295655426070302.webp' ,IMG_2 : '/im 年龄 /heo/  兴奋的           202372IMG_2 : ' /images/兴奋的  /202372b4d760fd8a497d442140c295655426070302.webp' ,IMG_2 : '/im 年龄 /heo/  202372IMG_2 : '   兴奋的  /202372b4d76' /images/  兴奋的  /202372b4d760fd8a497d442140c295655426070302.webp' ,IMG_2 : '/im 年龄 /heo/  202372 b4d760fd8a497d442140c295655426070302.webp' , IMG_2 : ' /images/  兴奋的  /202372b4d760fd8a497d442140c295655426070302.webp' ,IMG_2 : '/im 年龄 /heo/  兴奋的           202372 b4d760fd8a497d442140c295655426070302.webp' ,IMG_2 : ' /images/  兴奋的  /202372b4d760fd8a497d442140c295655426070302.webp' ,IMG_2 : '/im 年龄 /heo/  202372 b4d760fd8a497d442140c295655426070302.webp' , IMG_2 : ' /images/  兴奋的  /202372b4d760fd8a497d442140c295655426070302.webp' ,IMG_2 : '/im 年龄 /heo/  兴奋的           202372 b4d760fd8a497d442140c295655426070302.webp' ,
         色彩_2 : '#e9572b' 色彩_2 : '#e9572b' 色彩_2 : '#e9572b' 色彩_2 : '#e9572b''#e9572b' 色彩_2 : '#e9572b' 色彩_2 : '#e9572b' 色彩_2 : '#e9572b'
        } , } , } , } , } , } , } , } ,} , } , } , } , } , } , } , } ,} , } , } , } , } , } , } , } ,} , } , } , } , } , } , } , } ,
       {  {   {  {   {    {{  {   {  {   {    {{  {   {  {   {    {{  {   {  {   {    {
          头衔_1 : ' 垃圾 ' , 头衔_1 : 'Git' , 头衔_1 : ' 垃圾 ' , 头衔_1 : 'Git' ,垃圾 ' , 头衔_1 : 'Git' , 头衔_1 : ' 垃圾 ' , 头衔_1 : 'Git' , 头衔_1 : ' 垃圾 ' , 头衔_1 : 'Git' , 头衔_1 : ' 垃圾 ' , 头衔_1 : 'Git' ,
         IMG_1 : '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp' , IMG_1 : ' /images/ 兴奋的 /2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp' , IMG_1 : '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp' , IMG_1 : ' /images/ 兴奋的 /2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp' ,
        色度_1 : '#df5b40' , 色度_1 : '#df5b40' , 色度_1 : '#df5b40' , 色度_1 : '#df5b40' ,
         头衔_2 : ' 莱茵河 ' , 头衔_2 : ' 莱茵河 ' ,
          IMG_2 : ' /images/   兴奋的   /20231ca53fa0b09a3ff1df89acd7515e9516173302.webp' ,IMG_2 : '/im 年龄 /heo/   20231 ca53fa0b09a3ff1df89acd7515e9516173302.webp' ,
          色彩_2 : '# 1   f1f1f '色彩_2 : '# 1 f1f1f'
       }   }
      ] ,] ,

      社会卡 : 真实的 , // 是否显示右侧，点击加入社群按钮社会卡 : 真实的 , // 是否显示右侧，点击加入社群按钮
      HEO_SOCIAL_CARD_TITLE_1 : '交流频道' , HEO_SOCIAL_CARD_TITLE_1 : '交流频道' ,
      HEO_SOCIAL_CARD_TITLE_2 : ' 加入我们的社群讨论分享 ' , HEO_SOCIAL_CARD_TITLE_2 : ' 加入我们的社群讨论分享 ' ,
      HEO_SOCIAL_CARD_TITLE_3 : ' 点击加入社群 ' ,
     社会主义者 : ' Https : //qshare.cc/article/how-to-question' ,

  // 底部统计面板文案// 底部统计面板文案
   高_后_计数_标题 : '文章数:' ,
     高_位置_时间_标题 : ' 建站天数 :' ,
     标题 : 标题 : : '访问量:' ,
     HEO_SITE_VISITOR_TITLE : ' 访客数 :' ,

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
     Heo_菜单_索引 : 真实的 , // 显示首页
     类别 : 真实的 , // 显示分类
    标签 : 真实的 , // 显示标签
    HOO_月_月_ : 真实的 , // 显示归档
   乔_梅努_搜寻 : 真实的 , // 显示搜索

   后页 : 真实的 , // 列表显示文章封面
   HEO_POST_LIST_COVER_HOVER_ENLARGE : 假的 , // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
   HEO_ARTICLE_COPYRIGHT : 真实的 , // 显示文章版权声明
   HEO_ARTICLE_RECOMMEND : 真实的 , // 文章关联推荐

   HEO_WIDGET_LATEST_POSTS : 真实的 , // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
