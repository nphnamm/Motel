const scrapers = require('./scraper');

const scrapeController = async(browserInstance) =>{
    const url='https://phongtro123.com/'
    try{
        let browser = await browserInstance;
        // Call scrape function in file scrape
        let categories = scrapers.scrapeCategory(browser,url);


    }catch(error){
        console.log("Error in Controller Scrape",error)
        
    }
}
module.exports = scrapeController