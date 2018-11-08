const Mock = require('mockjs')
const Random = Mock.Random


const generateActivityList = (len)=>{
    let data = []

    for(let i = 0; i < len; i++){
        data.push({
            id: 1000 + i,
            createTime: Random.datetime('yyyy.MM.dd HH:mm:ss'),
            desc: Random.word(3,10),
            activityType: len % 3,
            bannerName: Random.word(3,6)
        })
    }
    
    return {
        code: 0,
        data,
        msg: null
    }
}  

module.exports =  generateActivityList