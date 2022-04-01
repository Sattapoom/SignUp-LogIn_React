import appService from "../../services/appService";

const rollDice = (token) => {
    if (token) {
        appService.rollDice(token)
            .then(response => {
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
                localStorage.removeItem("token");
                window.location.href = "/home";
            });
    }
    else {
        window.location.href = "/home";
    }
}

export default function Dice({ rolledNum, latestRoller }) {

    return (
        <div class="dice">
            <div className="latestRoller">
                <h6>Latest</h6>
                <p>{latestRoller? latestRoller: "None"}</p>
            </div>
            <p className="diceNum">{rolledNum}</p>
            <button className="rolling" onClick={()=>rollDice(JSON.parse(localStorage.getItem("token")))}>Roll the dice</button>
        </div>
    );
}