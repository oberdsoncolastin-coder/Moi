const http = require('http')
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, 'dist')
const port = Number(process.env.PORT || 3000)

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
}

http
  .createServer((req, res) => {
    const url = decodeURIComponent((req.url || '/').split('?')[0])
    let filePath = path.join(root, url)

    if (!filePath.startsWith(root)) {
      res.writeHead(403).end('Forbidden')
      return
    }

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(root, 'index.html')
    }

    const ext = path.extname(filePath)
    res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' })
    fs.createReadStream(filePath).pipe(res)
  })
  .listen(port, '0.0.0.0', () => {
    console.log(`Oberlast static server listening on 0.0.0.0:${port}`)
  })
