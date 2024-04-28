import { OPTIONS } from '@/services/rapidapi-config'
import { RealTimeWeather } from '@/types/types-rapidapi'

export async function fetcher(url: string) {
  try {
    const res = await fetch(url, OPTIONS)

    if (!res.ok) {
      const error = new Error('Error data fetching')
      throw error
    }

    const data = await res.json()
    return data as RealTimeWeather
  } catch (error) {
    console.error(error)
  }
}
