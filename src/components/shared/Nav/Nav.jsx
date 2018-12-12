import React, { PureComponent } from "react";
import Sticky from "react-stickynode";
import { getExternalUrls } from "conf/urls";

import Logo from "components/shared/Logo/Logo";

import classnames from "classnames";
import styles from "components/shared/Nav/Nav.module.css";
import buttonStyles from "components/shared/Button/Button.module.css";

export default class Nav extends PureComponent {
  constructor() {
    super();
    this.state = {
      isSticky: false
    };
  }

  handleStateChange = status => {
    if (status.status === Sticky.STATUS_FIXED) {
      this.setState({ isSticky: true });
    } else {
      this.setState({ isSticky: false });
    }
  };

  render() {
    const { isSticky } = this.state;

    const navClass = classnames([styles.root], {
      [styles["root--sticky"]]: isSticky
    });

    const emailClass = classnames([styles.root__link, buttonStyles["root"]]);

    return (
      <Sticky onStateChange={this.handleStateChange} innerZ={1000}>
        <nav className={navClass}>
          <section className={styles.root__content}>
            <section className={styles.root__left}>
              <Logo />
            </section>
            <section className={styles.root__right}>
              <a
                className={styles.root__link}
                target="_blank"
                rel="noopener noreferrer"
                href={getExternalUrls().BEHANCE}
              >
                Clients
              </a>
              <a
                className={emailClass}
                href={`mailto:${getExternalUrls().EMAIL}`}
              >
                Contact
              </a>
            </section>
          </section>
        </nav>
      </Sticky>
    );
  }
}
