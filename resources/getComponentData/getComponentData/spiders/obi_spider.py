import scrapy
from scrapy_splash import SplashRequest
from pprint import pprint

class ObiSpider(scrapy.Spider):
    name = "obi"
    sub_child = 2;
    child = 2;
    start_urls = [
         'https://www.obi.at/bauen/baustoffe/c/175',
         'https://www.obi.at/bodenbelaege/laminat-parkett-vinylboeden/c/893',
         'https://www.obi.at/bauen/bauholz/c/169',
         'https://www.obi.at/bauen/fliesen/c/308',
         'https://www.obi.at/bauen/fliesenzubehoer/c/312',
         'https://www.obi.at/bauen/gartenbau/c/336',
         'https://www.obi.at/bauen/tueren/c/1153'
    ]
    currentCat = "";
    mainCat = "";
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
                 assert(splash:wait(3))
                 local hide = splash:select('a.pagination-bar__btn:nth-child(3).disabled');
                 if not hide then
                    local link = splash:select('a.pagination-bar__btn:nth-child(3)')
                    if link then
                      link:mouse_click()
                      assert(splash:wait(3))
                    end
                 end
                 if hide then
                    local link = splash:select('div.hidden-phone > a.btn:nth-child(2)')
                    link:mouse_click()
                    assert(splash:wait(3))
                    link = splash:select('ul.first-level.dashed > li:nth-child(' .. splash.args.sub_child .. ') > a:nth-child(1)')
                    if link then
                      link:mouse_click()
                      assert(splash:wait(3))
                    end
                    if not link then
                        link = splash:select('div.hidden-phone > a.btn.colored.dark')
                        link:mouse_click()
                        assert(splash:wait(3))
                        link = splash:select('ul.first-level.big > li:nth-child(' .. splash.args.child .. ') > a:nth-child(1)')
                        link:mouse_click()
                        assert(splash:wait(3))
                        link = splash:select('ul.first-level.dashed > li:nth-child(1) > a:nth-child(1)')
                        link:mouse_click()
                        assert(splash:wait(3))
                    end                    
                 end

                 assert(splash:wait(3))
                  return {
                    url = splash:url(),
                    html = splash:html(),
                  } 
             end
             """            
    def start_requests(self):
        for url in self.start_urls:
            yield SplashRequest(url, callback=self.parse, endpoint="execute", args={'lua_source': self.start_script})       


    def parse(self, response):
        if (self.mainCat == ""):
          self.mainCat = response.url.split('/')[3];
        if (self.mainCat != response.url.split('/')[3]):
          self.child = self.child + 1;
          self.sub_child = 1;
          self.currentCat = "";
          self.mainCat = response.url.split('/')[3];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

        if (self.currentCat == ""):
          self.currentCat = response.url.split('/')[4]; 
        if (self.currentCat != response.url.split('/')[4]):
            self.sub_child = self.sub_child + 1;
            self.currentCat = response.url.split('/')[4];
        print self.currentCat
        print self.sub_child
        print self.child
        
        for obi in response.css('.row-fluid > li.product.large'):
            yield {
                'article-title': obi.css('span.description > p::text').extract_first().strip(),
                'price': obi.css('span.price-new::attr(data-csscontent)').extract_first().strip(),
                'image': obi.css('img.image::attr(src)').extract()[0].strip(),
                'category': self.currentCat,
                'mainCategory': self.mainCat
            }

      #  yield SplashRequest(url=response.url, dont_filter=True,callback=self.parse, endpoint="execute", args={'lua_source': self.script, 'child':str(self.child) , 'sub_child':str(self.sub_child)})       
        yield SplashRequest(url=response.url, callback=self.parse, endpoint="execute", args={'lua_source': self.script, 'child':str(self.child) , 'sub_child':str(self.sub_child)})       

            #sudo docker run -p 8050:8050 scrapinghub/splash
            #mongoimport --db bcp_local --collection hornbach_components --file hornbach3.json --jsonArray
            #scrapy crawl obi -o obi.json
            #python3 -m splash.server