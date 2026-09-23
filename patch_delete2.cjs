const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

const regexDelete = /const res = await fetch\(`\$\{API_BASE_URL\}\/api\/jobs\/\$\{job\.id\}`,\s*\{\s*method:\s*'DELETE'\s*\}\);/g;
const newDelete = `await fetch(\`\${API_BASE_URL}\`, {
          method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({ action: 'deleteJob', id: job.id })
        });
        const res = { ok: true };`;

content = content.replace(regexDelete, newDelete);
fs.writeFileSync('src/App.jsx', content);
