export default function TopBar() {
  return (
    <div className="top-bar">
      <ul className="contact-list">
        <li><i className="fas fa-phone"></i> (035) 592 0680</li>
        <li><i className="fas fa-clock"></i> Mon–Fri: 07:30am – 16:00pm</li>
        <li>
          <i className="fas fa-envelope"></i>
          <a href="mailto:info@mhlabuyalingana.gov.za">info@mhlabuyalingana.gov.za</a>
        </li>
        <li><i className="fas fa-map-marker-alt"></i> Main Road R22, KwaNgwanase</li>
      </ul>
      <a href="https://umhlabuyalingana.gov.za/contact-us/" className="btn">Report An Issue</a>
    </div>
  )
}
