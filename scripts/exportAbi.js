// scripts/exportAbi.js
const fs = require('fs');
const path = require('path');

const artifact = path.join(__dirname, '..', 'artifacts', 'contracts', 'SimpleStorage.sol', 'SimpleStorage.json');
const outDir   = path.join(__dirname, '..', 'abi');
const outFile  = path.join(outDir, 'SimpleStorage.json');

if (!fs.existsSync(artifact)) {
  console.error('[exportAbi] Hardhat artifact not found:', artifact);
  // Покажем, что есть рядом — для отладки в Summary логи подтянем из предыдущего шага
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(artifact, 'utf8'));
if (!data.abi) {
  console.error('[exportAbi] ABI field not found in artifact');
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(data.abi, null, 2));
console.log(`[exportAbi] ABI exported to ${outFile} (${data.abi.length} entries)`);
