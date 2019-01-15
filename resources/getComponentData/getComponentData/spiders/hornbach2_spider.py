import scrapy
from scrapy_splash import SplashRequest
from pprint import pprint
from scrapy.shell import inspect_response
class HornbachSpider(scrapy.Spider):
    name = "hornbach"
    child = 2;
    start_urls = [
  #      'https://www.hornbach.at/shop/Badarmaturen/S2278/artikelliste.html'
        'https://www.hornbach.at/shop/Baustoffe/S2255/artikelliste.html',
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
    script = """
             function main(splash)
                 assert(splash:go(splash.args.url))
                 assert(splash:wait(5))
                 local hide = splash:select('div.bottom a.paging-btn.right.ng-hide');
                 if not hide then
                    local link = splash:select('div.bottom a.paging-btn.right')
                    if link then
                      link:mouse_click()
                      assert(splash:wait(5))
                    end                    
                 end
                 if hide then
                    local link = splash:select('li.sub-expanded > a')
                    if link then
                      link:mouse_click()
                      assert(splash:wait(5))
                      link = splash:select('li.sub:nth-child(' .. splash.args.child .. ') > a:nth-child(1)')
                        if link then
                            link:mouse_click()
                            assert(splash:wait(3))
                        end                    
                    end  
                 end
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
            yield SplashRequest(url, callback=self.parse, endpoint="execute", args={'lua_source': self.script,'child':self.child})       


    def parse(self, response):
      #  inspect_response(response, self);  
        newCat = response.url.split('/')[4];
        for hornbach in response.css('#article-list > div.article'):
            yield {
                'article-title': hornbach.css('span.title::text').extract_first().strip(),
                'article-link': hornbach.css('a.image-container::attr(href)').extract_first().strip(),
                'price': hornbach.css('span.price > span:nth-child(3)::text').extract_first().strip(),
                'image': hornbach.css('img.article-image::attr(image-lazy-src)').extract()[0].strip(),
                'category': newCat
            }
        print newCat    
        if (self.currentCat != newCat):
            self.child = self.child + 1;
            self.currentCat = newCat;
        print response.url
        print self.currentCat
        yield SplashRequest(url=response.url, callback=self.parse, endpoint="execute", args={'lua_source': self.script,'child':str(self.child)})       

            #docker run -p 8050:8050 scrapinghub/splash
            #mongoimport --db bcp_local --collection hornbach_components --file hornbach.json --jsonArray