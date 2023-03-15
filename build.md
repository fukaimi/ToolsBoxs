# prod环境
npm run start

# 第一步：移动前端资源文件
```JavaScript
# 操作如下
1：构建资源，如vue前端项目中npm run build

2：根目录：npm run rd

# 解释说明
rd命令会把 frontend/dist 复制到 /public/dist ; 服务最终加载的是 /public/dist前端资源。
frontend目录代码不会被打包，防止源码泄露。
```

# 第二步：代码加密 （必看）
- 如果未使用该功能，请不要过滤源代码，查看操作：代码加密
- 如果执行过加密，会生成加密代码：/public/electron ，框架优先读取它，源代码则不生效。 开发阶段如果发现编写的代码不生效，请记得删除加密文件。
> ee-core: v1.2.10
```javascript
npm run encrypt

# 解释说明
encrypt命令会把 electron/ 复制到 /public/electron ; 然后对其加密。
electron目录代码不会被打包，防止源码泄露。
```

# 第三步：执行打包命令
注1：请尽量让项目名唯一（electron-egg/package.json中name属性），防止和别人软件名称冲突
注2：打包失败，请查看常见问题。
```javascript
# 打包时，package.json中build.productName包名不要为中文，避免一些未知异常

# 准备，设置国内镜像
npm config set electron_builder_binaries_mirror=https://registry.npmmirror.com/-/binary/electron-builder-binaries/

# 打包 （windows版）
npm run build-w
npm run build-w-32 (64位)
npm run build-w-64 (64位)
npm run build-w-arm64 (arm64)

# 打包 （windows 免安装版）
# ee > v2.2.1
npm run build-wz
npm run build-wz-32 (32位)
npm run build-wz-64 (64位)
npm run build-wz-arm64 (arm64)

# 打包 （mac版）
npm run build-m
npm run build-m-arm64 (m1芯片架构)

# 打包 （linux版）
# ee > v2.2.1
npm run build-l (32位 deb包)
npm run build-l-64 (64位 deb包)
npm run build-l-arm64 (64位 deb包 arm64)
npm run build-l-armv7l (64位 deb包 armv7l)
npm run build-lr-64 (64位 rpm包)
npm run build-lp-64 (64位 pacman包)
```

