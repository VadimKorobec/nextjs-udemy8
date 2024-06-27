import Link from "next/link";

import styles from "./button.module.css";

const Button = (props) => {
  return (
    <Link href={props.link} style={{ textDecoration: "none" }}>
      <div className={styles.btn}>{props.children}</div>
    </Link>
  );
};

export default Button;
