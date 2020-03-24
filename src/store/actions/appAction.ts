import {queryApps} from "../../services/appService";
import {MENU} from "../action-types";

export const queryAppsAction = () => async (dispatch: any) => {
    const {data, err} = await queryApps();
    if (err) return;
    dispatch({type: MENU, payload: data});
};
