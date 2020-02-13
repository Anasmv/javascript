	function getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}
	
	//Usage:
	// query string: ?value1=1&value2=&2
	var v = getParameterByName('value1'); // "1"
	var qq = getParameterByName('qux'); // null (absent)
	alert(v);
	alert(qq);

