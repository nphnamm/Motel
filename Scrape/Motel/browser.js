const puppeteer = require('puppeteer');

const startBrowser = async()=>{

    let browser 
    try{
        browser = await puppeteer.launch({
            // Có hiện UI của Chromnium hay không, false là có

            headless:false,
            // Chrome sử dụng multiple plaeyer của sandbox để trnash những nội dung web không đáng tin cậy.
            args:['--disabled-setuid-sandbox'],
            // Truy cập website bỏ qua lỗi liên quan http secure.
            'ignoreHTTPSErrors':true

        })
    }catch(error){
        console.log('không vào được browser:' + error);
    }
    return browser;
}

module.exports = startBrowser