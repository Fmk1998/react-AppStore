import {Get} from "para-lib";
import Api from "../config/api.config";

export const queryMenus = () => {
    return Get({
        url: Api.menu
    });
};

export const queryComponents = () => {
    return Get({
        url: Api.list
    });
};

export const queryComponentsByType = (type: string) => {
    return Get({
        url: Api.list + "?type=" + type
    });
};

export const queryTypes = () => {
    return Get({
        url: Api.type
    });
};
