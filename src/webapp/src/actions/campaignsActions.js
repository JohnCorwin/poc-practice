import { setCampaigns } from "../reducers/campaignsReducer";

export function fetchCampaigns() {
  var campaigns = [{country: "China", openings: 320, applications: 543, filled: 20},
                        {country: "Japan", openings: 20, applications: 43, filled: 2},
                        {country: "Norway", openings: 50, applications: 95, filled: 5},
                        {country: "Tierra del Fuego", openings: 10, applications: 17, filled: 1}];
  return (dispatch) => {
    dispatch(setCampaigns(campaigns));
  }
}
