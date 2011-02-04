//hover states on the static widgets
$(document).ready(function() {
var post_url='./002.php';

//	取得验证码的图片
function get_check_img() {
$('#check_code').val('');
		var t_img=$('<img src="./png.php?'+Math.random()+'", alt="点击刷新" />');
			$('#png_code').html('');
			$('#png_code').append(t_img);
$.ajax({
type: "POST", 
url: post_url+"?f=get_check",
success: function(xml) {
window.alert($(xml).find('len_cc').text());
$('#len_cc').val($(xml).find('len_cc').text());
$('#cc_code').val($(xml).find('cc_code').text());
window.alert($(xml).find('cc_code').text());
window.alert($(xml).find('cc_code1').text());
window.alert($(xml).find('cc_code2').text());
},
error: function(XMLHttpRequest, testStatus, errorThrown) {}
});
}

$('#png_code').click(function() { get_check_img();	});

$('#dialog_link, ul#icons li').hover(
function() { $(this).addClass('ui-state-hover'); }, 
			function() { $(this).removeClass('ui-state-hover'); }
			);

		$('#dialog_link').click(function() {
get_check_img();
			$('#dialog').dialog('open');
			return false;
			});

		// 登录对话框
		$('#dialog').dialog({
autoOpen: false,
width: 230,
buttons: {
"登录": function() {
if($('#check_code').val().length==$('#len_cc').val()) {
$.ajax({
type: "POST", 
url: post_url+"?f=login",
data: 'user='+$('#user_name').val()+'&pwd='+$('#pwd').val(),
success:function(xml) {
if($(xml).find('result').val()=="OK") {
$(this).dialog("close");
} else {
$('#dialog').title('登录(输入错误,)');
}
},
error: function(XMLHttpRequest, textStatus, errorThrown) {}
});
} else {
window.alert('验证码不正确!'+$('#check_code').val().length+$('#len_cc').val());
$('#check_code').focus();
}
},
"取消": function() {
$(this).dialog("close");
}
}
});

		});;
