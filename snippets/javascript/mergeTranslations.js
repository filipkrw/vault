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

