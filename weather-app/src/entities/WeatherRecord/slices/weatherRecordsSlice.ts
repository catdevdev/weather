// import { createSlice } from '@reduxjs/toolkit'
// import { v4 as uuidv4 } from 'uuid'

// // import { createRocket } from '../api/createRocket/createRocket'
// // import { deleteRocketById } from '../api/deleteRocketById/deleteRocketById'
// // import { editRocket } from '../api/editRocket/editRocket'
// // import { fetchMoreRockets } from '../api/fetchMoreRockets/fetchMoreRockets'
// // import { fetchRockets } from '../api/fetchRockets/fetchRockets'
// // import { RocketsInitialState } from '../models/rockets'

// const weatherRecordsSlice = createSlice({
//   name: 'weatherRecords',
//   initialState: {
//     page: 1,
//     rockets: [],
//     isLoading: false,
//     isPaginationLoading: false,
//     hasMore: true,
//     error: null,
//   } as RocketsInitialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder.addCase(fetchRockets.pending, state => {
//       state.isLoading = true
//     })
//     builder.addCase(fetchRockets.fulfilled, (state, action) => {
//       state.rockets = action.payload.map(rocket => ({
//         ...rocket,
//         isUploading: false,
//         requestId: action.meta.requestId,
//       }))
//       state.page += 1
//       state.isLoading = false
//     })
//     builder.addCase(fetchRockets.rejected, (state, action) => {
//       state.error = action.error.message
//       state.isLoading = false
//     })
//   },
// })

// export { weatherRecordsSlice }
