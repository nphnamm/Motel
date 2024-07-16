const scrapers = require('./scraper');

const scrapeController = async(browserInstance) =>{
    const url='https://phongtro123.com/';
    const indexs = [1,2,3,4]
    try{
        let browser = await browserInstance;
        // Call scrape function in file scrape
        const categories = await scrapers.scrapeCategory(browser,url);
        const selectedCategory = categories.filter((categories,index) => indexs.some(i=>i === index));
        console.log('selected: ',selectedCategory);
        
        await scrapers.scraper(browser,selectedCategory[0].link)


    }catch(error){
        console.log("Error in Controller Scrape",error)
        
    }
}
module.exports = scrapeController