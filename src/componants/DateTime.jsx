import React, { useEffect, useState } from 'react'

const DateTime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const formatDateTime = () => {
      const now = new Date()
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

      const dayName = days[now.getDay()]
      let hours = now.getHours()
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const seconds = now.getSeconds().toString().padStart(2, '0')
      const ampm = hours >= 12 ? 'PM' : 'AM'

      hours = hours % 12
      if (hours === 0) hours = 12
      const timeString = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`
      const monthName = months[now.getMonth()]
      const date = now.getDate()

      return `${dayName} ${timeString} , ${monthName} ${date}`
    }

    setDateTime(formatDateTime())
    const timer = setInterval(() => {
      setDateTime(formatDateTime())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return <div>{dateTime}</div>
}

export default DateTime
