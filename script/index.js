var currentIndex = 0;
var len = document.querySelectorAll('.slider .list li').length;
var id;

function slideTo(index) {

	//设定焦点：
	document.querySelector('.slider .focus').className = '';
	document.querySelectorAll('.slider .points li')[index].className = 'focus';

	document.querySelector('.slider .list .current').className = '';
	// document.querySelectorAll('.list li')[index].className = 'current';
	document.querySelector('.slider .list li:nth-of-type(' + (index+1) + ')').className = 'current';
}

function slideNext() {
	currentIndex++;
	if(currentIndex === len) {
		currentIndex = 0;
	}
	slideTo(currentIndex);
}

function slidePrev() {
	currentIndex--;
	if(currentIndex === -1) {
		currentIndex = len-1;
	}

	slideTo(currentIndex);
}

document.querySelector('.slider .button-group .btn:first-of-type').onclick = function () {
	slidePrev();
}

document.querySelector('.slider .button-group .btn:last-of-type').onclick = function () {
	slideNext();
}

//监听所有小点点的点击事件
var points = document.querySelectorAll('.slider .points li');
for(var i=0; i<points.length; i++) {
	points[i].index = i;
	points[i].onclick = function () {
		currentIndex = this.index;
		slideTo(currentIndex);
	}
}

function autoplay() {
	clearInterval(id);
	id = setInterval(function () {
		slideNext();
	}, 1000)
}

autoplay();

function stop() {
	clearInterval(id);
}

document.querySelector('.slider').onmouseover = function () {
	stop();
}

document.querySelector('.slider').onmouseout = function () {
	autoplay();
}


function setEndTime() {
    $('.countdown').each(function() {
        var vendDay = $(this).find('#day').html();
        var vendHour = $(this).find('#hour').html();
        var vendMinute = $(this).find('#minute').html();
        var vendSecond = $(this).find('#second').html();
        if (vendSecond > 0) {
            if (vendSecond > 10) {
                $(this).find('#second').html(vendSecond - 1);
            } else {
                $(this).find('#second').html("0" + (vendSecond - 1));
            }
        } else {
            if (vendMinute > 0) {
                $(this).find('#second').html(59);
                if (vendMinute > 10) {
                    $(this).find('#minute').html(vendMinute - 1);
                } else {
                    $(this).find('#minute').html("0" + (vendMinute - 1));
                }
            } else {
                if (vendHour > 0) {
                    $(this).find('#second').html(59);
                    $(this).find('#minute').html(59);
                    if (vendHour > 10) {
                        $(this).find('#hour').html(vendHour - 1);
                    } else {
                        $(this).find('#hour').html("0" + (vendHour - 1));
                    }
                } else {
                    if (vendDay > 0) {
                        $(this).find('#second').html(59);
                        $(this).find('#minute').html(59);
                        $(this).find('#hour').html(23);
                        if (vendDay > 10) {
                            $(this).find('#day').html(vendDay - 1);
                        } else {
                            $(this).find('#day').html("0" + (vendDay - 1));
                        }
                    } else {
                        location.reload();
                        //$(this).html("此团购已结束");
                    }
                }
            }
        }
    });
}

function setBrandEndTime() {
    if ($('.time').attr('status') == 'nomal') {
        $('.time').each(function() {
            var Day = $(this).find($('.tian')).html();
            var Hour = $(this).find($('.shi')).html();
            var Minute = $(this).find($('.fen')).html();
            var Second = $(this).find($('.miao')).html();
            if (Second > 0) {
                if (Second > 10) {
                    $(this).find($('.miao')).html(Second - 1);
                } else {
                    $(this).find($('.miao')).html("0" + (Second - 1));
                }
            } else {
                if (Minute > 0) {
                    $(this).find($('.miao')).html(59);
                    if (Minute > 10) {
                        $(this).find($('.fen')).html(Minute - 1);
                    } else {
                        $(this).find($('.fen')).html("0" + (Minute - 1));
                    }
                } else {
                    if (Hour > 0) {
                        $(this).find($('.miao')).html(59);
                        $(this).find($('.fen')).html(59);
                        if (Hour > 10) {
                            $(this).find($('.shi')).html(Hour - 1);
                        } else {
                            $(this).find($('.shi')).html("0" + (Hour - 1));
                        }
                    } else {
                        if (Day > 0) {
                            $(this).find($('.miao')).html(59);
                            $(this).find($('.fen')).html(59);
                            $(this).find($('.shi')).html(23);
                            if (Day > 10) {
                                $(this).find($('.tian')).html(Day - 1);
                            } else {
                                $(this).find($('.tian')).html("0" + (Day - 1));
                            }
                        }
                    }
                }
            }
        })
    }
}

(function(tml) {
    setInterval(setEndTime, 1000);
    setInterval(setBrandEndTime, 1000);

});



//Z智选
var lis = document.querySelectorAll('.selection .inner .point_inner li')
for(var i=0 ; i<lis.length ; i++){
    lis[i].five_index = i;
    lis[i].onclick = function(){
        var src = 'http://localhost:8080/src/resource/imgs/index/inner_0' + (this.five_index+1) + '.jpg'
        var img = document.querySelector('.selection .inner .slider_inner img');
        // console.log(src);
        img.src = src;
        document.querySelector('.selection .inner .point_inner .focus').className = '';
        this.className = 'focus';
    }
}