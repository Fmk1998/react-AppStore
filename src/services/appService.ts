import {Get} from "para-lib";
import Api from "../config/api.config";

export const queryApps = () => {
    return Get({
        url: Api.app
    });
};