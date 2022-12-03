# 文件上传

1. 文件上床
2. 多文件上传
3. 文件夹上传

# 普通启动，有 node 和 go 环境可直接启动

## 启动web : cd 到 web 目录，yarn dev 即可启动

## 启动后端:  cd 到 backend_go 目录 go run main.go 即可启动

# Docker启动，没有 node 和 go 的环境可使用 docker 运行

## 启动web: docker-compose up web

## 启动后端: docker-compose up backend_go

# 预览

1. 打开 http://localhost:5173/ , 可以多个上传文件或者文件夹
2. 在 backend_go/public 即可看到自己上传的文件以及文件夹
