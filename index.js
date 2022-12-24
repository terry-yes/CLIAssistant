#!/usr/bin/env node

//TODO: 명령어는 npx cli ignore
//TODO: .gitignore 내용 변수로 저장하기
//TODO: 현재 폴더 위치 찾기
//TODO: .gitignore파일이 있는지 확인하기
//TODO: 있으면 추가할지 물어보고 없으면 파일만들어서 바로 갖다 붙이기

const readline = require('readline');
const { print } = require('./util.js')
const { createGitignore } = require("./createGitignore")


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const command = process.argv[2];

const answerCallback = (answer) => {
    if (answer === "1") {
        createGitignore()
    } else {
        print("잘못 눌렀습니다.")
        rl.question('1. .ignore파일 생성', answerCallback)
    }
}

if (command == undefined) {
    rl.question('1. .ignore파일 생성\n', answerCallback)
} else if (command == "ignore" || command === "ig") {
    createGitignore()
} else {
    console.log("command 오류")
}


rl.close()




