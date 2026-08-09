function deduceDamage()
{
    if(player.modeID <= 6) return format(player.points)
    return formatEN(player.damageEN)
}

