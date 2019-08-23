import { action } from '@storybook/addon-actions'
import addons, { mockChannel } from '@storybook/addons'
import * as SUT from './story.utils'

addons.setChannel(mockChannel())
jest.mock('@storybook/addon-actions', () => ({
  action: jest.fn(),
}))

describe('story utils', () => {
  describe('MockedStore', () => {
    it('should return a mocked store object with the relevant properties', () => {
      // when ...  MockedStore is called with a key and data value
      const store = SUT.MockedStore('jon', {})
      // and ... we call dispatch on the store
      store.dispatch()

      // then ... expect store.getState to return the state
      expect(store.getState()).toEqual({ jon: {} })

      // and ... store.subscribe to return 0
      expect(store.subscribe()).toEqual(0)

      // and action to have been called with 'Dispatched Action'
      expect(action).toHaveBeenCalledWith('Dispatched Action')
    })
  })

  describe('handle events', () => {
    let consoleSpy
    beforeEach(() => {
      consoleSpy = jest.spyOn(global.console, 'log')
    })

    afterEach(() => {
      consoleSpy.mockClear()
    });

    describe('handleAction', () => {
      it('should log an action out to the console when it is called', () => {
        // when ...  handleAction is called with a value
        SUT.handleAction('test')

        // then ... expect console.log to have been called with the correct value
        expect(global.console.log).toHaveBeenCalledWith(
          'Action Submitted: ',
          'test',
        )
      })
    })

    describe('handleClick', () => {
      it('should log the component that was clicked out to the console when it is called', () => {
        // when ...  handleClick is called with a value
        SUT.handleClick('test')

        // then ... expect console.log to have been called with the correct value
        expect(global.console.log).toHaveBeenCalledWith('Clicked: ', 'test')
      })
    })

    describe('handlePolling', () => {
      it('should log an action out to the console when it is called', () => {
        // when ...  handleClick is called with a value
        SUT.handlePolling('test')

        // then ... expect console.log to have been called with the correct value
        expect(global.console.log).toHaveBeenCalledWith('Polling: ', 'test')
      })
    })
  })
})
