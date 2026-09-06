import React, { Component } from "react";

class MyComponentApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://dev.to/api/articles?username=nataliedeweerd#')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          data: data[0], // Since the API returns an array, I'm assuming you want to access the first item.
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error,
          isLoading: false
        });
      });
  }

  render() {
    const { data, isLoading, error } = this.state;
    if (isLoading) {
      return <div>Loading..</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        {data && (
          <div>
            <h1>Description: {data.description}</h1>
            <ul>
              <h2>Tag List</h2>
              {data.tag_list.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <img src={data.cover_image} alt="cover Image" />
          </div>
        )}
      </div>
    );
  }
}

export default MyComponentApi;
