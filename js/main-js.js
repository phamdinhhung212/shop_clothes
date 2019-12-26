var begin_action = setTimeout(function() {
    $('.greeting').stop().fadeIn(900);
},3000);
$(document).ready(function() {
    $("span.close-signUp").click(function() {
        $('.greeting').stop().fadeOut(900);
        clearTimeout(begin_action);
    });
});
// back-top 
$(document).ready(function() {
    $(".icon-scroll").click(function() {
        $('html').animate({
            scrollTop : 0,
        },1500);
    });
    $(window).scroll(function() {
        var scroll_size = $(window).scrollTop();
        if(scroll_size > 220) {
            $(".icon-scroll").stop().fadeIn(500);
        }
        else {
            $(".icon-scroll").stop().fadeOut(700);
        }
    });
});


// function for btn seach
$(document).ready(function() {
    $(".icon-search").click(function() {
        $(".search-text").stop().fadeToggle(1000);
    });
    $(".form-search").submit(function() {
        alert('không tìm thấy sản phẩm');
        return false;
    });
});
// function for slider 
$(document).ready(function() {
    setInterval(function() {
        $(".btn-next-banner").trigger('click');
    },3000);
    // xử lí nut btn-next 
    $(".btn-next-banner").click(function() {
        var slide_after;
        var current_active_position; // biến để lấy giá trị hiện tại của thằng active-li
        slide_after = $(".active").next();
        current_active_position = $(".active-li").index()+1; // lấy vị trí của thằng đang active-li
        // $(".btn-slide ul li").removeClass('.active-li');
        if( slide_after.length != 0 ) {
            $(".active").addClass('lost-on-left').one('webkitAnimationEnd',function() {
                $(".lost-on-left").removeClass('lost-on-left').removeClass('active');
            });
            slide_after.addClass('active').addClass('go-to-left').one('webkitAnimationEnd',function() {
                $(".go-to-left").removeClass('go-to-left');
            });
            $(".btn-slide ul li").removeClass('active-li');
            $(".btn-slide ul li:nth-child(+"+( current_active_position+1 )+")").addClass('active-li');
        }
        else {
            $(".active").addClass('lost-on-left').one('webkitAnimationEnd',function() {
                $(".lost-on-left").removeClass('lost-on-left').removeClass('active');
            });
            $(".slide:nth-child(1)").addClass('active').addClass('go-to-left').one('webkitAnimationEnd',function() {
                $('.go-to-left').removeClass('go-to-left');
            });
            $(".btn-slide ul li").removeClass('active-li');
            $(".btn-slide ul li:first-child").addClass('active-li');
        }
    });
    //xử lí nút btn-prev
    $(".btn-prev-banner").click(function() {
        var slide_before = $(".active").prev();
        var current_active_position = $(".active-li").index()+1;
        if( slide_before.length != 0 ) {
            $('.active').addClass('lost-on-right').one('webkitAnimationEnd',function() {
                $(".lost-on-right").removeClass('lost-on-right').removeClass('active');
            });
            slide_before.addClass('active').addClass('go-to-right').one('webkitAnimationEnd',function() {
                $(".go-to-right").removeClass('go-to-right');
            });
            $(".btn-slide ul li").removeClass('active-li');
            $(".btn-slide ul li:nth-child("+( current_active_position - 1 )+")").addClass('active-li');
        }
        else {
            $(".active").addClass('lost-on-right').one('webkitAnimationEnd',function() {
                $(".lost-on-right").removeClass('lost-on-right').removeClass('active');
            });
            $(".slide:last-child").addClass('active').addClass('go-to-right').one('webkitAnimationEnd',function() {
                $(".go-to-right").removeClass('go-to-right');
            });
            $(".btn-slide ul li").removeClass('active-li');
            $(".btn-slide ul li:last-child").addClass('active-li');
        }
    });
    // xử lí khi click vào li 
    $(".btn-slide ul li").click(function() {
        var current_active_position = $(".active-li").index()+1;
        var position_click = $(this).index()+1;
        $(".btn-slide ul li").removeClass('active-li');
        $(this).addClass('active-li');
        if( position_click > current_active_position ) {
            $(".active").addClass('lost-on-left').one('webkitAnimationEnd',function() {
                $(".lost-on-left").removeClass('lost-on-left').removeClass('active');
            });
            $(".slide:nth-child("+( position_click )+")").addClass('active').addClass('go-to-left').one('webkitAnimationEnd',function() {
                $(".go-to-left").removeClass('go-to-left');
            });
        }
        else {
            $(".active").addClass('lost-on-right').one('webkitAnimationEnd',function() {
                $(".lost-on-right").removeClass('lost-on-right').removeClass('active');
            });
            $(".slide:nth-child("+( position_click )+")").addClass('active').addClass('go-to-right').one('webkitAnimationEnd',function() {
                $(".go-to-right").removeClass('go-to-right');
            });
        }
    });
}); 
// xử lý hover vào hiện lên những sản phẩm con
$(document).ready(function() {
    $('ul.list-product li').hover(function(){
        // hover in
        $(this).children('.hide-1').stop().slideUp(500);
        $(this).children('.hide-2').stop().slideDown(500);
        $(this).children('a').attr('title','click để xem chi tiết');
    },function(){
        // hover ont
        $(this).children('.hide-2').stop().slideUp(800);
        $(this).children('.hide-1').stop().slideDown(800);
        $(this).removeAttr('title',);
    })
});

