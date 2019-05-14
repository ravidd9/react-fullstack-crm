import React, { Component } from 'react';
import '../../style/AllCharts.css';
import TopEmployeesChart from './TopEmployeesChart';
import SalesByCountryChart from './SalesByCountryChart';
import ClientAcquisitionChart from './ClientAcquisitionChart';
import PastYearSalesChart from './PastYearSalesChart';


class AllCharts extends Component {
    render() {
        return (
            <div id="allCharts">
                <TopEmployeesChart clients={this.props.clients} />
                <SalesByCountryChart clients={this.props.clients} />
                <PastYearSalesChart clients={this.props.clients} />
                <ClientAcquisitionChart clients={this.props.clients} />
            </div>
        );
    }
}

export default AllCharts;