const scrapeCategory = async (browser, url) => new Promise(async(resolve, reject)=>{
    try{
        let page = await browser.newPage()
        console.log('>> Open new tab:');
        await page.goto(url);
        console.log('Access to'+ url)
        await page.waitForSelector('#webpage')
        console.log('>>The website has loaded') ; 
        
        const dataCategory = await page.$$eval('#navbar-menu > ul > li',els=>{
            dataCategory = els.map(el =>{
                return {
                    category: el.querySelector('a').innerText,
                    link: el.querySelector('a').href
                }
            })
            return dataCategory;
        })
        // console.log(dataCategory);
        
        
        await page.close();
        console.log(">> Tab closed")
        resolve(dataCategory);      
    }catch(error){
        console.log("Error in scrape Category", +error);
        reject(error)
    }
})
const scraper = (browser,url) => new Promise(async(resolve,reject)=>{
    try {
        let newPage = await browser.newPage();
        console.log("... Tab Opened");
        await newPage.goto(url);
        console.log(`... ${url} Opened.`);
        await newPage.waitForSelector('#main');
        console.log('... The main element has loaded');

        const scrapeData = {};

        // get header
        const headerData = await newPage.$eval('header',(el)=>{
            return {
                title: el.querySelector('h1').innerText,
                description: el.querySelector('p').innerText
            }
        })
        // console.log('header data: ', headerData);
        scrapeData.header = headerData;

        // get links detail item'
        detailLinks = await newPage.$$eval('#left-col > section.section-post-listing > ul > li',(els)=>{
            detailLinks = els.map(el =>{
                return el.querySelector('.post-meta > h3 > a').href
            })
            return detailLinks;
        })
        console.log('check detail links', detailLinks);



        await browser.close();
        console.log(">> Tab closed")
        resolve();


    } catch (error) {
        reject(error)
    }

})


module.exports={
    scrapeCategory,
    scraper
}