// xử lí hover vào sản phẩm con
$(document).ready(function() {
    $('ul.list-thumb li').hover(function(){
        // hover in
        var get_src_img = $(this).children('img').attr('src');
        $(this).parents('ul.list-product li').children('a').children('img').attr('src',get_src_img);
    },function() {
        // hover out
    })
});


// xử lí ẩn hiện giỏ hàng giỏ hàng
$(document).ready(function() {
    $(".basket-product").click(function() {
        $(".information-basket").stop().fadeToggle(1000);
    });
    $(".information-basket span.close-basket").click(function() {
        $(".information-basket").stop().fadeOut(1000);
    });
});

// xử lý hiện nút thêm vào giỏ hàng
$(document).ready(function() {
    // hover vào li thanh thêm vào giả hàng hiện ra 
    $('ul.list-product li').hover(function() {
        // hover in
        $(this).children('.add-to-cart').stop().animate({
            left:'17px',
        },1000)
    },function() {
        // hover out
        $(this).children('.add-to-cart').stop().animate({
            left:'230px',
        },1000)
    });
});
// xử lí lấy thông tin cho vào giỏ hàng
$(document).ready(function() {
    var number_of_cart;
    number_of_cart = parseInt( $(".cart-cout").text() );
    $('.add-to-cart').click(function(){
        // nếu số lượng giỏ hàng còn nhỏ hơn 5 tức là giỏ hàng còn chổ chứa thì được phép thêm hàng vào
        if(number_of_cart < 5) { 
            number_of_cart++;
            $(".cart-cout").text(number_of_cart);
            $(".cart-cout").attr('title',number_of_cart)
            // lấy hình ảnh của sản phẩm cần đưa vào giỏ hàng
            var get_src_img = $(this).parents('li').children('a').children('img').attr('src');
            // lấy tên của sản phẩm cần đưa vào giỏ hàng
            var get_name_product = $(this).parents('li').children('a').children('img').attr('alt');
            // lấy giá của sản phẩm cần đưa vào giỏ hàng
            var get_price_product = $(this).parents('li').children('.hide-1').children('.new-price').text();
            // nếu số lượng là 1 thì sản phẩm được đưa vào ô thứ 1
            if( number_of_cart == 1 ) {
                $("ul.list-basket li:first-child a img").attr('src',get_src_img);
                $("ul.list-basket li:first-child .information-basic-basket .product-name").text(get_name_product);
                $("ul.list-basket li:first-child .information-basic-basket .product-price").text(get_price_product);
            }
            // nếu số lượng là 2 thì sản phẩm được đưa vào ô thứ 2
            if( number_of_cart == 2 ) {
                $("ul.list-basket li:nth-child(2) a img").attr('src',get_src_img);
                $("ul.list-basket li:nth-child(2) .information-basic-basket .product-name").text(get_name_product);
                $("ul.list-basket li:nth-child(2) .information-basic-basket .product-price").text(get_price_product);
            }
            // nếu số lượng là 3 thì sản phẩm được đưa vào ô thứ 3
            if( number_of_cart == 3 ) {
                $("ul.list-basket li:nth-child(3) a img").attr('src',get_src_img);
                $("ul.list-basket li:nth-child(3) .information-basic-basket .product-name").text(get_name_product);
                $("ul.list-basket li:nth-child(3) .information-basic-basket .product-price").text(get_price_product);
            }
            // nếu số lượng là 4 thì sản phẩm được đưa vào ô thứ 4
            if( number_of_cart == 4 ) {
                $("ul.list-basket li:nth-child(4) a img").attr('src',get_src_img);
                $("ul.list-basket li:nth-child(4) .information-basic-basket .product-name").text(get_name_product);
                $("ul.list-basket li:nth-child(4) .information-basic-basket .product-price").text(get_price_product);
            }
            // nếu số lượng là 5 thì sản phẩm được đưa vào ô thứ 5
            if( number_of_cart == 5 ) {
                $("ul.list-basket li:nth-child(5) a img").attr('src',get_src_img);
                $("ul.list-basket li:nth-child(5) .information-basic-basket .product-name").text(get_name_product);
                $("ul.list-basket li:nth-child(5) .information-basic-basket .product-price").text(get_price_product);
            }
        }
        else {
            // nếu số lượng giỏ hàng vược quá 5 sản phẩm thì giỏ hàng sẽ full
            alert('giỏ hàng đầy');
        }
    });
    // xử lí xóa toàn bộ sản phẩm 
    $(".delete-all p.delete").click(function() {
        $("ul.list-basket li a img").removeAttr('src');
        $("ul.list-basket li .information-basic p span").text(' ');
        $(".cart-cout").text(0);
        number_of_cart = 0;
    });


    // xử lí xóa từng sản phẩm
    $('ul.list-basket li .delete-basket').click(function() {
        $(this).parents('li').children('a').children('img').removeAttr('src');
        $(this).parents('li').children('.information-basic').children('p').children('span').text(' ');
        var value_current = parseInt($(".cart-cout").text());
        value_current--;
        if(value_current>=0){
            $(".cart-cout").text(value_current);
            number_of_cart = 0;
        }
        else {
            $(".cart-cout").text(0);
            number_of_cart = 0;
        }
    });
});














