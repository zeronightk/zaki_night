console.log('Starting...')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts  = require('cfonts')
CFonts.say('Lightweight\nWhatsApp Bot', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})

/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.kill()
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', code => {
    console.error('Exited with code:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
    })
  })
  // console.log(p)
}

start('main.js')

//qrCode
async function start() {
  const zaki = new WaConnection();
  const client = zaki;
  zaki.logger.level = 'warn'
  console.log(banner.string);
  zaki.on('qr1, () => {
          
          console.log(color('[','white'), color('!','red'), color(']','white'), color('Escaneie o QR Code'));
 })

fs.existsSync('./docs/qrcode.json') && zaki.loadAuthInfo('./docs/qrcode.json');
zaki.on('connecting', () => {
spinLoad();
})
zaki.on('open', () => {
spinOn();
try {
var iii = zaki.user.jid
var kkk = Math.floor(Math.random() * (12 - 2) + 2);

zaki.setStatus(`Estou online desde às ${hours}`)
  
  // #prefix 
var prefix = '/' JSON.parse(fs.readFileSync('./edit/prefix.json'));
  
  //#pv
if (!isOwner) if (isPv) if (!isGroup) {
reply (`📍 *Funcionamos apenas em grupos*\n\n${grupoDono}\n\Vc será bloqueado em seguida`)
setTimeout( () => {
zaki.blockUser(sender, 'add')
}, 5000)
}
///
  
  

  

  
