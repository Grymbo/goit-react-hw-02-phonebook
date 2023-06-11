import React,{ Component } from "react";
import styles from "../styles/contactList.module.css";

export default class ContactList extends Component {
    render() {
        const { data, handleDelete } = this.props;

        return (
            <>
                <div className={styles.list__user}>
                    <ul>
                        {data.map((user) => (
                            <li key={user.userId}>
                                {user.name}: {user.number}
                                <button
                                    className={styles.delete}
                                    onClick={() => handleDelete(user.userId)}
                                    id={user.userId}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}