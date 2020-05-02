import React from 'react';
import TournamentItem from "./TournamentItem/TournamentItem";
import "./TournamentList.scss";

export default function TournamentList({events}) {
    return (
        <div className="TournamentList">

            {events.map( ev =>
                {
                    return(
                        <TournamentItem name={ev.name} slots={ev.slots} />
                    );
                } )}
            
        </div>
    )
}
