import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import City from "../city";
import CitiesComponent from "./CitiesComponent";
import AddIcon from "@material-ui/icons/Add";
import Community from "../community";

class CityComponent extends Component {
  state = {
    name: "",
    latitude: "",
    longitude: "",
    population: "",
    community: {
      cities:[]
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  componentDidMount() {
   const community = new Community();
   console.log("Community", community)
   this.setState( prevState => ({
     ...prevState,
     community 
   }));
  }

  addCity = () => {
    const { name, longitude, latitude, population, community} = this.state;
    community.addCity(new City(name, longitude, latitude, population));
    console.log("Community", community)
    this.setState(prevState => ({
      ...prevState, community
    }));
  };

  render() {
    const { community } = this.state;
    return (
      <div>
        <br />
        <Typography variant="title" color="primary">
          Cities of the World
        </Typography>
        <div>
          <br />
          <TextField
            label="City Name"
            id="name"
            // defaultValue="Default Value"
            // className={none}
            // helperText="Some important text"
            onChange={this.handleChange}
          />
          <TextField
            label="Latitude"
            id="latitude"
            // defaultValue="Default Value"
            // className={none}
            // helperText="Some important text"
            onChange={this.handleChange}
          />
          <TextField
            label="Longitude"
            id="longitude"
            // defaultValue="Default Value"
            // className={none}
            // helperText="Some important text"
            onChange={this.handleChange}
          />
          <TextField
            label="Population"
            id="population"
            // defaultValue="Default Value"
            // className={none}
            // helperText="Some important text"
            onChange={this.handleChange}
          />

          <Fab color="primary" aria-label="Add">
            <AddIcon variant="colorSecondary" onClick={this.addCity} />
          </Fab>
        </div>
        {community && community.cities && community.cities.length > 0 && (
          <CitiesComponent
            header={[
              "City Name",
              "Longitude",
              "Latitude",
              "Class",
              "Hemisphere",
              "Population"
            ]}
            cities={community.cities}
            community={community}
          />
        )}
      </div>
    );
  }
}

export default CityComponent;
