import scrapy
from scrapy_splash import SplashRequest
from pprint import pprint

class HornbachSpider(scrapy.Spider):
    name = "hornbach2"
    child = 1;
    start_urls = [
        'https://www.obi.at/bauen/baustoffe/c/175'
  #      'https://www.hornbach.at/shop/Baustoffe/S2255/artikelliste.html',
  #      'https://www.hornbach.at/shop/Bodenbelaege/S2257/artikelliste.html',
  #      'https://www.hornbach.at/shop/Schrauben/S2505/artikelliste.html',
  #      'https://www.hornbach.at/shop/Farben/S2664/artikelliste.html',
  #      'https://www.hornbach.at/shop/Weihnachten/S3970/artikelliste.html',
  #      'https://www.hornbach.at/shop/Kamine-Oefen/S3024/artikelliste.html',
  #      'https://www.hornbach.at/shop/Innendeko/S2267/artikelliste.html',
  #      'https://www.hornbach.at/shop/Elektrogeraete/S3137/artikelliste.html',
  #      'https://www.hornbach.at/shop/Lampen-Leuchten/S9522/artikelliste.html',
  #      'https://www.hornbach.at/shop/Maschinen/S3219/artikelliste.html',
  #      'https://www.hornbach.at/shop/Aquaristik/S3441/artikelliste.html'
    ]
    currentCat = "";
    start_script = """
             function main(splash)
                 assert(splash:go(splash.args.url))
                 splash:wait(3)
                 local link = splash:select('ul.first-level.dashed > li:nth-child(1) > a:nth-child(1)')
                 link:mouse_click()
                 splash:wait(3)
                  return {
                    url = splash:url(),
                    html = splash:html(),
                  } 
             end
             """
    script = """
             function main(splash)
                 assert(splash:go(splash.args.url))
                 splash:wait(2)
                 local hide = splash:select('a.pagination-bar__btn:nth-child(3).disabled');
                 if not hide then
                    local link = splash:select('a.pagination-bar__btn:nth-child(3)')
                    link:mouse_click()
                 end
                 if hide then
                    local link = splash:select('li.sub-expanded > a')
                    link:mouse_click()
                    splash:wait(3)
                    link = splash:select('li.sub:nth-child(' .. splash.args.child .. ') > a:nth-child(1)')
                    link:mouse_click()
                 end
                 splash:wait(2)
                  return {
                    url = splash:url(),
                    html = splash:html(),
                  } 
             end
             """            
    def start_requests(self):
        for url in self.start_urls:
            self.currentCat = url.split('/')[4];
            print self.currentCat;
            yield SplashRequest(url, callback=self.parse, endpoint="execute", args={'lua_source': self.start_script,'child':self.child})       


    def parse(self, response):
        for obi in response.css('row-fluid > li.product.large'):
            yield {
                'article-title': obi.css('span.description > p::text').extract_first().strip(),
                'price': obi.css('span.price-new::after::text').extract_first().strip(),
                'image': obi.css('img.image::attr(src)').extract()[0].strip(),
                'category': self.currentCat
            }
        yield SplashRequest(url=response.url, callback=self.parse, endpoint="execute", args={'lua_source': self.script,'child':self.child})       

            #sudo docker run -p 8050:8050 scrapinghub/splash
            #mongoimport --db bcp_local --collection hornbach_components --file hornbach3.json --jsonArray