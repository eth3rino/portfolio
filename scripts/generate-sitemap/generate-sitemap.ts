import { LAB_ENTRIES } from '../../src/app/lab/lab-data/lab-data'
import { write, writeFile, writeFileSync } from 'node:fs';

const DOMAIN = 'https://elianmeaca.vercel.app';

const staticRoutes = ['', 'work', 'lab'];
const labRoutes = LAB_ENTRIES.map((entry) => `lab/${entry.id}`)

const urls = [...staticRoutes, ...labRoutes];

const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(u => `  <url><loc>${DOMAIN}/${u}</loc></url>`).join('\n')}
    </urlset>
`;


writeFileSync('public/sitemap.xml', xml);
console.log(`sitemap.xml generated with ${urls.length} URLs`);