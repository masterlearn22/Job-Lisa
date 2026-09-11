const pool = require('./config/db');
const fs = require('fs');
const path = require('path');

async function exportDatabase() {
  try {
    const [tables] = await pool.query('SHOW TABLES');
    let sql = `-- ====================================================\n`;
    sql += `-- DATABASE EXPORT: hrd_job_portal\n`;
    sql += `-- PT Lisa Concrete Indonesia - Portal Rekrutmen\n`;
    sql += `-- Tanggal Export: ${new Date().toLocaleString('id-ID')}\n`;
    sql += `-- ====================================================\n\n`;
    sql += `CREATE DATABASE IF NOT EXISTS \`hrd_job_portal\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\n`;
    sql += `USE \`hrd_job_portal\`;\n\n`;

    for (const tableObj of tables) {
      const tableName = Object.values(tableObj)[0];
      const [[createResult]] = await pool.query(`SHOW CREATE TABLE \`${tableName}\``);
      
      sql += `-- ----------------------------------------------------\n`;
      sql += `-- Struktur tabel: \`${tableName}\`\n`;
      sql += `-- ----------------------------------------------------\n`;
      sql += `DROP TABLE IF EXISTS \`${tableName}\`;\n`;
      sql += createResult['Create Table'] + ';\n\n';

      const [rows] = await pool.query(`SELECT * FROM \`${tableName}\``);
      if (rows.length > 0) {
        sql += `-- Data tabel: \`${tableName}\` (${rows.length} baris)\n`;
        for (const row of rows) {
          const columns = Object.keys(row).map(col => `\`${col}\``).join(', ');
          const values = Object.values(row).map(val => {
            if (val === null) return 'NULL';
            if (val instanceof Date) {
              return `'${val.toISOString().slice(0, 19).replace('T', ' ')}'`;
            }
            if (typeof val === 'object') {
              return `'${JSON.stringify(val).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
            }
            if (typeof val === 'number') return val;
            return `'${val.toString().replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
          }).join(', ');

          sql += `INSERT INTO \`${tableName}\` (${columns}) VALUES (${values});\n`;
        }
        sql += '\n';
      }
    }

    const exportPath = path.join(__dirname, 'hrd_job_portal_backup.sql');
    fs.writeFileSync(exportPath, sql, 'utf8');
    console.log(`\n✅ SUKSES: Database berhasil diekspor ke: ${exportPath}\n`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Gagal mengekspor database:', err);
    process.exit(1);
  }
}

exportDatabase();
