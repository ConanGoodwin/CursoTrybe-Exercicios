from parsel import Selector
import requests

response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
# print(selector)

titles = selector.css(".product_pod a::attr(title)").getall()

prices = selector.css(".price_color::text").getall()
print(prices)

for product in selector.css(".product_pod"):
    title = product.css("a::attr(title)").get()
    price = product.css(".price_color::text").get()
    print(title, price)

next_page_url = selector.css(".next a::attr(href)").get()
print(next_page_url)
