import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import EScaleSlice from '../redux/configuration/EScaleConfigSlice';
import SpectrometersSlice from '../redux/configuration/SpectrometersConfig';
import flapReducer from '../redux/flowMeter/flap/flapSlice';
import flowMeterSlice from '../redux/flowMeter/flowMeterSensor/flowMeterSlice';
import preassureSlice from '../redux/flowMeter/preassureSensor/preassureSensorSlice';
import temperatureSlice from '../redux/flowMeter/temperature/temperatureSlice';

export const store = configureStore({
  reducer: {
    flowMeter: combineReducers({
      flap: flapReducer,
      flowMeterSensor: flowMeterSlice,
      preassureSensor: preassureSlice,
      temperature: temperatureSlice,
    }),
    configuration: combineReducers({
      escale: EScaleSlice,
      spectrometers: SpectrometersSlice,
    }),
    counter: counterReducer,
  },
});
