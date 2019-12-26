// lựa chọn kiểu áo theo ý thích
$(document).ready(function() {
	var get_src_first_img = $('ul.list-thumb li:first-child img').attr('src');
	$(".cover-images img").attr('src',get_src_first_img);
	// thêm active vào thằng đầu tiên
	$("ul.list-thumb li").removeClass('active-hover');
	$("ul.list-thumb li:first-child").addClass('active-hover');
	$("ul.list-thumb li")
	$("ul.list-thumb li").hover(function() {
		// hover in
		var get_src_img = $(this).children('img').attr('src');
		$(".cover-images img").attr('src',get_src_img);
		$("ul.list-thumb li").removeClass('active-hover');
		$(this).addClass('active-hover');
		$(this).attr('title','click vào để xem rõ hơn');
	},function() {
		// hover out
		$(this).removeAttr('title');
	});
	$(".cover-images img").hover(function(){
		// hover in
		$('.cover-images img').attr('title','click vào để xem rõ hơn');
	},function(){
		// hover out
		$('.cover-images img').removeAttr('title','click vào để xem rõ hơn');
	});
})
// lựa chọn màu
$(document).ready(function() {
	// lựa chọn màu đầu tiên
	var color_first_name = $('ul.list-color li:first-child').text();	
	$('.your-color').text(color_first_name);
	$('ul.list-color li').click(function() {
		$("ul.list-thumb li").removeClass('active-hover');
		$("ul.list-thumb li:first-child").addClass('active-hover');
		// hiện lên màu vừa lựa chọn
		var color_name = $(this).text();
		$('.your-color').text(color_name);
		// thêm active
		$('ul.list-color li').removeClass('active-hover');
		$(this).addClass('active-hover');
	});		
	// lấy những bức ảnh của từng màu được click
	var get_src_first_img;
	$("ul.list-color li:first-child").click(function() {
		$("ul.list-thumb li:first-child img").attr('src','images/product-1/do/1.jpg');
		$("ul.list-thumb li:nth-child(2) img").attr('src','images/product-1/do/2.jpg');
		$("ul.list-thumb li:nth-child(3) img").attr('src','images/product-1/do/3.jpg');
		$("ul.list-thumb li:last-child img").attr('src','images/product-1/do/4.jpg');
		get_src_first_img = $("ul.list-thumb li:first-child img").attr('src');
		$(".cover-images img").attr('src',get_src_first_img);
	});
	$("ul.list-color li:nth-child(2)").click(function() {
		$("ul.list-thumb li:first-child img").attr('src','images/product-1/hong/1.jpg');
		$("ul.list-thumb li:nth-child(2) img").attr('src','images/product-1/hong/2.jpg');
		$("ul.list-thumb li:nth-child(3) img").attr('src','images/product-1/hong/3.jpg');
		$("ul.list-thumb li:last-child img").attr('src','images/product-1/hong/4.jpg');
		get_src_first_img = $("ul.list-thumb li:first-child img").attr('src');
		$(".cover-images img").attr('src',get_src_first_img);
	});
	$("ul.list-color li:nth-child(3)").click(function() {
		$("ul.list-thumb li:first-child img").attr('src','images/product-1/vang/1.jpg');
		$("ul.list-thumb li:nth-child(2) img").attr('src','images/product-1/vang/2.jpg');
		$("ul.list-thumb li:nth-child(3) img").attr('src','images/product-1/vang/3.jpg');
		$("ul.list-thumb li:last-child img").attr('src','images/product-1/vang/4.jpg');
		get_src_first_img = $("ul.list-thumb li:first-child img").attr('src');
		$(".cover-images img").attr('src',get_src_first_img);
	});
	$("ul.list-color li:last-child").click(function() {
		$("ul.list-thumb li:first-child img").attr('src','images/product-1/xanh/1.jpg');
		$("ul.list-thumb li:nth-child(2) img").attr('src','images/product-1/xanh/2.jpg');
		$("ul.list-thumb li:nth-child(3) img").attr('src','images/product-1/xanh/3.jpg');
		$("ul.list-thumb li:last-child img").attr('src','images/product-1/xanh/4.jpg');
		get_src_first_img = $("ul.list-thumb li:first-child img").attr('src');
		$(".cover-images img").attr('src',get_src_first_img);
	});
});
// click để xem ảnh rõ hơn
$(document).ready(function() {
	// click để mở cửa sổ,
	var count = 0;
	$("ul.list-thumb, .cover-images").click(function() {
		// hiện cửa sổ ra
		$('.product-detail').stop().fadeIn(1000);
		// tính số lần xem chi tiết
		count ++;
		$('.detailed-views .result').text(count);
	});

	// click đóng cửa sổ
	$(".close-hide .icon-close").click(function(){
		// đóng cửa sổ lại
		$('.product-detail').stop().fadeOut(1000);
	})
});





