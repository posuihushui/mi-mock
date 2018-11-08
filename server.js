// 生成db.json代码
const jsonfile = require('jsonfile') 
const jsonServer = require('json-server')
const generateActivityList = require('./generate.js') 
const fs = require('fs')
// server.js
const server = jsonServer.create()
const testData = {
    "posts": [
        { "id": 1, "title": "json-server", "author": "typicode" }
    ],
}

let data = {}

const jsonOptions = { 
    spaces: 2
}

async function app (){
    const activityList = generateActivityList(10)
    data['activity-list'] = activityList
    data = {
        ...data,
        ...testData
    }


    await fs.unlink('./dbs/db.json')
    console.log('*** db.json删除成功 ***')
    await jsonfile.writeFile('./dbs/db.json', data, jsonOptions)
    console.log('*** db.json创建成功 ***')
    
 
    const router = jsonServer.router('./dbs/db.json')
    const middlewares = jsonServer.defaults()
    server.use(middlewares)
    server.use(router)
    server.listen(3000, () => {
        console.log('JSON Server is running at port 3000')
    })
}


app()