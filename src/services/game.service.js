import axios from 'axios'


const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc',
    params: { id: '452' },
    headers: {
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': '68033cb7b4msh10edc6ded9e4df0p172a7djsn01505a4d5ce3'
    }
};



const query = () => {

    const games = localStorage.getItem('games')
    if (!games) {
        return axios.request(options).then(function (response) {
            localStorage.setItem('games', JSON.stringify(response.data))
            return response.data;
        }).catch(function (error) {
            console.error(error);
        });
    } else return JSON.parse(games)
}

const getGameById = (id) => {
    const optionsGame = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: { id },
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': '68033cb7b4msh10edc6ded9e4df0p172a7djsn01505a4d5ce3'
        }
    };
    const game = localStorage.getItem('game_' + id)
    if (!game) {
        return axios.request(optionsGame).then(function (response) {
            localStorage.setItem('game_' + id, JSON.stringify(response.data))
            return response.data;
        }).catch(function (error) {
            console.error(error);
        });
    } else return JSON.parse(game)
}

export const gameService = {
    query,
    getGameById
}