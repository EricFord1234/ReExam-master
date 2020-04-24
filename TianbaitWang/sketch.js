(function($){
	
	$.fn.extend({
		sketch: function(opt) {
			var defaults = {
		
				//svg图案的路径
				d: '',
				
				//线条颜色
				stroke: '#000',
				
				//线条宽度
				strokeWidth: '1px',
				
				//是否同时改变透明度
				opacity: false,
				
				//动画持续时间
				time: 4500
				
			}
			
			var options = $.extend(defaults , opt);
			if(options.opacity == false) {
				options.opacity = 1;
			}else if(options.opacity == true) {
				options.opacity = .3;
			}
			var SVG = "<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg' version='1.1'><path class='sketch_path' d='"+options.d+"'/></svg>";
			
			return this.each(function() {
				$(this).append(SVG);
				$(this).find(".sketch_path").css({
					"fill": "none",
					"stroke": options.stroke,
					"stroke-width": options.strokeWidth,
					"stroke-dasharray": "3000",
					"stroke-dashoffset": "3000",
					"opacity": options.opacity
				}).animate({
					"stroke-dashoffset": "0",
					"opacity": "1"
				},options.time);
			});
		}
	});
	
})(jQuery);