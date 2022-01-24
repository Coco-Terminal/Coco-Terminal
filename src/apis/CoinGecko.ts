import axios from 'axios'

import { CoinGeckoUrl } from '../constants/tokens'

interface SimplePriceProps {
  ids: string
  vsCurrency?: string
  include24hChange?: boolean
}

export async function getSimplePrice({ ids, vsCurrency = 'usd', include24hChange = true }: SimplePriceProps) {
  return await axios.get(`${CoinGeckoUrl}/simple/price`, {
    params: { ids, vs_currencies: vsCurrency, include_24hr_change: include24hChange },
  })
}

export function getCoingeckoSimplePrice<T>(config: {
  ids: string
  vsCurrency?: string
  include24hChange?: boolean
}): Promise<T> {
  return axios
    .get<T>(`${CoinGeckoUrl}/simple/price`, {
      params: {
        ids: config.ids,
        vs_currencies: config.vsCurrency ?? 'usd',
        include_24hr_change: config.include24hChange ?? true,
      },
    })
    .then((response) => response.data)
}
