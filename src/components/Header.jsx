import styles from "./Header.module.css"


function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="https://google.com">google</a> | Front-end developer
      </p>
    </div>
  );
}

export default Header;
