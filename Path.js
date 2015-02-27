var Path = {
	DirectorySeparatorChar:'/',
	
	getDirectoryName:function(path){
		for (var i=0; i < path.length; i++){
			if (path.charAt(i) === this.DirectorySeparatorChar)
				return path.substr(i+1);
		}
		return path;
	},
	
	getExtension:function(path){
		for (var i=path.length-1; i>=0; i--){
			var ch = path.charAt(i);
			if (ch === this.DirectorySeparatorChar)
				break;
			if (ch === '.')
				return path.substr(i);
		}
		return '';
	},
	
	combine:function(path1, path2){
		if (path1 === '')
			return path2;
		if (path2 === '')
			return path1;
		if (path1.charAt(path1.length-1) === this.DirectorySeparatorChar)
			return path1 + path2;
		else
			return path1 + this.DirectorySeparatorChar + path2;
	},
	
	test:function(){
		console.log(
			'Path.getExtension("c:/dir1/file1.jpg") = ' +
			Path.getExtension("c:/dir1/file1.jpg"));
		console.log(
			"Path.combine('c:/dir1', 'file2.jpg') = " +
			Path.combine('c:/dir1', 'file2.jpg'));
		console.log(
			"Path.combine('c:/dir1/', 'file2.jpg') = " +
			Path.combine('c:/dir1/', 'file2.jpg'));
	}
};
Path.test();
