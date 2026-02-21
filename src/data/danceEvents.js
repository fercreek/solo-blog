export const danceEvents = [
  {
    id: 'timbal-2019',
    title: 'Timbal Latin Dance Congress 2019',
    summary: '🥈',
    singleLine: true,
    html: '[🥈2nd place - Fuego Latino Men Shines](https://www.facebook.com/TIMBALDANCECONGRESS/videos/576061669623842/UzpfSTczNjExMDI1NzoxMDE2Mjg1OTA3NDY3MDI1OA/?q=timbal%20congress%20men%20shine&epa=SEARCH_BOX)'
  },
  {
    id: 'mambolee-2020',
    title: 'Mambolee One Dance Congress 2020',
    summary: '🥇',
    singleLine: true,
    html: '[🥇1st place - Fuego Latino Men Shines](https://www.facebook.com/MamboleeONE/videos/179732403335733)'
  },
  {
    id: 'mambolee-2022',
    title: 'Mambolee One Dance Congress 2022',
    count: 4,
    items: [
      '[🥈2nd place - Fuego Latino Bachata Men shines](https://fb.watch/eKrEuaRkHy/)',
      '[Pa que me perdones - Bachata Solista Alumno](https://fb.watch/bBoIn6JN3X/)',
      '[Via Perico - Salsa Solista Alumno](https://fb.watch/bBoI_zIexG/)',
      '[Catalogo de amor - Bachata Pareja Alumno](https://fb.watch/bBoL8l1idM/)'
    ]
  },
  {
    id: 'bks-2022',
    title: 'BKS Festival 2022',
    count: 3,
    items: [
      '[Bachata Solista Alumno](https://www.facebook.com/793921981/videos/417107049784576/)',
      '[Bachata Grupos](https://fb.watch/eKN1MF6Igg/)',
      '[Bachata Men Shines](https://www.facebook.com/793921981/videos/441330537751269/)'
    ]
  },
  {
    id: 'olimpo-2022',
    title: 'Olimpo 2022',
    count: 3,
    items: [
      '[🥇1st place - Bachata Solista Alumno](https://fb.watch/eKM4U2y98N/)',
      '[Bachata Duo](https://fb.watch/eKM63pUadb/)',
      'Salsa Solista Alumno'
    ]
  },
  {
    id: 'hobby-2022',
    title: 'Hobby SalsaFest 2022',
    count: 3,
    items: [
      '[Bachata Solista Alumno](https://fb.watch/eKs4qvOs0P/)',
      '[Bachata Grupos Alumnos](https://fb.watch/eKLFtTUPiy/)',
      '[Salsa Duos Shines](https://fb.watch/eKLI77CUrQ/)'
    ]
  },
  {
    id: 'mambolee-2023',
    title: 'Mambolee One Dance Congress 2023',
    summary: '🥇',
    singleLine: true,
    html: '[🥇1st place - Bachata Solista Alumno](https://fb.watch/p0GhSp1EXg/)'
  },
  {
    id: 'imperio-2023',
    title: 'Imperio Latino 2023',
    summary: '🥈',
    singleLine: true,
    html: '[🥈2nd place - Bachata Solista Alumno](https://fb.watch/p0Gnlmw2pp/)'
  },
  {
    id: 'euroson-2023',
    title: 'Euroson Latino Dance Congress 2023',
    count: 2,
    items: [
      '[🥈2nd place - Bachata Solista Alumno](https://fb.watch/p0GzPkXBZU/)',
      '[🥉3rd place - Salsa Solista Alumno](https://fb.watch/p0GtQBRcIm/)'
    ]
  },
  {
    id: 'mambolee-2024',
    title: 'Mambolee One Dance Congress 2024',
    count: 7,
    items: [
      '[🥇1st place - Bachata Solista Alumno](https://www.facebook.com/100041993030366/videos/909271574226046/)',
      '🥈2nd place - Bachata Pareja Pro-al',
      '🥈2nd place - Bachata Pareja Alumno',
      '🥈2nd place - Bachata Mixto Open',
      '🥉3rd place - Bachata Duo Open',
      '🥉3rd place - Salsa Duo Open',
      'Salsa Solista Alumno'
    ]
  },
  {
    id: 'beach-2024',
    title: 'Beach Latin Fest 2024',
    count: 2,
    items: [
      '[🥇1st place - Bachata Solista Am-Al](https://www.facebook.com/BeachLatinFriends/videos/1021641623088761)',
      '[🥇1st place - Salsa Solista Alumno](https://www.facebook.com/BeachLatinFriends/videos/1029371465647551)'
    ]
  },
  {
    id: 'brisa-2024',
    title: 'Brisa Latin Cup 2024',
    count: 8,
    items: [
      '🥇1st place - Bachata Solista Am',
      '🥇1st place - Bachata Team Shine Mixto',
      '🥇1st place - Bachata Duo Open',
      '🥈2nd place - Bachata Parejas Open',
      '🥈2nd place - Bachata Solista Open',
      '🥈2nd place - Salsa Solista Alumno',
      '🥉3rd place - Salsa Duo Open',
      '5th place - Salsa Solista Open'
    ]
  },
  {
    id: 'mambolee-2025',
    title: 'Mambolee One Dance Congress 2025',
    count: 6,
    items: [
      '🥇1st place - Bachata Parejas Am-al',
      '🥈2nd place - Bachata Men Shines Open',
      '🥈2nd place - Salsa Team Shines Mixto Open (Regios Team)',
      '4th place - Bachata Grupos Open',
      '5th place - Bachata Solista Amateur',
      '7th place - Salsa Solista Amateur'
    ]
  },
  {
    id: 'mambolee-2026',
    title: 'Mambolee One 2026',
    count: 4,
    items: [
      '🥇 Bachata dúo mixto open',
      '🥈 Bachata men shines open',
      '🥈 Bachata pareja am-al',
      '🥈 Bachata grupo mixto'
    ]
  }
];

const countMedal = (str) => ({
  gold: (str.match(/🥇/g) || []).length,
  silver: (str.match(/🥈/g) || []).length,
  bronze: (str.match(/🥉/g) || []).length
});

export const getDanceStats = () => {
  let gold = 0, silver = 0, bronze = 0;
  danceEvents.forEach((event) => {
    if (event.singleLine && event.html) {
      const c = countMedal(event.html);
      gold += c.gold;
      silver += c.silver;
      bronze += c.bronze;
    }
    if (event.items) {
      event.items.forEach((item) => {
        const c = countMedal(item);
        gold += c.gold;
        silver += c.silver;
        bronze += c.bronze;
      });
    }
  });
  return {
    congresses: danceEvents.length,
    gold,
    silver,
    bronze
  };
};
