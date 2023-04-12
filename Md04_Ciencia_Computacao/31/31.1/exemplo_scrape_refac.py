from parsel import Selector
import requests


URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = "page-1.html"

while next_page_url:
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)

    for product in selector.css(".product_pod"):
        title = product.css("a::attr(title)").get()
        price = product.css(".price_color::text").get()

        detail_href = selector.css("h3 a::attr(href)").get()
        detail_page_url = URL_BASE + detail_href

        detail_response = requests.get(detail_page_url)
        dt_selector = Selector(text=detail_response.text)

        description = dt_selector.css("#product_description ~ p::text").get()
        print(title, price)
        print(description)

    next_page_url = selector.css(".next a::attr(href)").get()
