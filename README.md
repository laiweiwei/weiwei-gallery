
<script src="js/jquery-1.6.4.min.js" type="text/javascript"></script> 
<script src="js/weiwei-gallery.js" type="text/javascript"></script> 

<style>
	#gallery_box{width:500px; height:300px; font-family: Arial;}	
</style>

<div id="gallery_box"></div>

<script>
	$(document).ready(function(){
		var json = {
			time:5000,//图片幻灯自动切换时间
			title: {
				height:"30px",
				fontSize:"16px",
				fontWeight:"bold",
				opacity:0.5,
				color:"white",
				align:"left"
			},
			animate : {
				type:"slideDown",// 动画效果 show,slideDown,fadeIn
				speed:"normal"// 动画速度 fast,slow,200,300,400...
			},
			btn:{
				background: ["url(images/circle_grey_8.png)", "url(images/circle_red_8.png)"], // button background
				// background: ["white", "deeppink"], // button background
				width: "8px",
				height: "8px"
			},
			btn_box:{
				height: "12px"
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