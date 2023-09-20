
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

import styles from '../styles/components/UserCard.module.css'

export interface UserCardProps {
    user: number,
}
export const UserSticker = ({ user }: UserCardProps) => {
    
  const [userDetail, setUserDetail] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const config = {
          url:`http://localhost:3000/user/${user}`,
          method:'GET'
        }
        console.log(user)
        const response = await axios(config)
      
        setUserDetail(response.data)
        setLoading(false)

      } catch (error) {
        setError('Failed to connect to server :(')
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  if (loading) {
    // Display loading state
    return <div className='error-messages'>Loading...</div>
  }
  if (error) {
    // Display error message
    return <div className='error-messages'>Something went wrong: {error}</div>
  }
  return (
    <Card className={styles.sticker}>  
    {userDetail.name}   - {userDetail.location}  
  </ Card>
  )
}