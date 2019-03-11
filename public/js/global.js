class Global {

    /*username;
    user_id;
    highScore = 0;
    distanciaMaior = 0;

    constructor() {
        user_id = sessionStorage.getItem('user_id');
        username = sessionStorage.getItem('username');
    }

    static setUserName(username) {
        this.username = username;
    }

    static getUserName() {
        return this.username;
    }

    static setUserId(id) {
        this.user_id = id;
    }

    static getUserId() {
        return this.user_id;
    }

    static setHighScore(highScore) {
        this.highScore = highScore;
    }

    static getHighScore() {
        return this.highScore;
    }

    static setDistanciaMaior(distancia) {
        this.distanciaMaior = distancia;
    }

    static getDistanciaMaior() {
        return this.distanciaMaior;
    }
*/

    static getHighScore(data) {
        $.ajax({
            type: 'GET',
            url: '/user/highscore/' + data,
            contentType: 'application/json; charset=utf-8',
            success: (resp) => {
                if (resp.status) {
                    highScore = resp.highscore.value;
                    distanciaMaior = highScore;
                }
            }
        });
    }

    static newScore(value, user_id) {
        var datas = {
            "value": value,
            "user_id": user_id
        };

        $.ajax({
            type: 'POST',
            url: '/score/new',
            data: JSON.stringify(datas),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            done: function (resp) {
                if (resp.status) {
                    this.getHighScore();
                }
            },
            error: function (err) {
                console.error(err, ' erro');
            }
        });
    }

}