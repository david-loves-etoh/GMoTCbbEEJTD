const CONSTS = {
    ZERO: new Decimal(0),
    ONE: new Decimal(1),
    E: new Decimal(Math.E),
    PI: new Decimal(Math.PI),
    TEN: new Decimal(10),

    E_EN: new ExpantaNum(Math.E),

    MODES_AMT: 14,
	GUNMU: Object.create(null)
}

function rand1d100(){
    return Math.random() * 100
}