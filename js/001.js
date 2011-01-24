//hover states on the static widgets
$(document).ready(function() {
$('#png_code').click(function() {
			var t_img=$('<img src="./png.php?'+Math.random()+'", alt="点击刷新" />');
			$('#png_code').html('');
			$('#png_code').append(t_img);
	});

		$('#dialog_link, ul#icons li').hover(
			function() { $(this).addClass('ui-state-hover'); }, 
			function() { $(this).removeClass('ui-state-hover'); }
			);
		$('#dialog_link').click(function() {
			var t_img=$('<img src="./png.php", alt="点击刷新" />');
			$('#png_code').html('');
			$('#png_code').append(t_img);
			$('#dialog').dialog('open');
			return false;
			});

		// 登录对话框
		$('#dialog').dialog({
autoOpen: false,
width: 230,
buttons: {
"登录": function() {
window.alert($('#user_name').val());
window.alert(($('#check_code').length));
$(this).dialog("close");
},
"取消": function() {
$(this).dialog("close");
}
}
});

//	取得验证码的图片
		});
