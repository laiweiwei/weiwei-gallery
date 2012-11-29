= WeiWeiGallery =
----

    WeiWeiGallery 是一个简单的图片幻灯片，可以用来做图片轮转，广告等。基于JQuery。

----
[查看高清大图](http://dl.iteye.com/upload/picture/pic/120986/2a52c22d-8652-343d-82a2-d7791a55ea91.png)    
![Screenshot](http://dl.iteye.com/upload/picture/pic/120986/2a52c22d-8652-343d-82a2-d7791a55ea91.png)

----
= sample 代码 =
----    
    <script src="js/jquery-1.6.4.min.js" type="text/javascript"></script> 
    <script src="js/weiwei-gallery.js" type="text/javascript"></script> 
    <style
    	#gallery_box{width:500px; height:300px; font-family: Arial;}	
    </style>
    <div id="gallery_box"></div>
    <script>
    $(document).ready(function(){
    	var json = {
    		time:5000,//图片幻灯自动切换时间
    		title: {
    			height:"30px", // 标题外框高度
    			fontSize:"16px", // 标题文字大小
    			fontWeight:"bold", // 标题文字粗细
    			opacity:0.5, // 标题背景透明度
    			color:"white", // 标题文字颜色
    			align:"left" // 标题文字位置
    		},
    		animate : {
    			type:"slideDown",// 动画效果 show,slideDown,fadeIn
    			speed:"normal"// 动画速度 fast,slow,200,300,400...
    		},
    		btn:{
    			// background: ["url(images/circle_grey_8.png)", "url(images/circle_red_8.png)"], // 按钮背景图
    			background: ["white", "deeppink"], // 按钮背景颜色
    			width: "8px", // 按钮长度
    			height: "8px" // 按钮高度
    		},
    		btn_box:{
    			height: "12px" // 按钮外框高度
    		},
    		imgs:[
    			{
    				link:"http://www.baidu.com",//跳转链接
    				img:"images/47bc636162_w470.jpg",//图片
    				title:"test 1"//标题
    			},
    			{
    				link:"http://www.baidu.com",
    				img:"images/923b67a189_w470.jpg",
    				title:"test 2"
    			}
    		]
    	};
    	
    	createWeiWeiGallery("gallery_box", json);
    });
    </script>
    

