import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:4001",
    headers: {
        "Content-type": "application/json"
    }
});

class appService {
    login(USRN, PWD) {
        var data = {
            "username": USRN,
            "password": PWD
        }
        return request.post("/login", data);
    }
    register(USRN, PWD) {
        var data = {
            "username": USRN,
            "password": PWD
        }
        return request.post("/register", data);
    }
    welcome(token) {
        var data = {
            "token": token
        }
        return request.post("/welcome", data);
    }
    joinGame(token) {
        var data = {
            "token": token
        }
        return request.put("/game/join", data);
    }
    quitGame(token) {
        var data = {
            "token": token
        }
        return request.put("/game/quit", data);
    }
    getGameState() {
        return request.get("/game/getState");
    }
    updateGameState(data) {
        return request.put("/game/updateState", data);
    }
    rollDice(token) {
        var data = {
            "token": token
        }
        return request.put("/game/rollDice", data);
    }
}

export default new appService();