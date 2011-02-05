//hover states on the static widgets
$(document).ready(function() {
	var post_url='./002.php';
	var post_usl_login='./login.php';

	//	取得验证码的图片
	function get_check_img() {
		$('#check_code').val('');
		var t_img=$('<img src="./png.php?'+Math.random()+'", alt="点击刷新" />');
		$('#png_code').html('');
		$('#png_code').append(t_img);
	}

	//	清空消息提示
	$('#pwd, #check_code').focus(function() {	$('#msg_info').text(''); });

	$('#png_code').click(function() { get_check_img();	});

	$('#dialog_link, ul#icons li').hover(
		function() { $(this).addClass('ui-state-hover'); }, 
		function() { $(this).removeClass('ui-state-hover'); }
	);

	//	打开登录对话框
	$('#dialog_link').click(function() {
		get_check_img();
		$('#dialog').dialog('open');
		return false;
	});

	//	欢迎对话框
	$('#dialog_welcome').dialog({
		autoOpen: false,
		width: 230,
		buttons: {
			"确定": function() {
				$(this).dialog("close");
			}
		}
	});

	// 登录对话框
	$('#dialog').dialog({
		autoOpen: false,
		width: 230,
		buttons: {
			"登录": function() {
				if($('#check_code').val().length==4) {
					$.ajax({
						type: "POST", 
						url: post_usl_login,
						data: 'user_name='+$('#user_name').val()+'&pwd='+$('#pwd').val()+'&check_code='+$('#check_code').val(),
						success:function(xml) {
							//		window.alert($(xml).find('result').text());
							if($(xml).find('result').text()=="OK") {
								//	window.alert("Success");
								$('#dialog').dialog("close");
								$('#user_name_0').html('<h3>欢迎 <im>'+$('#user_name').val()+'</im> 回来</h3>');
								$('#dialog_welcome').dialog("open");
							} else {
								get_check_img();
								$('#msg_info').text('输入的信息错误, 请重新输入');
								$('#user_name').focus();
							}
						},
						error: function(XMLHttpRequest, textStatus, errorThrown) {}
					});
				} else {
					window.alert('验证码不正确!');
					$('#check_code').focus();
				}
			},
			"取消": function() {
				$(this).dialog("close");
			}
		}
	});

});;
