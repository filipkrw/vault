function getTimeZone() {
  /*
    Returns one of the tz database time zones
    https://www.wikiwand.com/en/List_of_tz_database_time_zones
  */
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function timeFormatLocalized(timeZone, locale) {
  /*
    `timeZone` is one of the tz database time zones
    https://www.wikiwand.com/en/List_of_tz_database_time_zones
  */
  const locales = [locale, "en"]; // en fallback

  const formattedTimeZone = new Intl.DateTimeFormat(locales, {
    timeZoneName: "short",
    timeZone,
  })
    .formatToParts()
    .find((x) => x.type === "timeZoneName").value;

  const formattedTime = new Intl.DateTimeFormat(locales, {
    timeStyle: "short",
    timeZone,
  }).format(new Date());

  return { time: formattedTime, timeZone: formattedTimeZone };
}
