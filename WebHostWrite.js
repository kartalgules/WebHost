const http = require('http')
const port = 5000
const server = http.createServer((req,res)=>{
    const url = req.url
    if(url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(`<h2>Anasayfaya hoşgeldiniz..</h2>`)
    }else if (url === '/about'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(`<h2>Hakımda sayfasına hoşgeldiniz..</h2>`)
    }else if(url === '/contact'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(`<h2>İletişim sayfasına hoşgeldiniz..</h2>`)
    }else{
        res.writeHead(404, {'Content-Type':'text/html'})
        res.write(`<h2>Sayfa Bulunamadı..</h2>`)
    }
    res.end()
})

server.listen(port, ()=>{
    console.log(`Sunucuya port ${port} ile bağlanıldı..`)
})
