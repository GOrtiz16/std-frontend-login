const { execSync } = require('child_process');
const fs = require('fs');
const packageJson = require('./package.json');

function getGitInfo() {
  const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  const hash = execSync('git rev-parse HEAD').toString().trim();
  const comment = execSync('git log -1 --pretty=format:%s').toString().trim();
  const email = execSync('git log -1 --pretty=format:%ae').toString().trim();
  const auth = execSync('git log -1 --pretty=format:%an').toString().trim();
  // const dateRelative = execSync('git log -1 --pretty=format:%ar').toString().trim();
  const date = execSync('git log -1 --pretty=format:%ad --date=iso')
    .toString()
    .trim();

  return {
    branch,
    hash,
    comment,
    auth: `${auth} (${email})`,
    date
  };
}

function getAppInfo() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  // const dateStr = now.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const built = `${year}-${month}-${day} ${timeStr}`;
  const appName = packageJson.name;
  const appVersion = packageJson.version;
  const angular = packageJson.dependencies['@angular/core'].replace('^', 'v');

  return {
    built,
    appName,
    appVersion,
    angular
  };
}

const appInfo = getAppInfo();
const gitInfo = getGitInfo();

const info = {
  ...appInfo,
  commit: {
    ...gitInfo
  }
};

fs.writeFileSync('src/assets/commit-info.json', JSON.stringify(info, null, 2));
console.log('Commit info written to src/assets/commit-info.json');
