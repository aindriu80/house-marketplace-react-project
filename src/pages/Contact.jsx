import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

function Contact() {
  const [message, setMessage] = useState('')
  const [landlord, setLandlord] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const params = useParams()

  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, 'users', params.landlord)
      const docSnap = await getDoc(docRef)

      if (docSnap) {
        setLandlord(docSnap.data())
      } else {
        toast.error('Could not get landlord data')
      }
    }
    getLandlord()
  }, [params.landlordId])

  const onChange = (e) => setMessage(e.target.value)

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Contact Landlord</p>
      </header>
      {landlord !== null && (
        <main>
          <div className="contactLandlord">
            <p className="landlordName">
              Contact:
              {landlord?.name}
            </p>
            <form className="message">
              <div className="messageDiv">
                <label htmlFor="message" className="messageLabel">
                  Message
                </label>
                <textarea
                  name="message"
                  id="id"
                  className="textarea"
                  value={message}
                  onChange={onChange}></textarea>
              </div>
              <a
                href={`mailto:${landlord.email}&Subject=${searchParams.get(
                  'listingName'
                )}`}></a>
              <button type="button" className="primaryButton">
                Send Message
              </button>
            </form>
          </div>
        </main>
      )}
    </div>
  )
}

export default Contact
