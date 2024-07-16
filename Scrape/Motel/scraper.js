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

        //TODO: get header
        const headerData = await newPage.$eval('header',(el)=>{
            return {
                title: el.querySelector('h1').innerText,
                description: el.querySelector('p').innerText
            }
        })
        //console.log('header data: ', headerData);
        scrapeData.header = headerData;

        //TODO: get links detail item'
        detailLinks = await newPage.$$eval('#left-col > section.section-post-listing > ul > li',(els)=>{
            detailLinks = els.map(el =>{
                return el.querySelector('.post-meta > h3 > a').href
            })
            return detailLinks;
        })
        // console.log('check detail links', detailLinks);
     
        const scraperDetail = async (link)=> new Promise(async(resolve,reject) => {
            try {
                let pageDetail = await browser.newPage();
                await pageDetail.goto(link)
                console.log('Access to...' + link);
                await pageDetail.waitForSelector('#main');

                const detailData = {}

                // start scrape
                // crape images 
                const images = await pageDetail.$$eval('#left-col > article > div.post-images > div > div.swiper-wrapper > div.swiper-slide',(els)=>{
                    images = els.map(el =>{
                        return el.querySelector('img')?.src
                    })
                    return images;

                })
                detailData.images =images;

                //todo: get header detail

                const header = await pageDetail.$eval('the-post',(el)=>{
                    return {
                        title: el.querySelector('header.page-header > h1 > a')?.innerText,
                        star: el.querySelector('header.page-header > h1 > span')?.className,
                        class: {
                            content: el.querySelector('post-overview > section-content > table > tbody > tr')?.innerText,
                            classType: el.querySelector('post-overview > section-content > table > tbody > tr > td > a > strong')?.innerText
                        },
                        address: el.querySelector('address')?.innerText,
                        attributes:{
                            price: el.querySelector('header.page-header > div.post-attributes > .price > span')?.innerText,
                            acreage: el.querySelector('header.page-header > div.post-attributes > .acreage > span')?.innerText,
                            published: el.querySelector('header.page-header > div.post-attributes > .published > span')?.innerText,
                            hashtag: el.querySelector('header.page-header > div.post-attributes > .hashtag > span')?.innerText,


                        }

                    }

                })
                console.log('check header', header);

                await pageDetail.close();
                console.log(link + ' closed.')
                resolve();
            } catch (error) {
                console.log('Error When get detail data!');
                reject(error);
            }
        })
        for(let link of detailLinks){
            await scraperDetail(link);
        }


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