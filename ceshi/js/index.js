
var wheel = document.querySelectorAll(".wheel")[0];
var mySwiper = new Swiper('.swiper-container', {
	direction : 'vertical',      //滑动方向为垂直方向
	followFinger : false,    //如设置为false，拖动slide时它不会动，当你释放时slide才会切换。
	shortSwipes : true,		//设置为true时，进行快速短距离的拖动触发Swiper。
	speed:500,   //滑动开始到滑动结束所用的时间
	
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    	swiperAnimateCache(swiper); //隐藏动画元素 
   		swiperAnimate(swiper); //初始化完成开始动画
   		wheel.style.transform = "rotateZ(360deg)";
   		
 	},
	onSlideChangeEnd:function(swiper){ 	//每次滑动结束后的时候触发 swiper.activeIndex 索引值		
		 swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画	 
	}
})
