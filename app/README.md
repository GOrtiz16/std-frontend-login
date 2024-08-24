1. ng add @angular/elements

2. ng add @angular-extensions/elements

3. npm i gulp --save gulp gulp-concat

Locally testing

docker build -f docker/Dockerfile -t micro-1 .

docker run -d --name micro-1-container -p 8085:80 -i -t micro-1
