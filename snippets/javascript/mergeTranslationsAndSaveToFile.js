const fs = require('fs');

function mergeTranslations(a, b) {  
  const merged = {};
  const langs = [...Object.keys(a), ...Object.keys(b)];
  
  langs.forEach((lang) => {
    merged[lang] = {
      ...a[lang],
      ...b[lang],
    };
  });
  
  return merged;
}

function saveObjectToFile(obj, filePath) {
  const data = JSON.stringify(obj);
  fs.writeFile(filePath, data, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Object saved to file: ${filePath}`);
    }
  });
}

function mergeTranslationsAndSaveToFile(a, b, filePath) {
  const merged = mergeTranslations(a, b);
  saveObjectToFile(merged, filePath);
}
