const {print} = require("./util")
const path = require('path');
const fs = require('fs');



const gitignore = `**/.idea
**/.DS_Store
**/xcuserdata
**/xcshareddata
`

const exist = (path) => { // 폴더 존제 확인 함수
    print(path)
    try {
        fs.accessSync(path, fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK);
        return true;
    } catch (e) {
        return false;
    }
};


const writeGitIgnore = () => {

}

const createGitignore = () => {
    const directory = process.env.PWD
    const fileName = ".gitignore"

    const pathToFile = path.join(directory, fileName);
    if (exist(pathToFile)) {
        print("파일 있음")
    } else {
        print("파일 없음")
        fs.writeFileSync(pathToFile, gitignore)
        print(".gitignore 파일 생성 완료")
    }
}





module.exports = {
    createGitignore
}