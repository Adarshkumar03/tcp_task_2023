import StepsSection from "./StepsSection";
import user from "../assets/user.png";
import wallet from "../assets/wallet.png";
import linkCard from "../assets/linkCard.png";

const Steps = () => {
    return <div className="steps">
    <div className="figure">
      <div className="ellipse-4"></div>
      <div className="rectangle-8"></div>
      <div className="frame-14">
        <div className="overlap-4">
          <img
            className="ellipse-5"
            src="https://generation-sessions.s3.amazonaws.com/821cf9d36b242fc3bb455c9c4d7fe6d5/img/ellipse-6-1.svg"
          />
          <img
            className="color-potted"
            src="https://generation-sessions.s3.amazonaws.com/821cf9d36b242fc3bb455c9c4d7fe6d5/img/color-potted-01-1.svg"
          />
          <img
            className="color-stool"
            src="https://generation-sessions.s3.amazonaws.com/821cf9d36b242fc3bb455c9c4d7fe6d5/img/color-stool-1.svg"
          />
                <img
                  className="color-module-page"
                  src="https://generation-sessions.s3.amazonaws.com/821cf9d36b242fc3bb455c9c4d7fe6d5/img/color-module-page-02-1.svg"
                />
                <img
                  className="designer-sitting"
                  src="https://generation-sessions.s3.amazonaws.com/821cf9d36b242fc3bb455c9c4d7fe6d5/img/designer-sitting-explaining-1.svg"
                />
                <img
                  className="color-credit-card-2"
                  src="https://generation-sessions.s3.amazonaws.com/821cf9d36b242fc3bb455c9c4d7fe6d5/img/color-credit-card-3.svg"
                />
                <div className="frame-15">
                  <div className="monotone-dark-arrow-wrapper">
                    <img
                      className="monotone-dark-arrow"
                      src="https://generation-sessions.s3.amazonaws.com/821cf9d36b242fc3bb455c9c4d7fe6d5/img/monotone-dark-arrow-1.svg"
                    />
                  </div>
                </div>
              </div>
      </div>
      <div className="three-steps">
        <div className="div-3">
          <p className="steps-head">Start Now With 3 Steps</p>
          <div className="steps-subtext">
            <p className="steps-content">
              Besome a Peyme customer in the easiest way just simple, fast and accurate steps. It won’t take your
              time to experience
            </p>
          </div>
        </div>
        <div className="steps-container">
          <StepsSection src={user}
                        stepTitle="Create Your Account"
                        stepContent="Signing up for your own Peyme account is easy and free. Just connection with phone or gmail
                        instandly"
                        stepNumber="1"
          />
          <StepsSection src={linkCard}
                        stepTitle="Link Your Cards"
                        stepContent="Link your preferred credit, debit or prepaid cards to your Payme account."
                        stepNumber="2"
          />
          <StepsSection src={wallet}
                        stepTitle="All Done"
                        stepContent="Thats all done. Now you can explore any apps, any webs that are ours partnets to transfer with
                        them"
                        stepNumber="3"
          />
        </div>
      </div>
    </div>
  </div>
}

export default Steps;