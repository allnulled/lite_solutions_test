/************************************************************************
 * 
 * Previously you have to install these packages:
 * 
 * ~ npm i -D rimraf fs-extra execute-command-sync
 * 
 * 
 * Also, you have to specify the repository.url in package.json, or:
 * 
 * ~ git init
 * 
 * 
 * Then, you only have to:
 * 
 * ~ node dev/upload-to-ghpages.js
 * 
 * 
 *************************************************************************/

 const SETTINGS = {
	gitRepositoryURL: require(__dirname + "/../package.json").repository.url.replace(/^git\+/g,""),
	temporaryFolder: __dirname + "/../temporary",
	distributionFolder: __dirname + "/../dist",
	projectFolder: __dirname + "/.."
};
const rimraf = require("rimraf");
const path = require("path");
const fs = require("fs-extra");
const exec = require("execute-command-sync");
///////////////////////////////////////////////////////////////////////////
// 1. BUILD VUE PROJECT:
const buildProject = function() {
	exec("npm run build", { cwd: SETTINGS.projectFolder });
};
///////////////////////////////////////////////////////////////////////////
// 2. CLONE GH-PAGES BRANCH TO A TEMPORARY FOLDER:
const cloneGHPagesBranchToTemporary = function() {
	try {
		fs.mkdirSync(SETTINGS.temporaryFolder);
	} catch(error) {}
	exec(`git clone ${SETTINGS.gitRepositoryURL} . --branch gh-pages`, { cwd: SETTINGS.temporaryFolder });
};
///////////////////////////////////////////////////////////////////////////
// 3. COPY TEMPORARY FOLDER TO DIST FOLDER AGAIN:
const copyGHPagesGitFromTemporaryToDist = function() {
	const gitFolder = path.resolve(SETTINGS.temporaryFolder, ".git");
	const gitFolderDist = path.resolve(SETTINGS.distributionFolder, ".git");
	fs.copySync(gitFolder, gitFolderDist);
};
///////////////////////////////////////////////////////////////////////////
// 4. REMOVE TEMPORARY FOLDER:
const removeTemporary = function() {
	rimraf.sync(SETTINGS.temporaryFolder);
};
///////////////////////////////////////////////////////////////////////////
// 5. PUBLISH DIST FOLDER TO GH-PAGES BRANCH:
const publishToGHPages = function() {
	exec("git add .", { cwd: SETTINGS.distributionFolder });
	exec("git commit", { cwd: SETTINGS.distributionFolder });
	exec("git push", { cwd: SETTINGS.distributionFolder });
};
console.log("[UPLOADING APPLICATION TO GH-PAGES]");
console.log("[BUILD PROJECT]");
buildProject();
console.log("[CLONE GITHUB PAGES BRANCH TO TEMPORARY FOLDER]");
cloneGHPagesBranchToTemporary();
console.log("[COPY GITHUB PAGES .GIT FOLDER FROM TEMPORARY TO DISTRIBUTION]");
copyGHPagesGitFromTemporaryToDist();
console.log("[REMOVE TEMPORARY FOLDER]");
removeTemporary();
console.log("[PUBLISH APPLICATION TO GITHUB PAGES]");
publishToGHPages();
console.log("[UPLOADED APPLICATION TO GH-PAGES]");
