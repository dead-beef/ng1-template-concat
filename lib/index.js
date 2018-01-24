const path = require('path');
const fs = require('fs');

module.exports = {
	html: function(root, files) {
		let ret = '';
		for(let file of files) {
			let relpath = path.relative(root, file);
			ret += '<script type="text/ng-template" id="'.concat(
				relpath, '">\n', fs.readFileSync(file),
				'</script>\n'
			);
		}
		return ret;
	}
};
