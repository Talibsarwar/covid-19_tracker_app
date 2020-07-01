import React from "react";
import { Chart, CountryPicker, Cards } from '../components';
import styles from "../App.css";
import { fetchData } from '../api';

export class Graph extends React.Component {
  state = {
    data: {},
    country: '',
  };


  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <br />
        <h1 className="title">COVID-19 TRACKER APP By Talib Sarwar</h1>
        <Cards data={data} />
        <div className="Search">
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        </div>
        <div classsName="filter">
        </div>
        <br />
        <div className="Graph">
        <Chart data={data} country={country} />
        </div>
      </div>
    );
  }
}

export default Graph;