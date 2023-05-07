import { timeFormat } from 'd3-time-format'
import React from 'react'

interface Args {
  from: string | null
  to: string | null
  online?: '20min' | '60min' | null
}

export const getTimeFrame = (params: Args) => {
  if (params.from && params.to) {
    return {
      dateFrom: params.from,
      dateTo: params.to,
    }
  }
  if (params.online === '20min') {
    return {
      dateFrom: timeFormat('%Y-%m-%dT%H:%M:%S%Z')(
        new Date(new Date().getTime() - 20 * 60000),
      ),
      dateTo: timeFormat('%Y-%m-%dT%H:%M:%S%Z')(new Date()),
    }
  }
  if (params.online === '60min') {
    return {
      dateFrom: timeFormat('%Y-%m-%dT%H:%M:%S%Z')(
        new Date(new Date().getTime() - 60 * 60000),
      ),
      dateTo: timeFormat('%Y-%m-%dT%H:%M:%S%Z')(new Date()),
    }
  }
  if (!params.online) {
    return {
      dateFrom: timeFormat('%Y-%m-%dT%H:%M:%S%Z')(
        new Date(new Date().getTime() - 5 * 60000),
      ),
      dateTo: timeFormat('%Y-%m-%dT%H:%M:%S%Z')(new Date()),
    }
  }
  return {
    dateFrom: timeFormat('%Y-%m-%dT%H:%M:%S%Z')(
      new Date(new Date().getTime() - 5 * 60000),
    ),
    dateTo: timeFormat('%Y-%m-%dT%H:%M:%S%Z')(new Date()),
  }
}
