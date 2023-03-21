import Vue from 'vue'
import VueClipBoard from 'vue-clipboard2'
Vue.use(VueClipBoard)
const  uuid = () =>{
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 32; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23];
        var uuid = s.join("");
        return uuid;
    }
/**
 * 图片url链接转base64
 * @param {String} url 图片链接
 * @returns 转base64后的值或者报错信息
 */
const imgUrlToBase64 = (url) => {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject('请传入url内容');
            return null
        }
        if (/\.(png|jpe?g|gif|svg|ico)(\?.*)?$/.test(url)) {
            // 图片地址
            const image = new Image();
            // 设置跨域问题
            image.setAttribute('crossOrigin', 'anonymous');
            // 图片地址
            image.src = url;
            image.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image, 0, 0, image.width, image.height);
                // 获取图片后缀
                const ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
                // 转base64
                const dataUrl = canvas.toDataURL(`image/${ext}`);
                resolve(dataUrl || '');
            }
        } else {
            // 非图片地址
            reject('非(png/jpe?g/gif/svg等)图片地址');
        }
    });
};


/**
 * 读取图片（或文件）转成base64
 * @param {Object} file 图片文件的file，一般是文件上传的file信息
 * @returns 转base64后的base64图片地址，或错误信息
 */
const readImgToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        try {

            // 读取信息
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                // 转base64结果
                const base64Url = reader.result;
                resolve(base64Url);
            }

            reader.onerror = (err) => {
                reject(err);
            }

        } catch (error) {
            reject(error);
        }
    });
};

const copy = (text) =>{
    this.$copyText(text).then(
        e=>{
            console.log('已复制至剪切板：', e);
            this.$message.success("已复制至剪切板")
        },
        e=>{
            console.log('复制失败：', e);
            this.$message.error("复制失败")
        }
    )
};

export default function(Vue) {
    //添加全局API
    Vue.prototype.$baseUtil = {
        uuid,
        imgUrlToBase64,
        copy
    }
}
