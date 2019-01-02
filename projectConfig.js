const projectName = require('./project')

const config = {
  //中投路演
  'zhongtou':{
    indexPath:'../../Apps/Simuwang/View/Subject/zhongtouroadshow.html',
    template:'./src/projects/zhongtou/',
    outputDir:'../../Public/zhongtou'
  },
  //玖富
  'loadshow':{
    indexPath:'../../Apps/Simuwang/View/LoadShow/index.html',
    template:'./src/projects/loadshow/',
    outputDir:'../../Public/loadShow'
  },
  //第七届对冲基金年会
  'Annual':{
    indexPath:'../../Apps/Simuwang/View/Annual/index.html',
    template:'./src/projects/Annual/',
    outputDir:'../../Public/Annual'
  },
  'test':{
    indexPath:'../../Apps/Simuwang/View/test/index.html',
    template:'./src/projects/test/',
    outputDir:'../../Public/test'
  }
}

const configObj = config[projectName.name]
module.exports = configObj
