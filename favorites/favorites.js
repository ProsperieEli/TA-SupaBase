import { renderGame } from "../render-function.js";
import { getGame } from "../fetch-utils.js";

const gameDisplay = document.getElementById('game');


async function loadData() {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')

    const game = await getGame(id)
    const gameInfo = renderGame(game)

    gameDisplay.append(gameInfo)
}

loadData();