/**
 * <h1>WeiWei Gallery</h1>
 * author: l.weiwei@163.com
 * date: 2012-11-28 14:49
 * sample:
 * <pre>
 * <div id="gallery_box">
 *     <li><a href="http://www.baidu.com" title="title1"><img src="images/47bc636162_w470.jpg" /></a></li>
 *	   <li><a href="http://www.baidu.com" title="title2"><img src="images/923b67a189_w470.jpg" /></a></li>
 * </div>
 * $(document).ready(function(){
		var json = {
			time:5000,
			title: {
				height:"30px",
				fontSize:"16px",
				fontWeight:"bold",
				opacity:0.5,
				color: "white",
				align:"left",
				//hidden:true
			},
			animate: {
				type:"slideDown",
				speed:"normal"
			},
			btn:{
				//background: ["url(images/circle_grey_8.png)", "url(images/circle_red_8.png)"], // button background
				background: ["white", "deeppink"], // button background
				width: "8px",
				height: "8px"
			},
			btn_box:{
				height: "12px",
				//hidden: true
			},
			// imgs:[
				// {
					// link:"http://www.baidu.com",
					// img:"images/47bc636162_w470.jpg",
					// title:"test 1"
				// },
				// {
					// link:"http://www.baidu.com",
					// img:"images/923b67a189_w470.jpg",
					// title:"test 2"
				// }
			// ]
		};
		
		createWeiWeiGallery("gallery_box", json);
	});
 * </pre>
 *
 */

function createCSS(json){
	var title = json['title'];
	if (!title || title == undefined)
		title = {height:"30px",
			fontSize:"16px",
			fontWeight:"bold",
			opacity:0.5,
			color:"white",
			align:"left",
			hidden:false
		};
	var __title_bg_display = "";
	if (title['hidden'])
		__title_bg_display = "display:none;";
		
	var btn = json['btn'];
	if (!btn || btn == undefined)
		btn = {background: ["white", "deeppink"], width:"8px", height:"8px"}
	
	var btn_box =  json['btn_box'];
	if (!btn_box || btn_box == undefined)
		btn_box = {height: "16px",hidden:false}
	var __btn_box_display = "";
	if (btn_box['hidden'])
		__btn_box_display = "display:none;";
		
	var __img = ".__gallery_img__{display:none;position:absolute; left:0; top:0; z-index:1080; overflow:hidden;}";
		
	var __title_bg = ".__gallery_title_bg__{position:absolute; left:0; width:100%; height:"+title['height']+"; z-index:1081; background:black; "+__title_bg_display+"}";
	var __title = ".__gallery_title__{"+__title_bg_display+" position:absolute; left:0; width:100%; text-align:"+title['align']+"; height:"+title['height']+"; line-height:"+title['height']+"; color:"+title['color']+"; font-size:"+title['fontSize']+"; font-weight:"+title['fontWeight']+"; text-indent:10px; z-index:1082;}";
	var __btn_box = ".__gallery_btn_box__{"+__btn_box_display+" position:absolute; text-align:right; left:0; z-index:1083; height:auto; padding:0; margin:0; height:"+btn_box['height']+";}";
	var __btn = ".__gallery_btn__{"+__btn_box_display+" cursor:pointer; display:inline-block; width:"+btn['width']+"; height:"+btn['height']+"; margin:0 2px; text-align: center; background:"+btn['background'][0]+"}";
	var __btn_hover = ".__gallery_btn__:hover{background:"+btn['background'][1]+";}";
	var __btn_selected = ".__gallery_btn_selected__{background:"+btn['background'][1]+";}";

	return "<style>" + __img + __title_bg + __title + __btn_box + __btn + __btn_hover + __btn_selected + "</style>" ;
}

function createHtml(gallery_box, json_datas){
	var $gallery_box = $("#"+gallery_box);
	var width = $gallery_box.css("width");
	var height = $gallery_box.css("height");
	var gallery_img;
	var gallery_btn;

	$.each(json_datas, function(index, json_data){
		var id = '__gallery_img_id_'+index+'__';

		var link = json_data['link'];
		var img = json_data['img'];
		var title = json_data['title'];
		
		var _img = "<a href='"+link+"' title='"+title+"' target='_blank'><div class='__gallery_img__' id='"+id+"' style='width:"+width+"; height:"+height+"'><img src='"+img+"' width='"+width+"' /><div class='__gallery_title_bg__'></div><div class='__gallery_title__' >"+title+"</div></div></a>";
		if (gallery_img)
			gallery_img += _img;
		else
			gallery_img = _img;

		var _btn = "<span class='__gallery_btn__' data-bind='#"+id+"'></span>";
		if (gallery_btn)
			gallery_btn += _btn;
		else
			gallery_btn = _btn;
	});
	
	return gallery_img + "<div class='__gallery_btn_box__'>"+gallery_btn+"</div>";
}

