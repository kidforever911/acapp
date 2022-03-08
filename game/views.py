from django.http import HttpResponse

def index(request):
    line1 = '<h1 style="text-align:center">术士之战!!!!!</h1>'
    line4 = '<a href = "/play/">进入游戏界面</a>'
    line3 = '<hr>'
    line2 = '<img src="https://i.loli.net/2021/11/07/VgnFE8o2MiLy5kT.jpg" width = 2000>'
    return HttpResponse(line1 + line4 + line3 + line2)


def play(request):
    line1 = '<h1 style="text-align: center">游戏界面</h1>'
    line3 = '<a href = "/">返回主页面</a>'
    line2 = '<img src="https://i.loli.net/2021/11/08/CL5MoJ4vQtpOgID.jpg" width = 2000>'
    return HttpResponse(line1 + line3 + line2)
