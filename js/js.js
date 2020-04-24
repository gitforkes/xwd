/*轮播图*/
let aDiv = $('#ban div');
var iNow = 0;
var timer = null;
aDiv[0].style.display = 'block';

function mar() {
    iNow++;
    if (iNow === 5) iNow = 0;
    aDiv.eq(iNow).slideDown().siblings().slideUp();
}

timer = setInterval(mar, 4000);
$('#ban').hover(function () {
    console.log('out, over');
    clearInterval(timer);
}, function () {
    timer = setInterval(mar, 4000);
});