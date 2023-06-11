import React,{ Component } from "react";
import styles from "../styles/filter.module.css";

export default class Filter extends Component {
  render() {
    const { onSearchChange } = this.props;

    return (
      <>
        <div className={styles.filter__container}>
          <label htmlFor="searchInput">
            <h3>Find contacts by name</h3>
          </label>

          <input
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            type="text"
            onChange={onSearchChange}
            placeholder=""
          />
        </div>
      </>
    );
  }
}