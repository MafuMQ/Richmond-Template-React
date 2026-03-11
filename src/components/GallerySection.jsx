import { useState, useEffect } from 'react'
import { GDRIVE_API_KEY } from '../data/documentCategories'

const GALLERY_FOLDER_ID = import.meta.env.VITE_GALLERY_FOLDER_ID || ''

function GalleryImage({ id, alt }) {
  const [src, setSrc] = useState(`https://drive.google.com/thumbnail?id=${id}&sz=w800`)
  const attempts = useState(0)

  const handleError = () => {
    const n = attempts[0] + 1
    attempts[1](n)
    if (n === 1) {
      // Try lh3 direct URL
      setSrc(`https://lh3.googleusercontent.com/d/${id}=w800`)
    }
    // After 2 failures just silently hide
  }

  if (attempts[0] >= 2) return null

  return <img src={src} alt={alt} onError={handleError} loading="lazy" />
}

export default function GallerySection() {
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!GDRIVE_API_KEY || !GALLERY_FOLDER_ID) { setLoading(false); return }

    fetch(`https://www.googleapis.com/drive/v3/files?q='${encodeURIComponent(GALLERY_FOLDER_ID)}'+in+parents+and+mimeType+contains+'image/'&fields=files(id,name)&pageSize=12&key=${GDRIVE_API_KEY}`)
      .then((r) => { if (!r.ok) throw new Error(); return r.json() })
      .then((data) => setFiles(data.files || []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="gallery-section section-padding">
      <div className="container">
        <div className="gallery-header">
          <div>
            <h6>uMhlabuyalingana Local Municipality</h6>
            <h2>A Glimpse Of Our Municipality</h2>
          </div>
        </div>
        {loading ? (
          <p style={{ textAlign: 'center', padding: '40px 0' }}>
            <i className="fas fa-spinner fa-spin"></i> Loading gallery…
          </p>
        ) : files.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '40px 0', opacity: 0.6 }}>No gallery images available.</p>
        ) : (
          <div className="gallery-grid">
            {files.map((f) => (
              <GalleryImage key={f.id} id={f.id} alt={f.name.replace(/\.[^.]+$/, '')} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
