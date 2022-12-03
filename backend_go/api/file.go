package api

import (
	"io"
	"log"
	"net/http"
	"os"
	"path"

	"github.com/pexni/xhttp"
)

var FileApi fileApi

type fileApi struct{}

func (a *fileApi) Upload(w http.ResponseWriter, r *http.Request) {
	key := r.URL.Query().Get("key")
	filepath := path.Join("./public", key)
	dirName, filename := path.Split(key)
	// 有文件夹先创建文件夹
	if dirName != "" {
		dirPath := path.Join("./public", dirName)
		if err := os.MkdirAll(dirPath, 0755); err != nil {
			log.Println("创建文件夹失败")
			xhttp.BadRequest(w, 400, err.Error(), nil)
			return
		}
	}
	//  创建文件
	file, err := os.Create(filepath)
	defer file.Close()
	if err != nil {
		xhttp.BadRequest(w, 400, err.Error(), nil)
		return
	}
	body := r.Body
	// body 写入文件
	_, err = io.Copy(file, body)
	if err != nil {
		// 写入失败，删除文件
		_ = os.Remove(filepath)
		xhttp.BadRequest(w, 400, err.Error(), nil)
		return
	}

	data := make(map[string]interface{}, 0)
	data["dir"] = dirName
	data["file"] = filename
	xhttp.Ok(w, 200, "success", data)
}
