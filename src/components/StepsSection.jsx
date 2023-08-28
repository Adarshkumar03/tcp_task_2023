const StepsSection = ({src, stepTitle, stepContent, stepNumber}) => {
    return <div className="steps-section-step">
    <div className="steps-section">
      <img
        className="icon-font-awesome-3"
        src={src}
      />
    </div>
    <div className="step">
      <div className="step-create">Step {stepNumber}:&nbsp;&nbsp;{stepTitle}</div>
      <p className="step-content">
        {stepContent}
      </p>
    </div>
  </div>
}

export default StepsSection