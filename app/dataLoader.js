const path = require('path')
const fs = require('fs-extra')

function fileInfo(fileName, dir) {
    return {
        slug: fileName.substr(0, fileName.indexOf('.json')),
        name: fileName,
        path: path.join(dir, fileName)
    }
}

function readFile(fileInfo) {
    return fs
        .readJson(fileInfo.path)
        .then(content => Object.assign(content, { _slug: fileInfo.slug }))
}

class DataLoader {

    constructor(dir) {
        this.dir = dir;
    }

    /* merchandise */
    async merchandise() {
        const fileInfos = (await fs.readdir(this.dir + "/merchandise")).map(fileName => fileInfo(fileName, this.dir + "/merchandise"))
        return Promise.all(fileInfos.map(readFile))
    }
    /* singleproduct not in use */
    async single(slug) {
        const fileInfos = (await fs.readdir(this.dir)).map(fileName => fileInfo(fileName, this.dir))
        var found = fileInfos.find(file => file.slug === slug)
        return found ? readFile(found) : null

    }

}


module.exports = DataLoader