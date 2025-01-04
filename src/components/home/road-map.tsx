import classes from './roadmap.module.css';

export default function RoadMap() {
  return (
    <div className='container'>
      <div
        className={[classes.roadMapSection, classes.classMaxWidthApp].join(' ')}
      >
        <h1 className={classes.processTitle}>Our Development Process</h1>
        <div className={classes.roadMapContainer}>
          <div className={classes.first}>
            <div className={classes.firstStep}>
              <div className={classes.stepNum}>1</div>
              <div className={classes.steptext}>
                <span>Preparation Stage - Product Discovery</span>
              </div>

              <div className={classes.leftsidesmall}>
                <p>
                  Based on immersion on clients business and analysis of all
                  components we’re preparing a full SRS document for your
                  product.
                </p>
              </div>
            </div>
          </div>
          <div className={classes.otherSteps}>
            <div className={classes.leftside}>
              <p>
                Based on immersion on clients business and analysis of all
                components we’re preparing a full SRS document for your product.
              </p>
            </div>

            <div className={classes.rightside}>
              <div className={classes.moreSteps}>
                <div className={classes.step}>
                  <div className={classes.otherStepNum}>2</div>
                  <div className={classes.otherSteptext}>
                    <span>Development</span>
                  </div>
                </div>
                <div className={classes.description}>
                  Help bridge the gap in communication and build a productive
                  dialogue to reach a consensus regarding what the whole process
                  will be.
                </div>
              </div>
              <div className={classes.moreSteps}>
                <div className={classes.step}>
                  <div
                    className={classes.otherStepNum}
                    style={{ backgroundColor: '#c3e0fe' }}
                  >
                    3
                  </div>
                  <div
                    className={classes.otherSteptext}
                    style={{ backgroundColor: '#c3e0fe' }}
                  >
                    <span>Testing & Bug Fixing</span>
                  </div>
                </div>
                <div className={classes.description}>
                  Agility is the name of the game. Our scrum-based Agile
                  development methodology ensures frequent builds and gives you
                  plenty of time to test and adjust. While our experienced
                  Quality Assurance (QA) team will identify and manage testing.
                </div>
              </div>
              <div className={classes.moreSteps}>
                <div className={classes.step}>
                  <div
                    className={classes.otherStepNum}
                    style={{ backgroundColor: '#d7fff4' }}
                  >
                    4
                  </div>
                  <div
                    className={classes.otherSteptext}
                    style={{ backgroundColor: '#d7fff4' }}
                  >
                    <span>Launch</span>
                  </div>
                </div>
                <div className='sm:flex sm:gap-10 gap-0 px-3'>
                  <div className={classes.description}>
                    We have QA testing as a separate stage of the process and
                    that’s why we’re providing top-notch mobile products.
                  </div>
                  <div className={classes.roadmap_finallArrow}></div>
                </div>
              </div>
              <div className={classes.minSize}>
                <div className={classes.moreSteps}>
                  <div className={classes.step}>
                    <div
                      className={classes.otherStepNum}
                      style={{ backgroundColor: '#dfdfdf' }}
                    >
                      5
                    </div>
                    <div
                      className={classes.otherSteptext}
                      style={{ backgroundColor: '#dfdfdf' }}
                    >
                      <span>Support (∞)</span>
                    </div>
                  </div>
                  <div className={classes.description}>
                    Develop applications that fully meet market requirements.
                    When the application is fully ready, we publish it on Google
                    Play and App Store and take on any questions that may arise
                    during its publication.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.last}>
            <div className={classes.lastStep}>
              <div className={classes.lastSteptext}>
                <span>Support (∞)</span>
              </div>
              <div className={classes.lastStepNum}>5</div>
            </div>
            <div className={classes.lastDescription}>
              Develop applications that fully meet market requirements. When the
              application is fully ready, we publish it on Google Play and App
              Store and take on any questions that may arise during its
              publication.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
