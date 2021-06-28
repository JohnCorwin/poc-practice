import { setCampaigns } from "../reducers/campaignsReducer";

export function fetchCampaigns() {
  var campaigns = [{openings: 320, applications: 543, filled: 20},
                        {openings: 20, applications: 43, filled: 2},
                        {openings: 50, applications: 95, filled: 5}];
  return (dispatch) => {
    dispatch(setCampaigns(campaigns));
  }
}