// chuyển slide trong phần show hình ảnh
$(document).ready(function() {
	// chuyển tới
    $(".btn-next-product").click(function() {
    	var slide_after = $(".active-product").next();
    	if(slide_after.length != 0) {
			$(".active-product").addClass('lost-on-left').one('webkitAnimationEnd',function() {
				$('.lost-on-left').removeClass('lost-on-left').removeClass('active-product');
			});
			slide_after.addClass('active-product').addClass('go-to-left').one('webkitAnimationEnd',function() {
				$('.go-to-left').removeClass('go-to-left');
			});
			$("ul.list-thumb-out li").removeClass('active-li');
		}
		else {
			$(".active-product").addClass('lost-on-left').one('webkitAnimationEnd',function() {
				$('.lost-on-left').removeClass('lost-on-left').removeClass('active-product');
			});
			$(".cover-images_.out:first-child").addClass('active-product').addClass('go-to-left').one('webkitAnimationEnd',function() {
				$('.go-to-left').removeClass('go-to-left');
			});
			$("ul.list-thumb-out li").removeClass('active-li');
		}
    });
    // chuyển lui   
    $(".btn-prev-product").click(function() {
    	var slide_after = $(".active-product").prev();
    	if(slide_after.length != 0) {
			$(".active-product").addClass('lost-on-right').one('webkitAnimationEnd',function() {
				$('.lost-on-right').removeClass('lost-on-right').removeClass('active-product');
			});
			slide_after.addClass('active-product').addClass('go-to-right').one('webkitAnimationEnd',function() {
				$('.go-to-right').removeClass('go-to-right');
			});
		}
		else {
			$(".active-product").addClass('lost-on-right').one('webkitAnimationEnd',function() {
				$('.lost-on-right').removeClass('lost-on-right').removeClass('active-product');
			});
			$(".cover-images_.out:last-child").addClass('active-product').addClass('go-to-right').one('webkitAnimationEnd',function() {
				$('.go-to-right').removeClass('go-to-right');
			});
		}
    });
});


// xử lí khi click vào li
$(document).ready(function() {
	$("ul.list-thumb-out li").click(function() {
		var position_current = $(".active-li").index()+1;
		var position_click = $(this).index()+1;
		$("ul.list-thumb-out li").removeClass('active-li');
		$(this).addClass('active-li');
		if( position_click > position_current ) {
			$(".active-product").addClass('lost-on-left').one('webkitAnimationEnd',function() {
				$('.lost-on-left').removeClass('lost-on-left').removeClass('active-product');
			});
			$(".cover-images_.out:nth-child("+(position_click)+")").addClass('active-product').addClass('go-to-left').one('webkitAnimationEnd',function() {
				$('.go-to-left').removeClass('go-to-left');
			});
		}
		else {
			$(".active-product").addClass('lost-on-right').one('webkitAnimationEnd',function() {
				$('.lost-on-right').removeClass('lost-on-right').removeClass('active-product');
			});
			$(".cover-images_.out:nth-child("+(position_click)+")").addClass('active-product').addClass('go-to-right').one('webkitAnimationEnd',function() {
				$('.go-to-right').removeClass('go-to-right');
			});
		}
	});
});
