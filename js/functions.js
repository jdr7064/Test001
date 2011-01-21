$(document).ready(function() {
	var i = 0;
	var tbody0 = $('#data0');
	var str_url='./query.php';
	$('#tabs').tabs();
	//----------------------------------				
	$('#l_tabs-3').click(function() {
		worker_show('#l_tabs-3');
	});
	//----------------------------------				
	$('#l_tabs-2').click(function() {
		dao_name_show('#l_tabs-2');
	});
	//----------------------------------
	//-------------------------对话框开始
	$('#delete_dao_gg').dialog({
		bgiframe: true,
		modal: true,
		autoOpen: false,
		buttons: {
			'取消': function() {
				$(this).dialog("close");
			},
			'确定删除': function() {
				var dao_id = $(this).find('#s_id').val();
				var str = 'id=' + dao_id;
				$.ajax({
					type: 'POST',
					url: str_url+'?14',
					data: str,
					success: function(xml) {
						dao_gg_show_1(dao_id);
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {}
				});
				$(this).dialog("close");
			}
		}
	});
	//-------------------------
	$('#delete_worker').dialog({
		bgiframe: true,
		modal: true,
		autoOpen: false,
		buttons: {
			"取消": function() {
				$(this).dialog("close");
			},
			"确定删除": function() {
				var str = "symbol=" + $(this).find("#s_symbol").val() + "&name=" + $(this).find("#s_name").val() + "&id=" + $(this).find("#s_id").val();
				$.ajax({
					type: "POST",
					url: str_url+"?23",
					data: str,
					success: function(xml) {
						worker_show('#l_tabs-3');
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {}
				});
				$(this).dialog("close");
			}
		}
	});
	//--------------------------
	$('#add_new_worker').dialog({
		bgiframe: true,
		modal: true,
		autoOpen: false,
		buttons: {
			"取消": function() {
				$(this).dialog("close");
			},
			"增加": function() {
				var str = "symbol=" + $(this).find("#s_symbol").val() + "&name=" + $(this).find("#s_name").val();
				$.ajax({
					type: "POST",
					url: str_url+"?21",
					data: str,
					success: function(xml) {
						worker_show('#l_tabs-3');
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {}
				});
				$(this).dialog("close");
			}
		}
	});
	//--------------------------	
	$('#edit_worker').dialog({
		bgiframe: true,
		modal: true,
		autoOpen: false,
		buttons: {
			"取消": function() {
				$(this).dialog("close");
			},
			"修改": function() {
				var str = "symbol=" + $(this).find("#s_symbol").val() + "&name=" + $(this).find("#s_name").val() + "&id=" + $(this).find("#s_id").val();
				$.ajax({
					type: "POST",
					url: str_url+"?21",
					data: str,
					success: function(xml) {
						worker_show('#l_tabs-3');
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {}
				});
				$(this).dialog("close");
			}
		}
	});
	//----------------------------------
	$('#edit_dao_gg').dialog({
		bgiframe: true,
		modal: true,
		autoOpen: false,
		buttons: {
			"取消": function() {
				$(this).dialog("close");
			},
			"修改": function() {
				var dao_id = $(this).find("#s_d_id").val();
				var str = "dao_id=" + dao_id + "&upper_limit=" + $(this).find("#s_upper_limit").val() + "&id=" + $(this).find("#s_id").val() + "&floor_limit=" + $(this).find("#s_floor_limit").val() + "&zzgs=" + $(this).find("#s_zzgs").val() + "&djgs=" + $(this).find("#s_djgs").val() + "&remark=" + $(this).find("#s_remark").val();
				alert(str);
				$.ajax({
					type: "POST",
					url: str_url+"?13",
					data: str,
					success: function(xml) {
						dao_gg_show_1(dao_id);
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {}
				});
				$(this).dialog("close");
			}
		}
	});
	//----------------------------------
	$('#add_dao_gg').dialog({
		bgifram: true,
		model: true,
		autoOpen: false,
		buttons: {
			'取消': function() {
				$(this).dialog('close');
			},
			'增加': function() {
				var dao_id = $(this).find('#s_d_id').val();
				var str = 'floor_limit=' + $(this).find('#s_floor_limit').val() + '&upper_limit=' + $(this).find('#s_upper_limit').val() + '&zzgs=' + $(this).find('#s_zzgs').val() + '&djgs=' + $(this).find('#s_djgs').val() + '&dao_id=' + dao_id + '&remark=' + $(this).find('#s_remark').val();
				//alert(str);
				$.ajax({
					type: 'POST',
					url: './a.d?12',
					data: str,
					success: function(xml) {
						alert('OK');
						dao_gg_show_1(dao_id);
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {}
				});
				$(this).dialog("close");
			}
		}
	});
	//----------------------------------
	$('#add_new_dao_name').dialog({
		bgiframe: true,
		modal: true,
		autoOpen: false,
		buttons: {
			"取消": function() {
				$(this).dialog("close");
			},
			"增加": function() {
				var str = "symbol=" + $(this).find("#s_symbol").val() + "&name=" + $(this).find("#s_name").val() + "&unit=" + $(this).find('#s_unit').val();
				$.ajax({
					type: "POST",
					url: str_url+"?7",
					data: str,
					success: function(xml) {
						dao_name_show('#l_tabs-2');
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {}
				});
				$(this).dialog("close");
			}
		}
	});
	//--------------------------
	$('#edit_dao_name').dialog({
		bgiframe: true,
		modal: true,
		autoOpen: false,
		//					width: 600,
		buttons: {
			"取消": function() {
				$(this).dialog("close");
			},
			"修改": function() {
				var str = "symbol=" + $(this).find("#s_symbol").val() + "&name=" + $(this).find("#s_name").val() + "&id=" + $(this).find("#s_id").val() + "&unit=" + $(this).find("#s_unit").val();
				$.ajax({
					type: "POST",
					url: str_url+"?8",
					data: str,
					success: function(xml) {
						dao_name_show('#l_tabs-2');
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {}
				});
				$(this).dialog("close");
			}
		}
	});
	//----------------------------------
	$('#delete_dao_name').dialog({
		bgiframe: true,
		modal: true,
		autoOpen: false,
		buttons: {
			"取消": function() {
				$(this).dialog("close");
			},
			"确定删除": function() {
				var str = "symbol=" + $('#delete_dao_name').find("#s_symbol").val() + "&name=" + $('#delete_dao_name').find("#s_name").val() + "&id=" + $('#delete_dao_name').find("#s_id").val();
				//alert(str);
				$.ajax({
					type: "POST",
					url: str_url+"?9",
					data: str,
					success: function(xml) {
						dao_name_show('#l_tabs-2');
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {}
				});
				$(this).dialog("close");
			}
		}
	});
	//--------------------------对话框结束
	//----------------------------------
	function dao_gg_show_1(ss_id) {
		$.ajax({
			type: "POST",
			url: str_url+"?11",
			data: "dao_id=" + ss_id,
			error: function(XMLHttpRequest, textStatus, errorThrown) {},
			success: function(xml) {
				var tbody = $('#table_dao_gg');
				tbody.html('');
				$(xml).find('result').each(function() {
					var td = $('<td/>');
					var tr = $('<tr/>');
					var ahref = $('<a href="#"/>');
					var s_id = $(this).find('id').text();
					var s_d_id = $(this).find('d_id').text();
					var s_floor_limit = $(this).find('floor_limit').text();
					var s_upper_limit = $(this).find('upper_limit').text();
					var s_zzgs = $(this).find('zzgs').text();
					var s_djgs = $(this).find('djgs').text();
					var s_remark = $(this).find('remark').text();
					ahref.text('编辑');
					ahref.click(function() {
						var dia = $('#edit_dao_gg');
						dia.find('#s_floor_limit').val(s_floor_limit);
						dia.find('#s_upper_limit').val(s_upper_limit);
						dia.find('#s_zzgs').val(s_zzgs);
						dia.find('#s_djgs').val(s_djgs);
						dia.find('#s_remark').val(s_remark);
						dia.find('#s_id').val(s_id);
						dia.find('#s_d_id').val(s_d_id);
						$('#edit_dao_gg').dialog('open');
						return false;
					});
					td.append(ahref);
					ahref = $("<a href=\"#\"/>");
					ahref.attr('id', 'delete_worker_' + $(this).find("id").text());
					ahref.text('删除');
					ahref.click(function() {
						var dia = $('#delete_dao_gg');
						var str = '确定要删除 此规格刀具 吗?';
						dia.find('#msg').text(str);
						//				dia.find('#s_symbol').val(s_symbol);
						//				dia.find('#s_name').val(s_name);
						dia.find('#s_id').val(s_id);
						$('#delete_dao_gg').dialog('open');
						return false;
					});
					td.append(ahref);
					tr.append(td);
					td = $("<td/>");
					//			td.attr("width", "68px");
					td.html(s_id);
					tr.append(td);
					td = $("<td/>");
					//			td.attr("width", "68px");
					td.html(s_floor_limit);
					tr.append(td);
					td = $("<td/>");
					//			td.attr("width", "68px");
					td.html(s_upper_limit);
					tr.append(td);
					td = $("<td/>");
					//			td.attr("width", "68px");
					td.html(s_zzgs);
					tr.append(td);
					td = $("<td/>");
					//			td.attr("width", "68px");
					td.html(s_djgs);
					tr.append(td);
					td = $("<td/>");
					//			td.attr("width", "68px");
					td.html(s_remark);
					tr.append(td);
					tbody.append(tr);
				});
			}
		});
	}
	function dao_gg_show(event) {
		var ss_id = event.data.id;
		dao_gg_show_1(ss_id);
	}
	//----------------------------------
	function worker_show(str) {
		var this1 = $(str);
		$.ajax({
			type: "GET",
			url: str_url+"?20",
			success: function(xml) {
				var tbody = $("#table_workers");
				tbody.html("");
				$(xml).find("result").each(function() {
					var td = $("<td/>");
					var tr = $("<tr/>");
					var ahref = $("<a href=\"#\"/>");
					var s_id = $(this).find("id").text();
					var s_name = $(this).find("name").text();
					var s_symbol = $(this).find("symbol").text();
					//	td.html("<input value='"+$(this).find("id").text()+"' type='checkbox'/>");
					//	tr.append(td);
					//	td=$("<td/>");
					//			td.attr("width", "16px");
					td.html(s_id);
					tr.append(td);
					td = $("<td/>");
					ahref.attr('id', 'edit_worker_' + $(this).find("id").text());
					ahref.text('编辑');
					ahref.click(function() {
						var dia = $('#edit_worker');
						dia.find('#s_symbol_1').text(s_symbol);
						dia.find('#s_name_1').text(s_name);
						dia.find('#s_symbol').val(s_symbol);
						dia.find('#s_name').val(s_name);
						dia.find('#s_id').val(s_id);
						$('#edit_worker').dialog('open');
						return false;
					});
					td.append(ahref);
					ahref = $("<a href=\"#\"/>");
					ahref.attr('id', 'delete_worker_' + $(this).find("id").text());
					ahref.text('删除');
					ahref.click(function() {
						var dia = $('#delete_worker');
						var str = '确定要删除 "' + s_name + '" 吗?';
						dia.find('#msg').text(str);
						dia.find('#s_symbol').val(s_symbol);
						dia.find('#s_name').val(s_name);
						dia.find('#s_id').val(s_id);
						$('#delete_worker').dialog('open');
						return false;
					});
					td.append(ahref);
					tr.append(td);
					td = $("<td/>");
					td.attr("width", "68px");
					td.html(s_name);
					tr.append(td);
					td = $("<td/>");
					td.attr("width", "68px");
					td.html(s_symbol);
					tr.append(td);
					tbody.append(tr);
				});
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {}
		});
	}
	//-------------------------
	function dao_name_show(str) {
		var this1 = $(str);
		$.ajax({
			type: "GET",
			url: str_url+"?10",
			success: function(xml) {
				var tbody = $("#table_dao_name");
				tbody.html("");
				$(xml).find("result").each(function() {
					var td = $("<td/>");
					var tr = $("<tr/>");
					var ahref = $("<a href=\"#\"/>");
					var s_id = $(this).find("id").text();
					var s_name = $(this).find("name").text();
					var s_symbol = $(this).find("symbol").text();
					var s_unit = $(this).find("unit").text();
					//	td.html("<input value='"+$(this).find("id").text()+"' type='checkbox'/>");
					//	tr.append(td);
					//	td=$("<td/>");
					//			td.attr("width", "16px");
					td.html(s_id);
					tr.append(td);
					td = $("<td/>");
					ahref.attr('id', 'edit_dao_name_' + $(this).find("id").text());
					ahref.text('编辑');
					ahref.click(function() {
						var dia = $('#edit_dao_name');
						dia.find('#s_symbol_1').text(s_symbol);
						dia.find('#s_name_1').text(s_name);
						dia.find('#s_unit_1').text(s_unit);
						dia.find('#s_symbol').val(s_symbol);
						dia.find('#s_name').val(s_name);
						dia.find('#s_unit').val(s_unit);
						dia.find('#s_id').val(s_id);
						$('#edit_dao_name').dialog('open');
						return false;
					});
					td.append(ahref);
					ahref = $("<a href=\"#\"/>");
					ahref.attr('id', 'delete_dao_name_' + $(this).find("id").text());
					ahref.text('删除');
					ahref.click(function() {
						var dia = $('#delete_dao_name');
						var str = '确定要删除 "' + s_name + '" 吗?';
						dia.find('#msg').text(str);
						dia.find('#s_symbol').val(s_symbol);
						dia.find('#s_name').val(s_name);
						dia.find('#s_id').val(s_id);
						$('#delete_dao_name').dialog('open');
						return false;
					});
					td.append(ahref);
					tr.append(td);
					td = $("<td/>");
					td.attr("width", "68px");
					td.html(s_name);
					tr.append(td);
					td = $("<td/>");
					td.attr("width", "68px");
					td.html(s_symbol);
					tr.append(td);
					td = $("<td/>");
					td.attr("width", "68px");
					td.html(s_unit);
					tr.append(td);
					tr.bind("click", {
						id: s_id
					},
					dao_gg_show);
					tbody.append(tr);
				});
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {}
		});
	}
	//------------------------- 按钮操作
	$('#link_add_new_worker').click(function() {
		$('#add_new_worker').find("#s_symbol").val('');
		$('#add_new_worker').find("#s_name").val('');
		$('#add_new_worker').dialog("open");
	});
	//--------------------------
	$('#link_add_new_dao_name').click(function() {
		$('#add_new_dao_name').find("#s_symbol").val('');
		$('#add_new_dao_name').find("#s_name").val('');
		$('#add_new_dao_name').find('#s_unit').val('');
		$('#add_new_dao_name').dialog("open");
	});
	//--------------------------
	$('#link_add_new_dao_gg').click(function() {
		$('#add_dao_gg').find('#s_dao_name_1').text('');
		$('#add_dao_gg').find("#s_d_id").val('');
		$('#add_dao_gg').find("#s_dao_symbol_input").val('');
		$('#add_dao_gg').find("#s_floor_limit").val('');
		$('#add_dao_gg').find("#s_upper_limit").val('');
		$('#add_dao_gg').find("#s_zzgs").val('');
		$('#add_dao_gg').find("#s_djgs").val('');
		$('#add_dao_gg').find('#s_remark').val('');
		$('#add_dao_gg').dialog("open");
	});
	//----------------------------------
	//----------------------------------
	$('#s_dao_symbol_input').blur(function() {
		var str = 'symbol=' + $(this).val();
		$.ajax({
			type: 'POST',
			url: './a.d?1',
			data: str,
			success: function(xml) {
				$(xml).find("result").each(function() {
					var s_id = $(this).find('id').text();
					var s_name = $(this).find('name').text();
					var s_symbol = $(this).find('symbol').text();
					var s_unit = $(this).find('unit').text();
					var d_add_dao_gg = $('#add_dao_gg');
					d_add_dao_gg.find('#s_d_id').val(s_id);
					d_add_dao_gg.find('#s_dao_name_1').text(s_name);
				});
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {}
		});
	});
	//--------------------------------------
	//--------------------------------------
	$("#worker").blur(function() {
		$.ajax({
			type: "POST",
			url: str_url+"?2",
			data: "name=" + this.value,
			success: function(xml) {
				var result = $(xml).find("result");
				$("#notice").html("");
				$("#worker_name").html($(result).find("name").text());
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				$("#worker_name").html($("#worker").val());
				$("#notice").html("查" + $("#worker").val() + "无结果");
			}
		});
	});
	//-------------------------------------
	$("#dao").blur(function() {
		$.ajax({
			type: "POST",
			url: str_url+"?1",
			data: "symbol=" + this.value,
			success: function(xml) {
				var result = $(xml).find("result");
				$("#notice").html("");
				$("#dao_name").html($(result).find("name").text());
				$("#unit").html($(result).find("unit").text());
				$("#dao_id").val($(result).find("id").text());
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				$("#dao_name").html($("#dao").val());
				$("#notice").html("查" + $("#dao").val() + "无结果");
			}
		});
	});
	//-------------------------------------
	$("#size").blur(function() {
		$("#size_0").html(this.value);
		$.ajax({
			type: "POST",
			url: str_url+"?3",
			data: "dao_id=" + $("#dao_id").attr("value") + "&size=" + this.value,
			success: function(xml) {
				var result = $(xml).find("result");
				$("#notice").html("");
				$("#zzgs").html($(result).find("zzgs").text());
				$("#djgs").html($(result).find("djgs").text());
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				$("#notice").html("查" + $("#size").val() + "无结果");
			}
		});
	});
	//----------------------------------
	$("#date").blur(function() {
		$("#date0").html(this.value);
	});
	//----------------------------------
	$("#num").blur(function() {
		$("#num0").html(this.value);
	});
	//----------------------------------
	$("#add").click(function() {
		if ($("#worker_name").html() == "") {
			$("#notice").html("姓名为空!");
		} else if ($("#dao_name").html() == "") {
			$("#notice").html("刀具为空!");
		} else if ($("#size_0").html() == "") {
			$("#notice").html("规格为空!");
		} else if ($("#date0").html() == "") {
			$("#notice").html("日期为空!");
		} else {
			var td = $("<td/>");
			var tr = $("<tr/>");
			var id4data = $("#id4data");
			$("#notice").html("");
			i++;
			td.attr("width", "16px"); //	№
			td.html(i + '<input type="hidden" id="isUp" value="-1" />');
			tr.append(td);
			td = $("<td/>");
			td.attr("width", "68px"); //	姓名
			td.html($("#worker_name").html());
			$("#worker_name").html("");
			$(td).dblclick(function() {
				var x = $(this).text();
				var x0 = $("<input type='text' size='8' value='" + x + "'/>");
				$(x0).blur(function() {
					var x1 = this.value;
					$(this).parent().html(x1);
				});
				$(this).html(x0);
			});
			tr.append(td);
			td = $("<td/>");
			td.attr("width", "90px"); //	刀具
			td.html($("#dao_name").html());
			$(td).dblclick(function() {
				var x = $(this).text();
				var x0 = $("<input type='text' size='10' value='" + x + "'/>");
				$(x0).blur(function() {
					var x1 = this.value;
					$(this).parent().html(x1);
				});
				$(this).html(x0);
			});
			tr.append(td);
			$("#dao_name").html("");
			td = $("<td/>");
			td.attr("width", "20px"); //	单位
			td.html($("#unit").html());
			$(td).dblclick(function() {
				var x = $(this).text();
				var x0 = $("<input type='text' size='4' value='" + x + "'/>");
				$(x0).blur(function() {
					var x1 = this.value;
					$(this).parent().html(x1);
				});
				$(this).html(x0);
			});
			tr.append(td);
			$("#unit").html("");
			td = $("<td/>");
			td.attr("width", "35px"); //	规格
			td.html($("#size_0").html());
			$(td).dblclick(function() {
				var x = $(this).text();
				var x0 = $("<input type='text' size='4' value='" + x + "'/>");
				$(x0).blur(function() {
					var x1 = this.value;
					$(this).parent().html(x1);
				});
				$(this).html(x0);
			});
			tr.append(td);
			$("#size_0").html("");
			td = $("<td/>");
			td.attr("width", "44px"); //	准备工时
			td.html($("#zzgs").html());
			$(td).dblclick(function() {
				var x = $(this).text();
				var x0 = $("<input type='text' size='5' value='" + x + "'/>");
				$(x0).blur(function() {
					var x1 = this.value;
					$(this).parent().html(x1);
				});
				$(this).html(x0);
			});
			tr.append(td);
			$("#zzgs").html("");
			td = $("<td/>");
			td.attr("width", "44px"); //	单件工时
			td.html($("#djgs").html());
			$(td).dblclick(function() {
				var x = $(this).text();
				var x0 = $("<input type='text' size='5' value='" + x + "'/>");
				$(x0).blur(function() {
					var x1 = this.value;
					$(this).parent().html(x1);
				});
				$(this).html(x0);
			});
			tr.append(td);
			$("#djgs").html("");
			td = $("<td/>");
			td.attr("width", "16px"); //	数量
			td.html($("#num0").html());
			$(td).dblclick(function() {
				var x = $(this).text();
				var x0 = $("<input type='text' size='3' value='" + x + "'/>");
				$(x0).blur(function() {
					var x1 = this.value;
					$(this).parent().html(x1);
				});
				$(this).html(x0);
			});
			tr.append(td);
			td = $("<td/>");
			td.attr("width", "80px"); //	日期
			td.html($("#date0").html());
			$(td).dblclick(function() {
				var x = $(this).text();
				var x0 = $("<input type='text' size='10' value='" + x + "'/>");
				$(x0).blur(function() {
					var x1 = this.value;
					$(this).parent().html(x1);
				});
				$(this).html(x0);
			});
			tr.append(td);
			$("#date0").html("");
			tbody0.append(tr);
			$("#dao_id").val(0);
			//				$("#id4data").scrollTop(3000);
			//				$("#worker").setActive();
		}
	});
	//----------------------------------
	$("#update").click(function() {
		var num0 = 0;
		$("#notice").html("");
		$(tbody0).find("tr").each(function() {
			if ($("input", this).eq(0).val() == - 1) {
				var tr0 = this;
				$("input", this).eq(0).val(0);
				//				alert($("td", this).eq(0).text());
				$("#notice").html("上传第" + $("td", tr0).eq(0).text() + "记录中...");
				$.ajax({
					type: "POST",
					url: str_url+"?4",
					data: "name=" + $("td", this).eq(1).text() + "&dao=" + $("td", this).eq(2).text() + "&unit=" + $("td", this).eq(3).text() + "&zzgs=" + $("td", this).eq(5).text() + "&djgs=" + $("td", this).eq(6).text() + "&gg=" + $("td", this).eq(4).text() + "&num=" + $("td", this).eq(7).text() + "&date=" + $("td", this).eq(8).text(),
					success: function(xml) {
						$("#notice").html("上传第" + $("td", tr0).eq(0).text() + "记录完成");
						num0++;
						$("#notice").html("共上传" + num0 + "个记录");
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {
						$("#notice").html("请查看服务器");
					}
				});
			}

		});
	});
	//----------------------------------
	$("#qingkong").click(function() {
		tbody0.html("");
		i = 0;
	});
	//----------------------------------
	$("#caxu").click(function() {
		var date1 = $("#date_from").val();
		var date2 = $("#date_end").val();
		if (date1 == "") date1 = "1900-01-01";
		if (date2 == "") {
			var date3 = new Date();
			date2 = (date3.getYear() + 1900) + "-" + (date3.getMonth() + 1) + "-" + date3.getDate();
		}
		$("#notice").html("查询中...");
		$.ajax({
			type: "POST",
			url: str_url+"?6",
			data: "date_from=" + date1 + "&date_end=" + date2,
			success: function(xml) {
				//				var results = $(xml).find("results");
				$("#notice").html("OK!~");
				$(xml).find("result").each(function() {
					var td = $("<td/>");
					var tr = $("<tr/>");
					var id4data = $("#id4data");
					td.attr("width", "16px"); //	№
					td.html($(this).find("id").text());
					tr.append(td);
					td = $("<td/>");
					td.attr("width", "68px"); //	姓名
					td.html($(this).find("name").text());
					$("#worker_name").html("");
					tr.append(td);
					td = $("<td/>");
					td.attr("width", "90px"); //	刀具
					td.html($(this).find("dao").text());
					tr.append(td);
					$("#dao_name").html("");
					td = $("<td/>");
					td.attr("width", "20px"); //	单位
					td.html($(this).find("unit").text());
					tr.append(td);
					$("#unit").html("");
					td = $("<td/>");
					td.attr("width", "35px"); //	规格
					td.html($(this).find("gg").text());
					tr.append(td);
					$("#size_0").html("");
					td = $("<td/>");
					td.attr("width", "44px"); //	准备工时
					td.html($(this).find("zzgs").text());
					tr.append(td);
					$("#zzgs").html("");
					td = $("<td/>");
					td.attr("width", "44px"); //	单件工时
					td.html($(this).find("djgs").text());
					tr.append(td);
					$("#date0").html("");
					td = $("<td/>");
					td.attr("width", "16px"); //	其它
					td.html($(this).find("num").text());
					tr.append(td);
					$("#djgs").html("");
					td = $("<td/>");
					td.attr("width", "80px"); //	日期
					td.html($(this).find("date").text());
					tr.append(td);
					tbody0.append(tr);

				});
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				$("#notice").html("请查看服务器");
			}

		});
	});
	//----------------------------------
	$("#caxu2").click(function() {});
	//----------------------------------

});

