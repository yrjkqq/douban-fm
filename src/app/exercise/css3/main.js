/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './main.css';
import ScrollToTop from '../../common/ScrollToTop';

export default class CSS3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            transitionClassName: 'src-transition',
            animationState: {
                'animationPlayState': 'paused'
            }
        };
        this.handleTransitionClick = this.handleTransitionClick.bind(this);
        this.handleAnimationToggle = this.handleAnimationToggle.bind(this);
        this.handleResetAnimation = this.handleResetAnimation.bind(this);
        this.handleClickModel = this.handleClickModel.bind(this);
    }

    handleTransitionClick() {
        // this.setState({
        //     transitionClassName: 'new-transition'
        // });
        this.setState(state => {
            return {
                transitionClassName: state.transitionClassName === 'src-transition' ? 'new-transition' : 'src-transition'
            }
        })
    }

    handleAnimationToggle() {
        this.setState(state => {
            return {
                animationState: {
                    animationPlayState: state.animationState.animationPlayState === 'running' ? 'paused' : 'running'
                }
            }
        })
    }

    handleResetAnimation() {
        this.setState({
            animationState: {
                'animation-name': 'none'
            }
        })
    }

    handleClickModel = (event) => {
        var model = document.getElementById('model');
        model.style.display = 'block';
        event.preventDefault();
    }

    handleCloseModel = (event) => {
        var model = document.getElementById('model');
        model.style.display = 'none';
    }


    render() {
        return (
            <div>
                <h2>CSS3</h2>
                <div className="section">
                    <h3>边框</h3>
                    <div>
                        <div id="border">
                            something
                    </div>
                    </div>
                </div>
                <div className="section">
                    <h3>圆角</h3>
                    <div>
                        <div id="circle-angle">
                            something
                    </div>
                    </div>
                </div>
                <div className="section">
                    <h3>背景图片</h3>
                    <div>
                        <div id="background">

                        </div>
                    </div>
                    <div id="background-clip">
                        background-clip: 指定位置开始绘制背景
                </div>
                </div>
                <div className="section">
                    <h2>渐变</h2>
                    <div>
                        <div id="linear-gradient">
                            线性渐变
                    </div>
                    </div>
                    <div>
                        <div id="transparent-gradient">透明渐变</div>
                    </div>
                    <div>
                        <div id="repeat-gradient">重复线性渐变</div>
                    </div>
                </div>
                <div className="section">
                    <div>
                        <div id="radial-gradient">径向渐变</div>
                    </div>
                    <div id="repeat-radial-gradient">重复径向渐变</div>
                </div>
                <div className="section">
                    <h2>文本效果</h2>
                    <div>
                        <div id="shadow-text">Text shadow effect</div>
                    </div>
                    <div style={{ 'flexGrow': '0', 'padding': '1rem' }}>
                        <div id="box-shadow">
                            <img src="/assets/images/rock.jpg" width="600" height="400" alt="" />
                        </div>
                    </div>
                    <div className="card" style={{ 'flexGrow': '0', 'margin': '1rem', 'paddingLeft': '0', 'border': 'none' }}>
                        <div className="header">
                            <h1>1</h1>
                        </div>
                        <div className="container">
                            <p>January 1, 2016</p>
                        </div>
                    </div>
                    <div className="img-card none-border">
                        <img src="/assets/images/rock.jpg" alt="card" style={{ 'width': '100%' }} />
                        <div className="desc">
                            <p>Hardanger, Norway</p>
                        </div>
                    </div>
                    <div className="word-wrap">
                        You win. congratulations!
                </div>
                </div>
                <div className="section">
                    <h2>字体</h2>
                    <div id="custom-font">
                        css is my favorite! 哈哈
                </div>
                </div>
                <div className="section">
                    <h2>2D 转换</h2>
                    <div id="dimension-2">
                        hello
                </div>
                    <span>other span</span>
                    <div>
                        other content...
                </div>
                </div>
                <div className="section">
                    <h2>3D</h2>
                    <div id="dimension-3">
                        parent
                    <div id="dimension-3-child">
                            hello 3D
                    </div>
                    </div>
                    <div id="perspective">
                        parent
                    <div id="perspective-child">child</div>
                    </div>
                </div>
                <div className="section">
                    <h2>过渡</h2>
                    <div id="transition" className="none-border">
                        width
                    </div>
                    <div id="transition-rotate"
                        className={this.state.transitionClassName + ' none-border'}>
                        <p>CSS3</p>
                        <p>过渡</p>
                    </div>
                    <div>
                        <button onClick={this.handleTransitionClick}>Transition</button>
                    </div>
                </div>
                <div className="section">
                    <h2>动画</h2>
                    <div id="animation-01" style={this.state.animationState}>

                    </div>
                    <div>
                        <button onClick={this.handleAnimationToggle}>toggle</button>
                        <button onClick={this.handleResetAnimation}>reset</button>
                    </div>
                </div>
                <div>
                    <h3>多列</h3>
                    <div id="multi-column">
                        <h4>英国维斯米斯特教堂碑文</h4>
                        “当我年轻的时候，我梦想改变这个世界；当我成熟以后，我发现我不能够改变这个世界，我将目光缩短了些，决定只改变我的国家；当我进入暮年以后，我发现我不能够改变我们的国家，我的最后愿望仅仅是改变一下我的家庭，但是，这也不可能。当我现在躺在床上，行将就木时，我突然意识到：如果一开始我仅仅去改变我自己，然后，我可能改变我的家庭；在家人的帮助和鼓励下，我可能为国家做一些事情；然后，谁知道呢?我甚至可能改变这个世界。”
                    </div>
                </div>
                <div>
                    <h3>用户界面</h3>
                    <h6>自定义大小</h6>
                    <div id="user-interface">
                        <div>resize</div>
                    </div>
                    <h6>方框大小调整</h6>
                    <div id="border-box">
                        <div>left</div>
                        <div>right</div>
                    </div>
                    <h6>外形修饰</h6>
                    <div id="outline-border">
                        outline
                    </div>
                    <div>
                        outline below
                    </div>
                </div>
                <div>
                    <h3>布局图片</h3>
                    <div id="rock-img">
                        <img src="/assets/images/rock.jpg" alt="rock" />
                    </div>
                    <h6>图片作为链接</h6>
                    <a target="_blank" href="/assets/images/rock.jpg" id="rock-img-link">
                        <img src="/assets/images/rock.jpg" alt="rock" />
                    </a>
                    <h6>图片滤镜</h6>
                    <div id="filter-img">
                        <img src="/assets/images/pineapple.jpg" alt="Pineapple" width="300" height="300" />
                        <img className="blur" src="/assets/images/pineapple.jpg" alt="Pineapple" width="300" height="300" />
                        <img className="brightness" src="/assets/images/pineapple.jpg" alt="Pineapple" width="300" height="300" />
                        <img className="contrast" src="/assets/images/pineapple.jpg" alt="Pineapple" width="300" height="300" />
                        <img className="grayscale" src="/assets/images/pineapple.jpg" alt="Pineapple" width="300" height="300" />
                        <img className="huerotate" src="/assets/images/pineapple.jpg" alt="Pineapple" width="300" height="300" />
                        <img className="invert" src="/assets/images/pineapple.jpg" alt="Pineapple" width="300" height="300" />
                        <img className="opacity" src="/assets/images/pineapple.jpg" alt="Pineapple" width="300" height="300" />
                        <img className="saturate" src="/assets/images/pineapple.jpg" alt="Pineapple" width="300" height="300" />
                        <img className="sepia" src="/assets/images/pineapple.jpg" alt="Pineapple" width="300" height="300" />
                        <img className="shadow" src="/assets/images/pineapple.jpg" alt="Pineapple" width="300" height="300" />
                    </div>
                    <h6>响应式图片相册</h6>
                    <div className="responsive">
                        <div className="img">
                            <img src="/assets/images/rock.jpg" alt="rock.img" />
                            <div className="desc">Add a description of the image here</div>
                        </div>
                        <div className="img">
                            <img src="/assets/images/rock.jpg" alt="rock.img" />
                            <div className="desc">Add a description of the image here</div>
                        </div>
                        <div className="img">
                            <img src="/assets/images/rock.jpg" alt="rock.img" />
                            <div className="desc">Add a description of the image here</div>
                        </div>
                        <div className="img">
                            <img src="/assets/images/rock.jpg" alt="rock.img" />
                            <div className="desc">Add a description of the image here</div>
                        </div>
                        <div className="img">
                            <img src="/assets/images/rock.jpg" alt="rock.img" />
                            <div className="desc">Add a description of the image here</div>
                        </div>
                    </div>
                    <h6>模态框</h6>
                    <div>
                        <img src="/assets/images/rock.jpg" alt="rock" onClick={this.handleClickModel} id="rock-img-click" />
                    </div>
                    <div id="model">
                        <div id="model-first-layer">
                        </div>
                        <div id="model-second-layer">
                            <span className="close" onClick={this.handleCloseModel}>X</span>
                            <img src="/assets/images/rock.jpg" alt="rock" width="600" height="400" />
                        </div>
                    </div>
                </div>
                <div>
                    <h3>按钮</h3>
                    <div id="button">
                        <button>按钮</button>
                        <a href="" className="button">按钮</a>
                        <button className="button"><span>按钮</span></button>
                        <input className="button disabled" type="button" value="按钮" />
                    </div>
                    <div>
                        <h6>波纹按钮</h6>
                        <button className="wave-button">按钮</button>
                    </div>
                    <div>
                        <h6>可按压按钮</h6>
                        <button className="press-button">可按压按钮</button>
                    </div>
                </div>
                <div>
                    <h3>分页</h3>
                    <div id="pagination">
                        <ul className="simple-pagination">
                            <li><a href="#">«</a></li>
                            <li><a href="#">1</a></li>
                            <li className="active"><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">6</a></li>
                            <li><a href="#">7</a></li>
                            <li><a href="#">»</a></li>
                        </ul>
                    </div>
                    <h6>面包屑</h6>
                    <div>
                        <ul className="breadcrumb">
                            <li><a href="#">首页 </a></li>
                            <li><a href="#">前端 </a></li>
                            <li><a href="#">HTML 教程 </a></li>
                            <li>HTML 段落</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>多媒体查询</h3>
                    <div className="wrapper">
                        <div id="leftsidebar">
                            <ul id="menulist">
                                <li className="menuitem">Menu-item 1</li>
                                <li className="menuitem">Menu-item 2</li>
                                <li className="menuitem">Menu-item 3</li>
                                <li className="menuitem">Menu-item 4</li>
                                <li className="menuitem">Menu-item 5</li>
                            </ul>
                        </div>
                        <div id="main">
                            <h1>重置浏览器窗口查看效果！</h1>
                            <p>在屏幕可视窗口尺寸大于 480 像素时将菜单浮动到页面左侧。</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>多媒体查询示例</h3>
                    <div id="media-example">
                        <ul>
                            <li><a data-email="qjy9002@163.com" href="mailto:qjy9002@163.com" target="_blank" rel="noopener noreferrer">send-email</a></li>
                            <li><a data-email="qjy9002@163.com" href="mailto:qjy9002@163.com" target="_blank" rel="noopener noreferrer">send-email</a></li>
                            <li><a data-email="qjy9002@163.com" href="mailto:qjy9002@163.com" target="_blank" rel="noopener noreferrer">send-email</a></li>
                        </ul>
                    </div>
                </div>
                <ScrollToTop />
            </div>
        );
    }
}