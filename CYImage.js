var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum erat ac justo sollicitudin, quis lacinia ligula fringilla. Pellentesque hendrerit, nisi vitae posuere condimentum, lectus urna accumsan libero, rutrum commodo mi lacus pretium erat. Phasellus pretium ultrices mi sed semper. Praesent ut tristique magna. Donec nisl tellus, sagittis ut tempus sit amet, consectetur eget erat. Sed ornare gravida lacinia. Curabitur iaculis metus purus, eget pretium est laoreet ut. Quisque tristique augue ac eros malesuada, vitae facilisis mauris sollicitudin. Mauris ac molestie nulla, vitae facilisis quam. Curabitur placerat ornare sem, in mattis purus posuere eget. Praesent non condimentum odio. Nunc aliquet, odio nec auctor congue, sapien justo dictum massa, nec fermentum massa sapien non tellus. Praesent luctus eros et nunc pretium hendrerit. In consequat et eros nec interdum. Ut neque dui, maximus id elit ac, consequat pretium tellus. Nullam vel accumsan lorem.';
// 注意：这里的代码只是对上面的句子进行分词并计算权重（重复次数）并构建词云图需要的数据，其中 arr.find 和 
// 	reduce 函数可能在低版本 IE 中无法使用（属于ES6新增的函数），如果不能正常使用（对应的函数有报错），请自行加相应的 Polyfill
//  array.find 的 ployfill 参见：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find#Polyfill
// 	array.reduce 的 ployfill ：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Polyfill
var data = text.split(/[,\. ]+/g)
	.reduce(function (arr, word) {
		var obj = arr.find(function (obj) {
			return obj.name === word;
		});
		if (obj) {
			obj.weight += 1;
		} else {
			obj = {
				name: word,
				weight: 1
			};
			arr.push(obj);
		}
		return arr;
	}, []);
Highcharts.chart('container', {
	series: [{
		type: 'wordcloud',
		data: data
	}],
	title: {
		text: '词云图'
	}
});


function getLocation() {
	// 百度地图API功能
	var geolocation = new BMap.Geolocation();
	navigator.geolocation.getCurrentPosition();
	alert(navigator.geolocation.getCurrentPosition()+ '123');
	// geolocation.getCurrentPosition(function (r) {
	// 	if (this.getStatus() == BMAP_STATUS_SUCCESS) {
	// 		var geoc = new BMap.Geocoder();
	// 		geoc.getLocation(r.point, function (rs) {
	// 			var addComp = rs.addressComponents;
	// 			locationSuccess(r.point.lng, r.point.lat, addComp.province, addComp.city, addComp.district, addComp.street, addComp.streetNumber);
	// 		});
	// 	}
	// 	else {
	// 		return null;
	// 	}
	// }, { enableHighAccuracy: true })
}

function check() {

	return "now wifi";
}