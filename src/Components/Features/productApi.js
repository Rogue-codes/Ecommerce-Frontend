// we are importimg createApi and fetchBaseQuery
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// we are creating our productApi slice
export const productAPi = createApi({
    reducerPath: 'productApi', /* moreless like the name of the reducer */
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rogueecommerceapp.herokuapp.com/ https://rogueecommerceapp.herokuapp.com/' /* our base URL where we want to fetch the data from */
    }),
    endpoints:(builder) => ({
        getAllProducts: builder.query ({
            query: () => 'products', /* we getting the data from the '/products' endpoint */
        }),
        getAllLaptops: builder.query ({
            query: () => 'laptop', /* we getting the data from the '/laptop' endpoint */
        }),
        getAllRouterSwitches: builder.query ({
            query: () => 'routerSwitches', /* we getting the data from the '/routerSwitches' endpoint */
        }),
        getAllPrinters: builder.query ({
            query: () => 'printer', /* we getting the data from the '/printer' endpoint */
        }),
        getAllMonitors: builder.query ({
            query: () => 'monitor', /* we getting the data from the '/monitor' endpoint */
        }),
        getElementById: builder.query ({
            query: () => `products/1`, /* we getting individual data from the '/products/1' endpoint */
        }),
    })

})

export const {useGetAllProductsQuery, useGetAllLaptopsQuery, useGetAllRouterSwitchesQuery, useGetAllPrintersQuery, useGetAllMonitorsQuery, useGetElementByIdQuery} = productAPi /* destructuring useGetAllProductsQuery, useGetAllLaptopsQuery and useGetAllRouterSwitchesQuery which is a custom hook we are getting from getAllProducts builder and we are passing it into our productApi slice. */