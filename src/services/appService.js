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
            "password": PWD,
        }
        return request.post("/login", data);
    }
    register(USRN, PWD) {
        var data = {
            "username": USRN,
            "password": PWD,
        }
        return request.post("/register", data);
    }
}

export default new appService();