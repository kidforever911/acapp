from django.http import HttpResponse

def index(request):
    line1 = '<h1 style="text-align:center">术士之战!!!!!</h1>'
    line2 = '<img src="https://baike.baidu.com/pic/%E6%9C%AF%E5%A3%AB%E4%B9%8B%E6%88%98/6390847/1/c2cec3fdfc039245efdd58288f94a4c27d1e25a8?fr=lemma&ct=single#aid=1&pic=c2cec3fdfc039245efdd58288f94a4c27d1e25a8">'
    return HttpResponse(line1 + line2)
