import { action } from '@storybook/addon-actions'

const logEvent = (eventType, value) => {
  console.log(eventType, value)
}

export const handleClick = name => logEvent('Clicked: ', name)
export const handlePolling = name => logEvent('Polling: ', name)
export const handleAction = name => logEvent('Action Submitted: ', name)

export const MockedStore = (key, data) => ({
  getState: () => ({ [key]: data }),
  subscribe: () => 0,
  dispatch: () => action('Dispatched Action'),
})
