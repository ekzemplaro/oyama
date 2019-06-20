// -----------------------------------------------------------------------
//	benkyoukai.js
//
//					May/11/2019
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").text ("*** benkyoukai *** start ***")

	var file_in = ""
	file_in = "./may11_2019.json"
	proc01(file_in,".contents_a")

	jQuery("#outarea_hh").text ("*** benkyoukai *** end ***")
})
// -----------------------------------------------------------------------
function proc01 (file_in,area_out)
{
	jQuery("#outarea_bb").text ("*** proc01 *** start ***")

	var data_text = ""


	jQuery.getJSON (file_in,function (data_aa)
		{
		var str_out = ""
		str_out += "<table>"
		str_out += "<tr>"
		str_out += "<th>順番</th>"
		str_out += "<th>語り手</th>"
		str_out += "<th>作品名</th>"
		str_out += "<th>出典本</th>"
		str_out += "<th>出版社</th>"
		str_out += "<th>時間</th>"
		str_out += "</tr>"

		str_out += gen_record_proc(data_aa)
	
		str_out += "</table>"

		jQuery(area_out).html (str_out)
		})


}

// -----------------------------------------------------------------------
function gen_record_proc(data_aa)
{
	var str_out = ""

	for (var key in data_aa)
		{
		const unit_aa = data_aa[key]
		str_out += "<tr>"
		str_out += "<td>" + key + "</td>"
		str_out += "<td>" + unit_aa.teller + "</td>"
		str_out += "<td>" + unit_aa.title + "</td>"
		str_out += "<td>" + unit_aa.book + "</td>"
		str_out += "<td>" + unit_aa.publisher + "</td>"
		str_out += "<td>" + unit_aa.duration + "</td>"

		str_out += "</tr>"
		}

	return	str_out
}

// -----------------------------------------------------------------------
