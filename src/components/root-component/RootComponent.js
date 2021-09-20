import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import EcomApp from '../ecom-app/EcomApp'
import RouteHandler from '../../router/RouteHandler'
import { Provider } from 'react-redux'
import { store, persistor } from '../../store/store'

function RootComponent() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouteHandler>
                    <EcomApp />
                </RouteHandler>
            </PersistGate>
        </Provider>
    )
}

export default RootComponent
