from parsel import Selector
import requests


URL_BASE = "http://books.toscrape.com/catalogue/"

response = requests.get(URL_BASE + "page-1.html")
selector = Selector(text=response.text)

detail_href = selector.css(".product_pod a::attr(href)").get()
detail_page_url = URL_BASE + detail_href

detail_response = requests.get(detail_page_url)
detail_selector = Selector(text=detail_response.text)

description = detail_selector.css("#product_description ~ p::text").get()

print(description)
