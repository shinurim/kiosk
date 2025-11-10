from django.shortcuts import render,HttpResponse
import random
from django.http import JsonResponse
from django.views.decorators.http import require_GET

@require_GET
def nav_list(request):
    data = [
        {"index": 0, "path": "/", "label": "햄버거",    "searchValue": "burder",  "isActive": False},
        {"index": 1, "path": "/side",   "label": "사이드",    "searchValue": "side",    "isActive": False},
        {"index": 2, "path": "/drinks", "label": "음료",      "searchValue": "drinks",  "isActive": False},
        {"index": 3, "path": "/set",    "label":  "세트",     "searchValue": "set",     "isActive": False}
    ]
    return JsonResponse(data, safe=False)

# kiosk/views.py

def burger_list(request):
    data = [
        { "index": 0, "path": "/Bulgogi", "label": "불고기버거", "src": "/static/images/Bulgogi.png", "searchValue": "Bulgogi" },
        { "index": 1, "path": "/Beef", "label": "비프버거", "src": "/static/images/Beef.png", "searchValue": "Beef" },
        { "index": 2, "path": "/Shrimp", "label": "새우버거", "src": "/static/images/Shrimp.png", "searchValue": "Shrimp" },
        { "index": 3, "path": "/Chicken", "label": "치킨버거", "src": "/static/images/Chicken.png", "searchValue": "Chicken" }
    ]
    return JsonResponse(data, safe=False)

def burgerSet_list(request):
    data = [
        { "index": 0, "path": "/BulgogiSet", "label": "불고기버거 세트", "src": "/static/images/Bulgogi Set.png", "searchValue": "BulgogiSet" },
        { "index": 1, "path": "/BeefSet", "label": "비프버거 세트", "src": "/static/images/Beef Set.png", "searchValue": "BeefSet" },
        { "index": 2, "path": "/ShrimpSet", "label": "새우버거 세트", "src": "/static/images/Shrimp Set.png", "searchValue": "ShrimpSet" },
        { "index": 3, "path": "/ChickenSet", "label": "치킨버거 세트", "src": "/static/images/Chicken Set.png", "searchValue": "ChickenSet" }
    ]
    return JsonResponse(data, safe=False)

def drinks_list(request):
    data = [
        { "index": 0, "path": "/Coke", "label": "코카콜라", "src": "/static/images/Coke.png", "searchValue": "Coke" },
        { "index": 1, "path": "/CokeZero", "label": "코카콜라 제로", "src": "/static/images/Coke Zero.png", "searchValue": "CokeZero" },
        { "index": 2, "path": "/Sprite", "label": "스프라이트 제로", "src": "/static/images/Sprite.png", "searchValue": "Sprite" },
        { "index": 3, "path": "/SpriteZero", "label": "스프라이트", "src": "/static/images/Sprite Zero.png", "searchValue": "SpriteZero" },
        { "index": 4, "path": "/Water", "label": "물", "src": "/static/images/Water.png", "searchValue": "Water" }
    ]
    return JsonResponse(data, safe=False)

def sides_list(request):
    data = [
        { "index": 0, "path": "/FrenchFries", "label": "감자튀김", "src": "/static/images/French Fries.png", "searchValue": "FrenchFries" },
        { "index": 1, "path": "/CheeseBalls", "label": "치즈볼", "src": "/static/images/Cheese Balls.png", "searchValue": "CheeseBalls" },
        { "index": 2, "path": "/ChickenNuggets", "label": "치킨너겟", "src": "/static/images/Chicken Nuggets.png", "searchValue": "ChickenNuggets" },
        { "index": 3, "path": "/CrisperWrap", "label": "크리스퍼 랩", "src": "/static/images/Crisper Wrap.png", "searchValue": "CrisperWrap" }
    ]
    return JsonResponse(data, safe=False)