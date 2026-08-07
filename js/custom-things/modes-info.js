const MODE_INFO = [
    [1,"Easy","#81FF40"],
    [2,"Medium","#FFFF00"],
    [3,"Hard","#FF8000"],
    [4,"Difficult","#FF3233"],
    [5,"Challenging","#7F0019"],
    [6,"Intense","#1E3B56"],
    [7,"Remorseless","#DC00DB"],
    [7.5,"Relentless","#4800FF"],
    [8,"Insane","#0000FF"]
]

function modeTitle(id){
    return "<font color=\"" + MODE_INFO[id][2] + "\">[#" + MODE_INFO[id][0] + ": " + MODE_INFO[id][1] + " Mode]</font><br>"
}

function modeDesc(id){
    if(!id) return "每秒对冷牛排造成1点肉体伤害"
    if(id == 1) return "每秒对冷牛排造成2点肉体伤害<br>每秒对冷牛排造成1点精神伤害"
    if(id == 2) return "每秒对冷牛排造成3点肉体伤害，3点精神伤害，3点真实伤害，1点即死伤害<br>有50％触发暴击，触发暴击有25％触发2重暴击，触发二重暴击有12.5％触发3重暴击……"
    if(id == 3) return "每秒对冷牛排造成e<sup>(x+80)</sup>点真实伤害<br>（x每秒增加log<sub>10</sub>(log<sub>10</sub>(d+1)+1)）"
    if(id == 4) return "每秒对冷牛排造成1点真实伤害<br>冷牛排每秒受到的伤害*10<sup>min(d/10,10t)+1</sup><br>上一条效果<sup>min(d/1e100,10t)+1</sup>"
}