import requests

def get_site(url):
	cookies = {
		"_ga": "GA1.2.271197796.1595954005",
		"_ym_uid": "1595954006662417649",
		"_ym_d": "1595954006",
		"supportOnlineTalkID": "Psn7DVJSeKQnCTrqVJULKDZN4oFSTET1",
		"acceptcookies": "accepted",
		"_ym_wasSynced": "%7B%22time%22%3A1596460410460%2C%22params%22%3A%7B%22eu%22%3A0%7D%2C%22bkParams%22%3A%7B%7D%7D",
		"_gid": "GA1.2.2072147298.1596460410",
		"_ym_visorc_61364302": "w",
		"_ym_isad": "1",
		"userlogin": "a%3A2%3A%7Bs%3A3%3A%22lgn%22%3Bs%3A16%3A%22corobok027%40ya.ru%22%3Bs%3A3%3A%22pwd%22%3Bs%3A32%3A%22072af845aeadd491a85a0a1a762293e4%22%3B%7D"
	}

	r = requests.post('https://mpstats.io/ozon/category?url=%D0%91%D1%8B%D1%82%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0/%D0%9A%D0%BB%D0%B8%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0#filterModel=%7B%22delivery_scheme%22%3A%7B%22values%22%3A%5B%220%22%2C%221%22%2C%222%22%2C%223%22%5D%2C%22filterType%22%3A%22set%22%7D%7D&sortModel=%5B%7B%22colId%22%3A%22revenue%22%2C%22sort%22%3A%22desc%22%7D%5D&pageModel=%7B%22page%22%3A0%7D', cookies=cookies)
	return r.text