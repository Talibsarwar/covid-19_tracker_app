import React from "react";
import { Chart, CountryPicker, Cards } from '../components';
import styles from "../App.css";
import { fetchData } from '../api';

class Graph extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <h1>COVID-19 TRACKER APP By Talib Sarwar</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <div classsName="filter">
        </div>
        <br />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default Graph;