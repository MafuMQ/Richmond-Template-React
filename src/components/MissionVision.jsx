const cards = [
  {
    icon: 'fas fa-bullseye',
    heading: 'Vision',
    text: 'To develop uMhlabuyalingana Local Municipality as a viable and sustainable local government that improves the quality of life and creates a pleasant living and working environment for all citizens.',
  },
  {
    icon: 'fas fa-rocket',
    heading: 'Mission',
    text: 'uMhlabuyalingana Municipality will improve the livelihood of citizens by delivering services efficiently and effectively, promoting investment and economic growth, and involving local communities and stakeholders in municipal affairs in a structured manner.',
  },
]

export default function MissionVision() {
  return (
    <section id="mission-vision" className="container section-padding mission-vision">
      {cards.map((c) => (
        <div className="mv-card" key={c.heading}>
          <div className="mv-header">
            <i className={c.icon}></i>
            <div>
              <h4>UMHLABUYALINGANA</h4>
              <p>LOCAL MUNICIPALITY</p>
            </div>
          </div>
          <h2>{c.heading}</h2>
          <p>{c.text}</p>
        </div>
      ))}
    </section>
  )
}
