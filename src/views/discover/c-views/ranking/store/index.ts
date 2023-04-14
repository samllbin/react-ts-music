import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getRanking from '../service'
export const fetchRankingDataAction: any = createAsyncThunk(
  'fetchdata',
  (_, { dispatch }) => {
    getRanking().then((res) => {
      dispatch(changeRankingAction(res))
    })
  }
)
interface IinitialState {
  list: any
  artistTOPlist: any
  rewardToplist: any
}

const initialState: IinitialState = {
  list: {},
  artistTOPlist: {},
  rewardToplist: {}
}

const rankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
    changeRankingAction(state, { payload }) {
      state.list = payload.list
      state.artistTOPlist = payload.artistToplist
      state.rewardToplist = payload.rewardToplist
    }
  }
})
export const { changeRankingAction } = rankingSlice.actions
export default rankingSlice.reducer
