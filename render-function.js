export function renderGames(game) {
    const div = document.createElement('div');

    const a = document.createElement('a');
    a.href = `./favorites/?id=${game.id}`

    const img = document.createElement('img')
    img.src = `./assets/${game.poster}.jpg`
    img.classList.add('image');
console.log(game.poster)
    div.append(img)
    a.append(div)
    

    return a;
}

export function renderGame(game) {
    const div = document.createElement('div')

    const name = document.createElement('h1')
    name.textContent = game.name;

    const img = document.createElement('img');
    img.src = `../assets/${game.poster}.jpg`
console.log(game.poster)

    const p = document.createElement('p')
    p.textContent = game.release;

    const time = document.createElement('p');
    time.textContent = game.play_time;

    div.append(name, img, p, time)

    return div;
    
}