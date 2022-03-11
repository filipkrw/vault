const isWsl = os.release().indexOf("WSL") > -1;
const basePath = isWsl
  ? windowsPathToWslPath(config.basePath)
  : config.basePath;

function windowsPathToWslPath(winPath) {
  return winPath.replace(/^([a-zA-z]):/, (_, diskLetter) => {
    return `/mnt/${diskLetter.toLowerCase()}`;
  });
}
