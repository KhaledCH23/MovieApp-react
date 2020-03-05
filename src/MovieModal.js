import React, { Component } from "react";
import Modal from "react-modal";

export default class MovieModal extends Component {
  state = {
    title: "",
    image: "",
    year: "",
    rating: 0,
    modal: false
  };

  handleTitle = e => this.setState({ title: e.target.value });
  handleImage = e => this.setState({ image: e.target.value });
  handleYear = e => this.setState({ year: e.target.value });
  handleRating = e => this.setState({ rating: e.target.value });
  handleAdd = e => {
    e.preventDefault();
    this.props.addMovie({
      title: this.state.title,
      image: this.state.image,
      year: this.state.year,
      rating: this.state.rating
    });
    this.setState({ title: "", image: "", year: "", rating: 0 });
  };
  closeModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <div>
        <div className="new-movie-card">
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.setState({ modal: "true" });
            }}
          >
            +
          </span>
        </div>
        <Modal
          className="modal"
          onRequestClose={this.closeModal}
          isOpen={this.state.modal}
        >
          <strong>Add new movie</strong>
          Title:
          <input
            value={this.state.title}
            placeHolder="Enter title"
            onChange={this.handleTitle}
          />
          Url:
          <input
            value={this.state.image}
            placeHolder="Enter image url"
            onChange={this.handleImage}
          />
          Year:
          <input
            value={this.state.year}
            placeHolder="Enter year"
            onChange={this.handleYear}
          />
          Rating:
          <input
            value={this.state.rating}
            type="number"
            placeHolder="Enter rating"
            onChange={this.handleRating}
          />
          <button onClick={this.handleAdd}>Submit</button>
        </Modal>
      </div>
    );
  }
}
