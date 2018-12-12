import React from "react";

import ServiceCard from "components/shared/Services/ServiceCard";
import IconDesign from "components/shared/SVGs/IconDesign";
import IconDevelopment from "components/shared/SVGs/IconDevelopment";
import IconBranding from "components/shared/SVGs/IconBranding";
import Bronto from "components/shared/SVGs/Bronto";
import Leaves from "components/shared/SVGs/Leaves";
import PlantYellowGreen from "components/shared/SVGs/PlantYellowGreen";

import styles from "components/shared/Services/Services.module.css";

const Services = () => {
  return (
    <section className={styles.root}>
      <Leaves className={styles.root__leaves} />
      <Bronto className={styles.root__bronto} />
      <section className={styles.root__content}>
        <header className={styles.root__heading}>
          <h1 className={styles["root__heading__text--1"]}>We</h1>
          <h1 className={styles["root__heading__text--2"]}>can</h1>
          <h1 className={styles["root__heading__text--3"]}>help!</h1>
        </header>
        <section className={styles.root__cards}>
          <ServiceCard
            icon={IconDesign}
            heading="Design"
            body="Landing Pages, Mobile & Web App Design."
          />
          <ServiceCard
            icon={IconDevelopment}
            heading="Development"
            body="HTML/CSS, JavaScript, WordPress, Responsive Websites & Web Hosting"
          />
          <ServiceCard
            icon={IconBranding}
            heading="Branding"
            body="Visual Identity, Logo Design, Branding Materials."
          />
        </section>
      </section>
      <PlantYellowGreen className={styles["root__plant"]} />
    </section>
  );
};

export default Services;
