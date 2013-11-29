

(function() {

	var StatusDisplay = function(options) {

		var _github = new Github({ username: options.username });
		var _user = _github.getUser();

		function displayReposForOrg(org) {
			_user.orgRepos(org, function(err, repos) {
				if(!err) {
					for(var i = 0; i < repos.length; i++) {
						console.log(repos[i].name);
					}
				}
			});
		}

		if (typeof exports !== 'undefined') {
			module.exports = StatusDisplay;
		} else {
			window.StatusDisplay = StatusDisplay;
		}
	}

}).call(this);