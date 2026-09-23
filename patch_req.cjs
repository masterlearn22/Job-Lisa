const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

const replacement = `
            requirements: (() => {
              if (Array.isArray(j.requirements)) return j.requirements;
              if (typeof j.requirements === 'string') {
                try { return JSON.parse(j.requirements); } catch(e) {}
                if (j.requirements.includes('\\n')) return j.requirements.split('\\n').map(s=>s.trim()).filter(Boolean);
                if (j.requirements.includes(',')) return j.requirements.split(',').map(s=>s.trim()).filter(Boolean);
                if (j.requirements) return [j.requirements];
              }
              return [];
            })(),
            benefits: (() => {
              if (Array.isArray(j.benefits)) return j.benefits;
              if (typeof j.benefits === 'string') {
                try { return JSON.parse(j.benefits); } catch(e) {}
                if (j.benefits.includes('\\n')) return j.benefits.split('\\n').map(s=>s.trim()).filter(Boolean);
                if (j.benefits.includes(',')) return j.benefits.split(',').map(s=>s.trim()).filter(Boolean);
                if (j.benefits) return [j.benefits];
              }
              return [];
            })()
`;

content = content.replace(
  /requirements:\s*Array\.isArray\(j\.requirements\)\s*\?\s*j\.requirements\s*:\s*\[\],\s*benefits:\s*Array\.isArray\(j\.benefits\)\s*\?\s*j\.benefits\s*:\s*\[\]/g,
  replacement.trim()
);

fs.writeFileSync('src/App.jsx', content);
