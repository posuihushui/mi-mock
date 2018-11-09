const Mock = require('mockjs')
const Random = Mock.Random


const generateActivityList = (len)=>{
    let data = []

    for(let i = 0; i < len; i++){
        data.push({
            id: 1000 + i,
            createTime: Random.datetime('yyyy.MM.dd HH:mm:ss'),
            activityDesc: Random.cparagraph(1,1),
            activityType: Math.floor(Math.random()*3),
            bannerName: Random.word(4,6),
            bannerImage: Random.image('880x220'),
            bannerLink:{
                type: Math.floor(Math.random()*3),
                link:Random.url()
            },
            techniqueList:(new Array(3)).map(()=>{
                return {
                    icon: Random.image('200x200'),
                    server: Random.word(4,6),
                    query: Random.word(4,8),
                    type: Math.floor(Math.random()*3),
                    link:Random.url(),
                    id: Math.floor(Math.random()*100)
                }
            })
        })
    }
    
    return {
        code: 0,
        data,
        msg: null
    }
}  

module.exports =  generateActivityList