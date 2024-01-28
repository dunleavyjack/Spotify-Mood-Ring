import { createMachine } from 'xstate';
import { Events, States } from './state-machine.types';

export const stateMachine = createMachine({
  id: 'moodring',
  initial: States.LOGIN_SCREEN,
  states: {
    [States.LOGIN_SCREEN]: {
      on: {
        [Events.LOGIN]: {},
        // Login
      },
    },
    [States.HOME_SCREEN]: {},
  },
});
