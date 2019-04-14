import React from 'react';
import './main.css';

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
            </div>
        );
    }
}