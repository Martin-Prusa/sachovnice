let isBlack = false;

document.write('<table>')

for (let i = 0; i < 8; i++) {
    document.write('<tr>')

    for (let j = 0; j < 8; j++) {
        document.write(`<th ${isBlack ? '' : 'class="black"'}></th>`)
        isBlack = !isBlack
    }
    isBlack = !isBlack
    document.write('</tr>')
}

document.write('</table>')
