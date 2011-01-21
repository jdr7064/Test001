$(document).ready(function() {
		var str_url='./login.php';   var dt = new Date();
		var png_code=$('#png_code');
		$('#check_code').focus(function() {
			$('#png_code').attr({src:str_url+'?fun=new_one', width:'70', height:'25', alt:'点击刷新'});
			});
		$('#png_code').click(function() {
			$('#png_code').attr({src:str_url+'?fun=new_one&id='+Math.random(), width:'70', height:'25', alt:'点击刷新'});
			});
		$('#button').click(function() {
			window.alert($('#user_name').val());
			});
		$('#dialog_login').dialog({
bgiframe: true,
modal: true,
autoOpen: false,
buttons: {
'取消': function( {
	$(this).dialog("close");
	}),
'登录': function( {
	window.alert('aaa');
	});
}
			});
$('#button_login').click({
$('#dialog_login').dialog('open');
		});
		});
