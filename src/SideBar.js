import React, { Component } from "react";


export default class SideBar extends Component {

    render() {

        const listVenues = [
            { name: "mylist", capital: "someword" },
        ]

        return (
            <div className="sideBar">
                <ol>
                    {listVenues.map(venue => (
                        <li>
                            Capital of {venue.name} is {venue.capital}
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}