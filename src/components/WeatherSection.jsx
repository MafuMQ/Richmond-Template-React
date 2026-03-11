import { useState, useEffect } from 'react'

const LATITUDE = -26.98
const LONGITUDE = 32.73
const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Africa%2FJohannesburg&forecast_days=5`

const weatherDescriptions = {
  0: { label: 'Clear sky', icon: 'fas fa-sun' },
  1: { label: 'Mainly clear', icon: 'fas fa-sun' },
  2: { label: 'Partly cloudy', icon: 'fas fa-cloud-sun' },
  3: { label: 'Overcast', icon: 'fas fa-cloud' },
  45: { label: 'Foggy', icon: 'fas fa-smog' },
  48: { label: 'Rime fog', icon: 'fas fa-smog' },
  51: { label: 'Light drizzle', icon: 'fas fa-cloud-rain' },
  53: { label: 'Drizzle', icon: 'fas fa-cloud-rain' },
  55: { label: 'Dense drizzle', icon: 'fas fa-cloud-rain' },
  61: { label: 'Light rain', icon: 'fas fa-cloud-showers-heavy' },
  63: { label: 'Rain', icon: 'fas fa-cloud-showers-heavy' },
  65: { label: 'Heavy rain', icon: 'fas fa-cloud-showers-heavy' },
  80: { label: 'Light showers', icon: 'fas fa-cloud-sun-rain' },
  81: { label: 'Showers', icon: 'fas fa-cloud-showers-heavy' },
  82: { label: 'Heavy showers', icon: 'fas fa-cloud-showers-heavy' },
  95: { label: 'Thunderstorm', icon: 'fas fa-bolt' },
  96: { label: 'Thunderstorm w/ hail', icon: 'fas fa-bolt' },
  99: { label: 'Thunderstorm w/ hail', icon: 'fas fa-bolt' },
}

function getWeather(code) {
  return weatherDescriptions[code] || { label: 'Unknown', icon: 'fas fa-question' }
}

function formatDay(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diff = (d - today) / 86400000
  if (diff === 0) return 'Today'
  if (diff === 1) return 'Tomorrow'
  return d.toLocaleDateString('en-ZA', { weekday: 'short', day: 'numeric', month: 'short' })
}

export default function WeatherSection() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(API_URL)
      .then((r) => { if (!r.ok) throw new Error(); return r.json() })
      .then(setData)
      .catch(() => setError(true))
  }, [])

  if (error) return null
  if (!data) {
    return (
      <section className="weather-section">
        <div className="container weather-content">
          <h3><i className="fas fa-spinner fa-spin"></i> Loading weather…</h3>
        </div>
      </section>
    )
  }

  const current = data.current
  const cw = getWeather(current.weather_code)
  const daily = data.daily

  return (
    <section className="weather-section">
      <div className="container weather-content">
        <div className="weather-current">
          <i className={cw.icon + ' weather-icon-lg'}></i>
          <div>
            <h3>KwaNgwanase</h3>
            <p className="weather-temp">{Math.round(current.temperature_2m)}°C</p>
            <p className="weather-desc">{cw.label} · Humidity {current.relative_humidity_2m}% · Wind {Math.round(current.wind_speed_10m)} km/h</p>
          </div>
        </div>
        <div className="weather-forecast">
          {daily.time.map((day, i) => {
            const fw = getWeather(daily.weather_code[i])
            return (
              <div className="weather-day" key={day}>
                <p className="weather-day-label">{formatDay(day)}</p>
                <i className={fw.icon}></i>
                <p className="weather-day-temps">
                  <span className="temp-hi">{Math.round(daily.temperature_2m_max[i])}°</span>
                  <span className="temp-lo">{Math.round(daily.temperature_2m_min[i])}°</span>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
