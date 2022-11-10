import React from 'react'

import { Cards, Chart, CountryPicker } from "./components";

import { fetchData } from './api';

import styles from "./App.module.css"
// import axios from 'axios';
import coronaImage from "./image/image.png"


class App extends React.Component {
    state = {
        data: {},
        country: "",
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });

    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });


        // console.log(country);
        // console.log(fetchedData);


    }




    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt='' />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App
