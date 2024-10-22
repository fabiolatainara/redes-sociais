const getCSS = (variavel) => {
    return bodyStyles.getPropertyValue(variavel)
}

const tickConfig = {
    color: getCSS('--primary-font'),
    size: 16,
    family: getCSS('--font')
}

export { getCSS, tickConfig }