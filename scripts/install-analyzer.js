const { platform, arch } = process;
if (platform === 'win32' && arch === 'x64') {
  require('child_process').execSync(
    'npm i -D @nomicfoundation/solidity-analyzer-win32-x64-msvc --no-save',
    { stdio: 'inherit' }
  );
}
