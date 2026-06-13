import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

export interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const useCountdown = (targetDate: Date | string) => {
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const calculateCountdown = () => {
      const target = dayjs(targetDate)
      const now = dayjs()
      const diff = target.diff(now, 'millisecond')

      if (diff <= 0) {
        setIsExpired(true)
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setIsExpired(false)
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setCountdown({ days, hours, minutes, seconds })
    }

    calculateCountdown()
    const interval = setInterval(calculateCountdown, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return { countdown, isExpired }
}
