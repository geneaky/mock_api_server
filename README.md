get 요청

요청 url : http://10.0.2.2:3000/users/rabbit

응답 : 

````
{

"user": "토끼",

"address": "구로",

"posx": "126",

"posy": "32"

}
````

***

post 요청

요청 url : http://10.0.2.2:3000/store/food

request body json 양식 

```
{

    "food" : "원하는 값 입력하세요",
    
    "price" : "원하는 값 입력하세요",
    
    "taste" : "원하는 값 입력하세요"

}
```

위 요청을 보냈을때 입력한 값과 동일한 값을 응답으로 받으면 됩니다.
