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
        console.log(dataCategory);
        
        
        await page.close();
        console.log(">> Tab closed")
        resolve();      
    }catch(error){
        console.log("Error in scrape Category", +error);
        reject(error)
    }
})

module.exports={
    scrapeCategory
}