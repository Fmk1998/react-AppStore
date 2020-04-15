import React, {FunctionComponent,useState,useEffect} from "react";
import {connect} from "react-redux";
import {withRouter, RouteComponentProps} from "react-router-dom";
import "./index.scss";
import {Grid} from "@material-ui/core";
import {queryComponents} from "../../services/menuService";
import Item from "../../components/item";

interface State {
    menu?: {
        currentMenu?: string //3、异步接收menuReducer内的currentMenu，判断当前用户点击的是哪个菜单按钮
    },
}

interface OwnProps extends RouteComponentProps {
    currentMenu: ''
}

type Props = OwnProps;

const mapStateToProps = (state: State) => {
    return {
        currentMenu: state.menu?.currentMenu //4、获取currentMenu的值
    };
};

const Home: FunctionComponent<Props> = (props) => {
    const [components, setComponents] = useState("");

    useEffect(() => {
        getComponents().then((values: any) => {
            setComponents(values);
        });
    }, []);
    //获取组件数据
    const getComponents = async () => {
        const {data, err} = await queryComponents();
        if (err) return;
        return data
    };

    return (
        <div className="common-iframe">
            <Grid container className="showContent">
                {Object.values(components).map((item: any) => <Item item={item}/>)}
            </Grid>
        </div>
    );
};

export default withRouter(connect(mapStateToProps,null)(Home));
