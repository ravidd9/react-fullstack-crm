import React, { Component } from 'react';
import Badge from './Badge';
import '../../style/AllBadges.css';


class AllBadges extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    generateBadges = () => {
        let badges = {
            newClients: {
                icon: "fas fa-plus-circle",
                value: 0,
                text: "New Monthly Clients"
            },
            emailsSent: {
                icon: "fas fa-envelope",
                value: 0,
                text: "Emails Sent"
            },
            outstandingClients: {
                icon: "fas fa-users",
                value: 0,
                text: "Outstanding Clients"
            },
            hottestCountry: {
                icon: "fas fa-globe-americas",
                value: "",
                text: "Hottest Country"
            },
        }
        return badges
    }

    getNewClients = () => {
        let newClients = this.props.clients.filter(c =>
            (new Date(c.firstContact).getMonth() == new Date().getMonth()) &&
            (new Date(c.firstContact).getFullYear() == new Date().getFullYear())).length
        return newClients
    }

    getHottestCountry = () => {
        let countries = {}
        this.props.clients.forEach(c => {
            if (countries[c.country] >= 0) {
                countries[c.country]++
            } else {
                countries[c.country] = 0
            }
        })
        let max = 0
        let hottestCountry = ""
        Object.keys(countries).map(c => {
            if (countries[c] > max) {
                max = countries[c]
                hottestCountry = c
            }
        })
        return hottestCountry
    }

    getValues = badges => {
        if (this.props.clients.length) {
            badges.newClients.value = this.getNewClients()
            badges.emailsSent.value = this.props.clients.filter(c => c.emailType).length
            badges.outstandingClients.value = this.props.clients.filter(c => c.sold === false).length
            badges.hottestCountry.value = this.getHottestCountry()
        }
        return badges
    }

    componentDidMount = () => {

    }


    render() {
        let badges = this.generateBadges()
        badges = this.getValues(badges)
        return (
            <div id="allBadges">
                <Badge badge={badges.newClients} color="green" />
                <Badge badge={badges.emailsSent} color="blue" />
                <Badge badge={badges.outstandingClients} color="red" />
                <Badge badge={badges.hottestCountry} color="yellow" />
            </div>
        );
    }
}

export default AllBadges;