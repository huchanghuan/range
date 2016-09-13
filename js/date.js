$(function(){
	var show_date = $("#product > div > div.show-date");
	setInterval(function(){
		show_date.html(getCurrentTimes());
	},1000)
});

function getCurrentTimes() {
	var m;
	var weekDays = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期天"];
	
	var date = new Date();
	var year = date.getFullYear() + "年";
	var month = ((m = date.getMonth() + 1) < 10 ? "0" + m :m) + "月";
	var dayOfMonth = date.getDate() + "日 ";
	var weekDay = date.getDay();
	return year + month + dayOfMonth + weekDays[weekDay-1];
}
