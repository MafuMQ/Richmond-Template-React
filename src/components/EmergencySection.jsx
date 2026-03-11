const contacts = [
  { icon: 'fas fa-building', label: 'Municipality', number: '+27 35 592 0680', tel: '+27355920680' },
  { icon: 'fas fa-id-card', label: 'Police', number: '10111', tel: '10111' },
  { icon: 'fas fa-heartbeat', label: 'Ambulance / Fire', number: '10177', tel: '10177' },
  { icon: 'fas fa-hand-paper', label: 'Fraud Line', number: '+27 80 070 1701', tel: '+27800701701' },
]

export default function EmergencySection() {
  return (
    <section className="emergency-section">
      <div className="container emergency-grid">
        {contacts.map((c) => (
          <div className="emergency-card" key={c.label}>
            <i className={c.icon}></i>
            <div>
              <h4>{c.label}</h4>
              <p><a href={`tel:${c.tel}`}>{c.number}</a></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