function fixCSS(divId, json){
	
	var __pos = $("#"+divId).css('position');
	if (!__pos || __pos == undefined || __pos == 'static')
		$("#"+divId).css('position', "relative");
	
	var title = json['title'];
	if (!title || title == undefined)
		title = {height:"30px",
			fontSize:"16px",
			fontWeight:"bold",
			opacity:0.5,
			color:"black"
		};
	
	var $img = $(".__gallery_img__");
	$img.first().css("display", "block");

	var height = $img.first().css("height").replace("px", "");
	var width = $img.first().css("width").replace("px", "");
	
	var $title_bg = $(".__gallery_title_bg__");
	var $title = $(".__gallery_title__");
	$title_bg.css("top", (height - $title_bg.css("height").replace("px", ""))).css("opacity", title['opacity']);
	$title.css("top", (height - $title.css("height").replace("px", "")));
	
	var $btn_box = $(".__gallery_btn_box__");
	$btn_box.css("top", (height - $btn_box.css("height").replace("px", ""))).css("width", width-3);
	var $btn = $(".__gallery_btn__");
	$btn.first().attr("class", "__gallery_btn__ __gallery_btn_selected__");

}

function auto_ad_img_route(time){
	return window.setInterval(function(){
		var btn = $(".__gallery_btn_selected__").next();
		if ($(".__gallery_btn_selected__").attr("data-bind") == $(".__gallery_btn__").last().attr("data-bind")){
			btn = $(".__gallery_btn__").first();
		}

		btn.click();
	}, time);
}

function createWeiWeiGallery(divId, json){
	var time = json['time'];
	if (!time || time == undefined)
		time =5*1000;
	
	var imgs = json['imgs'];
	if (!imgs || imgs == undefined)
		imgs = [];
	
	var _lis = $("#"+divId).children();
	if (_lis){
		$.each(_lis, function(index, _li){
			if (_li){
				var $_a = $(_li).find("a");
				var title = "";
				var link = "";
				if ($_a){
					title = $_a.attr("title");
					if (!title || title == undefined)
						title = "";
					link = $_a.attr("href");
					if (!link || link == undefined)
						link = "";
				
					var $_img = $_a.find("img");
					var img = "";
					if ($_img){
						img = $_img.attr("src");
						if (!img || img == undefined)
							img = "";
						
						imgs.push({title:title, link:link, img:img});
					}
				}
			}
		});
	}
	
	var animate = json['animate'];
	if (!animate || animate == undefined)
		animate = {type:"slideDown", speed:"normal"};
	
	// create the CSS
	var css = createCSS(json);
	// create HTML
	var html = createHtml(divId, imgs);
	$("#"+divId).html(css + html);

	// fix the CSS
	fixCSS(divId, json);

	// bind the button click event
	var interval ;
	$(".__gallery_btn__").click(function(){
		var cls = $(this).attr("class");
		if ("__gallery_btn__ __gallery_btn_selected__" === cls)
			return;

		// init interval function
		window.clearInterval(interval);
		interval = auto_ad_img_route(time);

		var selectedId = $(".__gallery_btn_selected__").attr("data-bind");
		
		$(".__gallery_btn__").attr("class", "__gallery_btn__");
		$(this).attr("class", "__gallery_btn__ __gallery_btn_selected__");
		var imgId = $(this).attr("data-bind");
		$(".__gallery_img__[id!="+selectedId.replace("#", "")+"]").css("display", "none");
		
		var currImg = $(imgId);// image which is clicked
		var selectImg = $(selectedId);// selected image
		
		currImg.css("z-index", 1080)
		selectImg.css("z-index", 1079)
		
		var type = animate['type'];
		if (!type || type == undefined)
			type = "slideDown";
		
		var speed = animate['speed'];
		if (!speed || speed == undefined)
			speed = "normal";
		
		eval("currImg."+type+"('"+speed+"',function(){selectImg.css('display', 'none')})");
	});

	interval = auto_ad_img_route(time);
}