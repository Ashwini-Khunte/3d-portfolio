import { Chrono } from "react-chrono";
import { motion } from "framer-motion"

import { styles } from "../../styles"
import { experiences } from "../../constants"
import { SectionWrapper } from "../../hoc"
import { textVariant } from "../../utils/motion"

const items = [
  {
    title: "January 2022",
    cardTitle: "Event 1",
    cardSubtitle: "Event 1 Subtitle",
    cardDetailedText: "This is the first event on the timeline.",
  },
  {
    title: "February 2022",
    cardTitle: "Event 2",
    cardSubtitle: "Event 2 Subtitle",
    cardDetailedText: "This is the second event on the timeline.",
  },
  {
    title: "March 2022",
    cardTitle: "Event 3",
    cardSubtitle: "Event 3 Subtitle",
    cardDetailedText: "This is the third event on the timeline.",
  }
];

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        What I have done so far
      </p>
      <h2 className={styles.sectionHeadText}>
        Work Experience.
      </h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      itemWidth={150}
    />
    </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")