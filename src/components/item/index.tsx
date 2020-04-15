import React, {FunctionComponent} from "react";
import {connect, useDispatch} from "react-redux";
import {withRouter, RouteComponentProps} from "react-router-dom";
import "./index.scss";
import {Box, Button, Grid} from "@material-ui/core";

interface State {
    item:object;
}

interface OwnProps extends RouteComponentProps {
    item:{
        id:0,
        name:'',
        version:''
    }
}

type Props = OwnProps;

//图标
const cIcon = require('../../assets/componentIcon/com-b17.png');

const mapStateToProps = (state: State) => {
    return {
    };
};

const Item: FunctionComponent<Props> = (props) => {
    const dispatch = useDispatch();


    const handleClick = (id:number) => {
        props.history.push(`/detail?id=${id}`);
    };

    return (
        <Grid className="singleItem" key={props.item.id} container>
            <Grid item xs={5}>
                <Box className="iconContainer">
                    <img className="itemImg" src={cIcon} alt="icon"/>
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Grid item xs={12} className="itemName">
                    {props.item.name}
                </Grid>
                <Grid item xs={12} className="itemVersion">
                    {props.item.version}
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid item xs={12} className="getButton">
                    <Button className="button" variant="contained" size="small"
                            onClick={()=>handleClick(props.item.id)}>详情</Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default withRouter(connect(mapStateToProps,null)(Item));
