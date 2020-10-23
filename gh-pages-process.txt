## step1

#npx create react ap without installing create
npx create-reat-app aap-name

cd app-name

## step2

package.json

"homepage": "https://avinash-dewangan.github.io/talkstechy",

    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"

## setp3

install gh-pages
npm i gh-pages

## step4

create a repostiory in git hub sam as aap-name

aap-name> git add .
git commit -m "first commit"
remot
git push -u orgin master

## step5 excute this command

aap-name> npm run deploy

this command automatically
