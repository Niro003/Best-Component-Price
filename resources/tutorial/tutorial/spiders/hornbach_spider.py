import scrapy
from scrapy_splash import SplashRequest

class HornbachSpider(scrapy.Spider):
    name = "hornbach"
    start_urls = [
        'https://www.hornbach.at/shop/Badarmaturen/S2278/artikelliste.html',
    ]
    def start_requests(self):
        for url in self.start_urls:
            yield SplashRequest(url, self.parse,
                endpoint='render.html',
                args={'wait': 0.5},
            )
    def parse(self, response):
        next_page = response.selector.xpath('//head/link[@rel="next"]/@href').extract()
        for hornbach in response.css('#article-list > div.article'):
            yield {
                'article-title': hornbach.css('span.title::text').extract_first(),
                'price': hornbach.css('span.price::text').extract_first(),
                'image': hornbach.css('img.article-image::attr(src)').extract(),
            }

        print next_page
        print 'egasasaegasasaegasasaegasasaegasasaegasasaegasasaegasasaegasasaegasasaegasasaegasasa'
        if len(next_page) > 0:
            yield response.follow(next_page[0], callback=self.parse)

            #docker run -p 8050:8050 scrapinghub/splash