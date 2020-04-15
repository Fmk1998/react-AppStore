import React, {FunctionComponent, useEffect, useState} from "react";
import {connect} from "react-redux";
import {withRouter, RouteComponentProps} from "react-router-dom";
import "../home/index.scss";
import {Grid} from "@material-ui/core";
import {GetParamByName} from 'para-lib'
import {queryComponentsByType} from "../../services/menuService";
import Item from "../../components/item";


interface State {
}

interface OwnProps extends RouteComponentProps {
}

type Props = OwnProps;

//图标
const cIcon = require('../../assets/componentIcon/com-b17.png');

const mapStateToProps = (state: State) => {
    return {
    };
};

const Type: FunctionComponent<Props> = (props) => {

    const [components, setComponents] = useState("");

    //获取url中的type的值
    const type = GetParamByName("key");

    useEffect(() => {
        getComponentsByType().then((values: any) => {
            setComponents(values);
        });
    }, [type]);

    //获取组件数据
    const getComponentsByType = async () => {
        const {data, err} = await queryComponentsByType(type);
        if (err) return;
        return data
    };

    return (
        <div className="common-iframe">
            <Grid container className="showContent">
                <Grid container className="showContent">
                    {Object.values(components).map((item: any) => <Item item={item}/>)}
                </Grid>
            </Grid>
        </div>
    );
};

export default withRouter(connect(mapStateToProps, null)(Type));
