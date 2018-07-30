import React, { Component } from 'react'

class LeaderBoard extends Component{

    render(){
        return(
            <div className="main-container" id="leaderboard">

                <section className="space-sm">

                    <div className="row no-gutters justify-content-center">

                        <div id="leaderBoard">{(this.leaderboard())}</div>

                    </div>

                </section>

            </div>


        );
    }

    leaderboard()
    {

        console.log("inside leaderbord() function")
        var leaderboardarray = new Array(5);
        leaderboardarray[0] = 50;
        leaderboardarray[1] = 60;
        leaderboardarray[2] = 180;
        leaderboardarray[3] = 120;
        leaderboardarray[4] = 150;

        leaderboardarray.sort(function(a, b){return b-a});
        var myContent = '';
        for (var n=0;n<5;n++) {
            console.log("inside for loop")
            console.log(leaderboardarray[n])
            myContent += leaderboardarray[n];
        }

        console.log(myContent);
        console.log("end of leaderboard() function");
        return myContent;


    }

}

export default LeaderBoard;
