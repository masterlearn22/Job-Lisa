const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// Patch handleToggleJobStatus
content = content.replace(
  /body: JSON\.stringify\(\{ action: 'updateJobStatus', id: job\.id, status: newStatus \}\)/g,
  `body: JSON.stringify({ action: 'updateJobStatus', id: job.id, status: nextStatus })`
);

// Patch handleDeleteJob
const oldDelete = `const res = await fetch(\`\$\{API_BASE_URL\}/api/jobs/\$\{job.id\}\`, {
          method: 'DELETE'
        });`;

const newDelete = `await fe tch(\`\$\{API_BASE_URL\}\`, {
          method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({ action: 'deleteJob', id: job.id })
        });
        const res = { ok: true };`;

content = content.replace(oldDelete, newDelete);

fs.writeFileSync('src/App.jsx', content);
