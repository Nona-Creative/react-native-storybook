import { action } from '@storybook/addon-actions' // eslint-disable-line

const logAction = (actionTaken, componentName) => {
  console.log(actionTaken, componentName) // eslint-disable-line
}

export const handleClick = (componentName) => {
  logAction('Clicked: ', componentName)
}

export const handlePolling = (componentName) => {
  logAction('Polling: ', componentName)
}

export const handleAction = (componentName) => {
  logAction('Action Submitted: ', componentName)
}

export const MockedStore = (key, data) => (
  {
    getState: () => ({ [key]: data }),
    subscribe: () => 0,
    dispatch: action('dispatched Action'),
  }
)
