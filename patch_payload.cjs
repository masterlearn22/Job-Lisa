const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

const oldPayload = `      const payload = {
        title: jobFormData.title.trim(),
        division_id: parseInt(jobFormData.division_id, 10) || 1,
        location: jobFormData.location.trim(),
        type: jobFormData.type,
        experience: jobFormData.experience.trim(),
        education: jobFormData.education.trim(),
        deadline: jobFormData.deadline.trim(),
        status: jobFormData.status,
        description: jobFormData.description.trim(),
        requirements: reqList,
        benefits: benList
      };`;

const newPayload = `      const isEditPayload = jobModalMode === 'edit' && jobFormData.id;
      const payload = {
        action: 'saveJob',
        id: isEditPayload ? jobFormData.id : undefined,
        title: jobFormData.title.trim(),
        division_id: parseInt(jobFormData.division_id, 10) || 1,
        location: jobFormData.location.trim(),
        type: jobFormData.type,
        experience: jobFormData.experience.trim(),
        education: jobFormData.education.trim(),
        deadline: jobFormData.deadline.trim(),
        status: jobFormData.status,
        description: jobFormData.description.trim(),
        requirements: jobFormData.requirements.trim(),
        benefits: jobFormData.benefits.trim()
      };`;

// Replace ignoring whitespace
const regex = /const payload = \{\s*title: jobFormData\.title\.trim\(\),\s*division_id: parseInt\(jobFormData\.division_id, 10\) \|\| 1,\s*location: jobFormData\.location\.trim\(\),\s*type: jobFormData\.type,\s*experience: jobFormData\.experience\.trim\(\),\s*education: jobFormData\.education\.trim\(\),\s*deadline: jobFormData\.deadline\.trim\(\),\s*status: jobFormData\.status,\s*description: jobFormData\.description\.trim\(\),\s*requirements: reqList,\s*benefits: benList\s*\};/g;

content = content.replace(regex, newPayload);

fs.writeFileSync('src/App.jsx', content);
