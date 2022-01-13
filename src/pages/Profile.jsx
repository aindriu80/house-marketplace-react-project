import { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'

function Profile() {
  const [user, setUser] = useState(null)

  const auth = getAuth()
  useEffect(() => {
    setUser(auth.currentUser)
  }, [])

  return user ? <h2>{user.displayName}</h2> : 'Not logged in'
}
export default Profile
