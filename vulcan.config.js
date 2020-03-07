const vulcan = {
	name: 'library',
	version: '1.0.0',
	fields: {
		pkg: {
			description: 'NPM package name',
			type: 'string',
			pattern: '^[0-9a-z\\$\\-\\+\\!\\*\\\'\\(\\)][0-9a-zA-Z\\$\\-\\_\\.\\+\\!\\*\\\'\\(\\)]{0,213}$',
			patternDescription: 'Must match NPM naming scheme (alphanumeric, no spaces, cannot start with a . or _ or capital letter)',
			required: true
		},
		description: 'Package description',
		name: 'Display name of package',
		npmAuthor: 'NPM package author',
		ghRepoName: {
			description: 'GitHub repo name',
			required: true
		},
		ghAuthor: {
			description: 'GitHub repo owner',
			required: true
		}
	}
};

module.exports = vulcan;
