const { argv } = require('process')
const si = require('systeminformation')

getInfo()

async function getInfo() {
    const cpu = await si.cpu();
    const disk = (await si.diskLayout())[0];
    const os = await si.osInfo();
    const versions = await si.versions();
    const ram = await si.mem();
    
    console.log(cpu.speed)
}