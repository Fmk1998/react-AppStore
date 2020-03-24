import React, {FunctionComponent,useEffect} from "react";
import {connect, useDispatch} from "react-redux";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {queryAppsAction} from "../../store/actions/appAction";
// import Api from '../../config/api.config'
import iconUrl from '../../assets/logo.png'
import {
    Button, ButtonBase,
    CardActions,
    createStyles,
    Grid,
    Paper,
    Theme,
    Typography
} from "@material-ui/core";

import "./index.scss";
import {DETAIL_MENU} from "../../store/action-types";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            margin: 5,
            width: 250,
            height: 90,
        },
        image: {
            width: 80,
            height: 80,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    }),
);

//获取store的状态
interface State {
    menu?: {
        currentMenu?: string
    },
    app?:{
        appList?: []
    }
}

//自身的属性
interface OwnProps extends RouteComponentProps {
    appList: [],
    currentMenu: ''
}

type Props = OwnProps;

//将当前store里的数据以我们的组件需要的形式传递到组件
const mapStateToProps = (state: State) => {
    return {
        currentMenu: state.menu?.currentMenu,
        appList: state.app?.appList,
    };
};

//home组件渲染
const Home: FunctionComponent<Props> = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const itemClick = (item: any) => () => {
        //利用dispatch函数，创建回调props将actions送到store
        dispatch({
            type: DETAIL_MENU,
            key: item.id,
            currentMenu: props.currentMenu
        });
        //  路由跳转
        props.history.push('detail')
    };

    // 请求菜单数据
    useEffect(() => {
        dispatch(queryAppsAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="common-iframe">
            {
                props.currentMenu
                    ? <span>{props.currentMenu}</span>
                    : <span>页面跑丢了,需要添加后续逻辑</span>
            }
            {/*<Grid container>
                {props.appList.map((value: any) => (
                    value.children && value.url === props.currentMenu
                        ? (value.children.map((item: any) => (
                            <Paper className={classes.paper} key={item.key} >
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} alt="complex" src={item.iconUrl} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography variant="body2" gutterBottom>
                                                    {item.name}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <CardActions>
                                                    <Button size="small" onClick={itemClick(item)}>Learn More</Button>
                                                </CardActions>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        )))
                        : null
                ))}
            </Grid>*/}
            <Grid container>
                {props.appList.map((item: any) => (
                    <Paper className={classes.paper} key={item.id} >
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src={iconUrl} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography variant="body2" gutterBottom>
                                            {item.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <CardActions>
                                            <Button size="small" onClick={itemClick(item)}>Learn More</Button>
                                        </CardActions>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                ))
                }
            </Grid>
        </div>
    );
};

export default withRouter(connect(mapStateToProps, null)(Home));
