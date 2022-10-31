## 克隆

```
git clone git@github.com:skybluebaby/init-react-app.git
```

## 修改为自己仓库地址

### 1、删除原 git 文件信息

```
rm -rf .git or rimraf .git or 手动删除
```

### 2、初始化 git

```
git init
```

### 3、将代码改变提交到本地

```
git add .
git commit -m "提交信息"
```

### 4、新建远程仓库&关联远程仓库

```
git remote add origin 仓库地址
git branch -M main
git push -u origin main
```
