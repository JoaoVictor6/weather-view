export interface ForecastsProps {
  day: string
  low: number
  high: number
  text: string
}
export interface APIResponse {
  location: {
    city: string
    region: string
    country: string
  }
  // eslint-disable-next-line camelcase
  current_observation: {
    astronomy: {
      sunrise: string
      sunset: string
    }
    condition: {
      text: string
      temperature: number
    }
  }
  forecasts: ForecastsProps[]
}
