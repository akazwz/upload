FROM golang AS Builder

COPY . /app

WORKDIR /app

ENV GOPROXY=https://goproxy.cn,direct

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main

FROM alpine

WORKDIR /app

COPY --from=Builder /app/main .

RUN mkdir public

EXPOSE 8080:8080

ENTRYPOINT ["./main"]