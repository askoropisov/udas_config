import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import flapReducer from '../redux/flowMeter/flap/flapSlice';
import flowMeterSlice from '../redux/flowMeter/flowMeterSensor/flowMeterSlice';
import preassureSlice from '../redux/flowMeter/preassureSensor/preassureSensorSlice';

export const store = configureStore({
  reducer: {
    flowMeter: combineReducers({
      flap: flapReducer,
      flowMeterSensor: flowMeterSlice,
      preassureSensor: preassureSlice,
    }),
    counter: counterReducer,
  },
});
