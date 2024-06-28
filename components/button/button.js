import Link from "next/link";

import styles from "./button.module.css";

const Button = (props) => {
  return (
    <>
      {props.link ? (
        <Link href={props.link} style={{ textDecoration: "none" }}>
          <div className={styles.btn}>{props.children}</div>
        </Link>
      ) : (
        <button onClick={props.onClick} className={styles.btn} type="submit">
          {props.children}
        </button>
      )}
    </>
  );
};

export default Button;
