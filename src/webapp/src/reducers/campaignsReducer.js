const SET_CAMPAIGNS = "SET_CAMPAIGNS";

export const initialState = {
  campaigns: []
};

const campaignsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAMPAIGNS:
      return Object.assign({}, state, {
        campaigns: action.campaigns
      });
    default:
      return state
  }
}

export function setCampaigns(campaigns) {
  return {
    type: SET_CAMPAIGNS,
    campaigns
  }
}

export default campaignsReducer;