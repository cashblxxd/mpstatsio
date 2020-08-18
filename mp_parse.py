from bs4 import BeautifulSoup
from getter import get_site

soup = BeautifulSoup(get_site("https://mpstats.io/"), features="lxml")
for div in soup.findAll('div', 'be-navbar-header'):
    div.extract()
for div in soup.findAll('ul', 'nav navbar-nav float-right be-user-nav'):
    div.extract()
for div in soup.findAll('ul', 'nav navbar-nav float-right be-icons-nav'):
    div.extract()
for div in soup.findAll('footer', 'be-footer'):
    div.extract()
for div in soup.findAll('div', 'trigger-type primary-bottom secondary-right primary-top-bottom trigger top-z-index pointer'):
    div.extract()
res_text = soup.prettify()
with open("result.html", "w+") as f:
    f.write(res_text)