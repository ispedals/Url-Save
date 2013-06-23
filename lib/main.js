require("sdk/widget").Widget({
	id: "save-display",
	label: "Save Url",
	content: "\u2A01 Save URL",
	width: 50,
	onClick: function() {
		var url=require("sdk/tabs").activeTab.url;
		var {Cc,Ci} = require('chrome');
		var file = Cc['@mozilla.org/file/local;1'].createInstance(Ci.nsILocalFile);
		file.initWithPath("C:\\Users\\Owner\\Desktop\\urls.txt");
		var myFile = Cc["@mozilla.org/network/file-output-stream;1"].createInstance(Ci.nsIFileOutputStream);
		myFile.init(file, 0x02 | 0x10, 0666, 0);
		url += '\r\n';
		myFile.write(url, url.length);
		myFile.close();
	}
});