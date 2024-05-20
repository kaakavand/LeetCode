function reverse(x: number): number {
    let num = ''
    if (String(x).includes('-')) {

        num = '-' + String(x).split('').splice(1).reverse().filter((el, i) => el !== '0' && i !== 0).join('')
    } else {
        num = String(x).split('').splice(1).reverse().filter((el, i) => el !== '0' && i !== 0).join('')

    }

    return Number(num)
};
