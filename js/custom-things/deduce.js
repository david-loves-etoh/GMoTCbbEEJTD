function remaining(x) {return CONSTS.TEN_EN.pow(x).div(CONSTS.TEN_EN.pow(x.floor()))}

function hyperOp(x,level){
    sep = '[' + level + ']'
    if(level === "ω") sep = 'J'
    if(level === "ω+1") sep = 'K'
    if(level === "ω+2") sep = 'L'
    if(level === "ω2") sep = 'M'
    if(level === "ω<sup>2</sup>") sep = 'N'
    if(level === "ω<sup>ω</sup>") sep = 'P'
    if(level === "ψ(Ω)") sep = 'Q'
    if(level === "ψ(Ω<sup>Ω</sup>)") sep = 'R'
    if(level === "ψ(Ω<sup>Ω<sup>ω</sup></sup>)") sep = 'S'
    if(level === "ψ(Ω<sup>Ω<sup>Ω</sup></sup>)") sep = 'T'
    if(level === "ψ(Ω<sub>2</sub>)") sep = 'V'
    if(level === "ψ(Ω<sub>ω</sub>)") sep = 'W'
    if(level === "ψ(α(ω;0))") sep = 'X'
    if(level === "ψ(ε<sub>H+1</sub>)") sep = 'Y'
    if(level === "PTO(Z<sub>ω</sub>)") sep = 'Z'
    if(level === "PTO(ZFC)") sep = 'Æ'
    if(level === "ψ<sub>1</sub>(Ω<sub>2</sub>)") sep = 'Б'
    if(x.gte(1e9)) return sep + formatEN(x)
    return formatEN(remaining(x)) + sep + formatWholeEN(x.floor())
}

function deduceDamage()
{
    if(player.modeID <= 6) return format(player.points)
    if(player.modeID <= 15) return formatEN(player.damageEN)
    if(player.modeID == 16){
        if(player.xEN.lt(1)) return formatEN(CONSTS.TEN_EN.pow(player.xEN))
        if(player.xEN.lt(2)) return formatEN(CONSTS.TEN_EN.arrow(CONSTS.TEN_EN.pow(player.xEN.sub(1)).floor())(CONSTS.TEN_EN))
        if(player.xEN.lt(3)) return hyperOp(CONSTS.TEN_EN.arrow(CONSTS.TEN_EN.pow(player.xEN.sub(2)).floor())(CONSTS.TEN_EN),"ω")
        if(player.xEN.lt(4)) return "J" + hyperOp(CONSTS.TEN_EN.arrow(CONSTS.TEN_EN.pow(player.xEN.sub(3)).floor())(CONSTS.TEN_EN),"ω")
        if(player.xEN.lt(5)) return "JJ" + hyperOp(CONSTS.TEN_EN.arrow(CONSTS.TEN_EN.pow(player.xEN.sub(4)).floor())(CONSTS.TEN_EN),"ω")
        return hyperOp(player.xEN,"ω+1")
    }
}