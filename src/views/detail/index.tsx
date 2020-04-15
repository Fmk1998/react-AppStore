import React, {FunctionComponent,useState,useEffect} from "react";
import {connect} from "react-redux";
import {withRouter, RouteComponentProps} from "react-router-dom";
import "./index.scss";
import {Button, Grid, Typography, Icon,ButtonBase} from "@material-ui/core";
import Api from "../../config/api.config";
import {CopyToClipboard,GetParamByName} from "para-lib";
import {queryComponents} from "../../services/menuService";

interface State {
    menu2?: {
        componentList?: [],
        currentKeyOfDetail?: object
        currentMenu: string,
    }
}

interface OwnProps extends RouteComponentProps {
    currentMenu: '',
    componentList: [],
    currentKeyOfDetail: null;
}

type Props = OwnProps;

const AwesomeSwiper = require('react-awesome-swiper').default;

const config = {
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    speed: 500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        bulletElement: 'li',
        hideOnClick: true,
        clickable: true,
    },
    slidesPerView: 3,
};

const lbt1 = Api.lbt1;
const lbt2 = Api.lbt2;
const lbt3 = Api.lbt3;
const lbt4 = Api.lbt4;

const mapStateToProps = (state: State) => {
    return {
    };
};

const Detail: FunctionComponent<Props> = (props) => {

    //获取url中的type的值
    const id = GetParamByName("id");

    const copyUrl = (url: any) => () => {
        let url2 = "这是url";
        CopyToClipboard(url2);
    };

    const [components, setComponents] = useState("");

    useEffect(() => {
        getComponents().then((values: any) => {
            setComponents(values);
            debugger
        });
    }, []);
    //获取组件数据
    const getComponents = async () => {
        const {data, err} = await queryComponents();
        if (err) return;
        return data
    };

    return (
        <div className="detail-iframe">
            {Object.values(components).map((value: any) =>
                value.id === "snackapp" ?
                    <Grid className="dC" container key={value.id}>
                        {/*logo图标与获取url*/}
                        <Grid container item xs={12} spacing={2}>
                            <Grid className="dC1" item>
                                <ButtonBase className="dButton">
                                    <Icon className="dIcon">star</Icon>
                                </ButtonBase>
                            </Grid>
                            <Grid className="dC2" container item xs={12} sm>
                                <Grid className="dC2container1" container item direction="column">
                                    <Grid container item xs={11}>
                                        <Grid container className="dC2name" item xs={12}>
                                            <span>{value.name}</span>
                                            <span className="dC2description">{value.version}</span>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <div>
                                                <Button className="button" variant="contained"
                                                        size="medium" onClick={copyUrl(value.jar)}>复制URL</Button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/*具体图片展示*/}
                        <Grid className="dC3" item xs={12}>
                            <AwesomeSwiper config={config}>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img className="lbtImg" src={lbt1}/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="lbtImg" src={lbt2}/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="lbtImg" src={lbt3}/>
                                    </div>
                                    <div className="swiper-slide">
                                        <img className="lbtImg" src={lbt4}/>
                                    </div>
                                </div>
                            </AwesomeSwiper>
                        </Grid>
                        {/*md文档*/}
                        <Grid className="dc4" container item xs={12}>
                            <Typography className="md">
                                体验 React<br/>
                                React 从诞生之初就是可被逐步采用的，因而你可以按需引入或多或少的 React 特性。不管你是想体验下 React，用它给简单的 HTML
                                页面增加一点交互，还是要开始一个完全由 React 驱动的复杂应用，该章节内容里的链接都能帮你快速开始。<br/>
                                <br/>
                                在线体验<br/>
                                如果你对体验 React 感兴趣，可以尝试在线代码编辑器。从 CodePen 或 CodeSandbox 开始一个 React 版本的 Hello World 模版。<br/>
                                如果你喜欢使用自己的文本编辑器，也可以下载这个 HTML
                                文件，然后编辑文件内容，最后再用浏览器从本地文件系统打开文件，预览页面效果。注意：这个文件中包含一个低效率的运行时代码转换脚本，所以我们推荐仅在简单的演示项目中使用。<br/>
                                <br/>
                                在网站中添加 React<br/>
                                你可以立即在 HTML 文件中添加 React，然后选择逐渐拓展它的应用范围，或只在一些动态小部件中使用它。<br/>
                                <br/>
                                创建新的 React 应用<br/>
                                当你刚开始一个 React 应用时，通过 HTML 的 script 标签引入 React 依然是最好的选项，因为这能让你的项目立即启动。
                                但随着应用越来越大，你可能会需要更加集成化的安装方式。我们推荐了一些 JavaScript 工具链，它们适合大型应用。它们只需很少甚至零配置，就能让你充分利用丰富的 React
                                生态。<br/>


                            </Typography>
                        </Grid>
                    </Grid>
                    : null)}
        </div>
    );
};

export default withRouter(connect(mapStateToProps, null)(Detail));

