import React, { Component } from 'react';
import './main.css';

function loadSyncImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error('404 not found + ' + url));
        img.src = url;
    })
}

class Html5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            range: 50,
            inputValue: 50,
            sum: 100,
            position: {
                latitude: 0,
                longitude: 0
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        document.createElement('myhero');
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState((state, props) => {
            // 不能在异步中访问 event 对象
            // console.log(event.target.value);
            const otherValue = name === 'range' ? state.inputValue : state.range;
            return {
                [name]: value,
                sum: parseInt(value) + parseInt(otherValue)
            }
        });
        // this.setState({
        //     sum: parseInt(this.state.range) + parseInt(this.state.inputValue)
        // })
    }

    handleDrawSomething = (event) => {
        let firstCanvas = document.getElementById('first-canvas');
        let ctx = firstCanvas.getContext('2d');
        ctx.fillStyle = "#FF0000";
        switch (event.target.innerText.toLowerCase()) {
            case 'line':
                ctx.moveTo(0, 0);
                ctx.lineTo(200, 100);
                ctx.stroke();
                break;
            case 'circle':
                ctx.beginPath();
                ctx.arc(100, 100, 50, 0, 1.5 * Math.PI);
                // fill 填充；stroke 线条
                ctx.fill();
                break;
            case 'text':
                ctx.font = '30px arial';
                // ctx.fillText('Hello world', 10, 50);
                ctx.strokeText('Hello world', 10, 50);
                break;
            case 'linear-gradient':
                let grd = ctx.createLinearGradient(0, 0, 200, 0);
                grd.addColorStop(0, 'red');
                grd.addColorStop(1, 'white');
                ctx.fillStyle = grd;
                ctx.fillRect(10, 10, 150, 80);
                break;
            case 'radial-gradient':
                let radialGrd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
                radialGrd.addColorStop(0, 'red');
                radialGrd.addColorStop(1, 'blue');
                ctx.fillStyle = radialGrd;
                ctx.beginPath();
                ctx.arc(100, 100, 50, 0, 2 * Math.PI);
                ctx.fill();
                break;
            case 'image':
                loadSyncImg('/assets/images/scream.jpg').then((img) => {
                    ctx.drawImage(img, 10, 10);
                }, (error) => console.log(error));
                break;
            default:
                ctx.fillRect(200, 0, 150, 75);
                break;
        }
    }

    handleDragStart = (event) => {
        event.dataTransfer.setData('Text', event.target.id);
    }

    handleDragOver = event => event.preventDefault();

    handleDrop = event => {
        event.preventDefault();
        let data = event.dataTransfer.getData('Text');
        event.target.appendChild(document.getElementById(data));
    }

    getPosition = event => {
        // new Promise(navigator.geolocation)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    position: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                });

            }, (error) => {
                let messageInfo = '';
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        messageInfo = "用户拒绝对获取地理位置的请求。"
                        break;
                    case error.POSITION_UNAVAILABLE:
                        messageInfo = "位置信息是不可用的。"
                        break;
                    case error.TIMEOUT:
                        messageInfo = "请求用户地理位置超时。"
                        break;
                    case error.UNKNOWN_ERROR:
                        messageInfo = "未知错误。"
                        break;
                    default:
                        messageInfo = '';
                }
                console.log('something is wrong. error is' + messageInfo);
            });
            // 服务可用时可以获取位置
            var img_url = "http://api.map.baidu.com/staticimage/v2?ak=UzRn5AnWDhlQSqsWGind2GX4uaZj8Lt5&mcode=666666&center=116.403874,39.914888&width=300&height=200&zoom=11";
            document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "'>";
        }
    }

    render() {
        return (
            <div className="html5">
                <section>
                    <h3>新元素</h3>
                    {/* <div id="canvas">canvas</div> */}
                    {/* <myhero id="my-hero">自定义元素</myhero> */}
                    <h6>datalist</h6>
                    <div>
                        <form action="">
                            <input type="text" list="browsers" />
                            <datalist id="browsers">
                                <option value="IE"></option>
                                <option value="FireFox"></option>
                                <option value="Chrome"></option>
                            </datalist>
                            <input type="submit" />
                        </form>
                    </div>
                    <h6>output</h6>
                    <div>
                        <form output="x.value=parseInt(a.value)+parseInt(b.value)">
                            0<input type="range" id="a" value={this.state.range} name="range" onChange={this.handleChange} />100
                            +<input type="number" id="b" value={this.state.inputValue} name="inputValue" onChange={this.handleChange} />
                            =<output name="x" htmlFor="a b" >{this.state.sum}</output>
                        </form>
                    </div>
                    <h6>新的语义元素</h6>
                    <div>
                        <article>
                            <header>article</header>
                            <p>页面独立的内容区域</p>
                        </article>
                        <aside>
                            <h3>aside</h3>
                            <p>侧边栏，定义 article 之外的内容</p>
                        </aside>
                        <div>
                            <h5>bdi</h5>
                            <p dir="rtl">This arabic word <bdi> إيان </bdi> is automatically displayed right-to-left.</p>
                        </div>
                        <div>
                            <h5>dialog</h5>
                            <dialog open id="dialog">
                                This is an open dialog window
                            </dialog>
                            <div>
                                after dialog;
                                after dialog;
                                after dialog;
                                after dialog;
                                after dialog;
                                after dialog;
                                after dialog;
                                after dialog;
                                after dialog;
                                after dialog;
                                after dialog;
                            </div>
                        </div>
                        <div>
                            <h5>figure</h5>
                            <div>
                                <p> {'<figure> 元素的内容应该与主内容相关，同时元素的位置相对于主内容是独立的。如果被删除，则不应对文档流产生影响。'} </p>
                                <figure>
                                    <img src="/assets/images/rock.jpg" alt="" />
                                    <figcaption>Fig1. - A view of the pulpit rock in Norway.</figcaption>
                                </figure>
                            </div>
                        </div>
                        <div>
                            <h5>footer</h5>
                            <div>
                                <p>{'<footer> 标签定义文档或者文档的一部分区域的页脚。<footer> 元素应该包含它所包含的元素的信息。在典型情况下，该元素会包含文档创作者的姓名、文档的版权信息、使用条款的链接、联系信息等等。'}</p>
                            </div>
                        </div>
                        <div>
                            <h5>mark</h5>
                            <p>Do not forget to buy <mark>milk</mark> today.</p>
                        </div>
                        <div>
                            <h5>meter</h5>
                            <div>
                                <meter value="2" min="0" max="10">2 out of 10</meter>
                                <meter value="0.6">60%</meter>
                            </div>
                        </div>
                        <div>
                            <h5>nav</h5>
                            <nav>
                                <li></li>
                                <li></li>
                                <li></li>
                            </nav>
                        </div>
                        <div>
                            <h5>progress</h5>
                            <progress value="22" max="100" id="progress"></progress>
                        </div>
                        <div>
                            <h5>ruby 注释：显示注音</h5>
                            <ruby>
                                汉 <rp>(</rp><rt>Han</rt><rp>)</rp>
                                字 <rp>(</rp><rt>zi</rt><rp>)</rp>
                            </ruby>
                        </div>
                        <div>
                            <h5>section</h5>
                            <section>
                                <h3>WWF</h3>
                                <p>The World Wide Fund for Nature (WWF) is....</p>
                            </section>
                        </div>
                        <div style={{ 'width': '15rem' }}>
                            <h5>wbr 规定在何处适合添加换行符</h5>
                            <p>学习 AJAX ,您必须熟悉 <wbr />Http<wbr />Request对象。</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h3>canvas</h3>
                    <div className="canvas-example">
                        <canvas id="first-canvas" width="400" height="300" style={{ 'border': '1px solid green' }}>
                        </canvas>
                        <div>
                            <button onClick={this.handleDrawSomething}>Rect</button>
                            <button onClick={this.handleDrawSomething}>Line</button>
                            <button onClick={this.handleDrawSomething}>circle</button>
                            <button onClick={this.handleDrawSomething}>text</button>
                            <button onClick={this.handleDrawSomething}>linear-gradient</button>
                            <button onClick={this.handleDrawSomething}>radial-gradient</button>
                            <button onClick={this.handleDrawSomething}>image</button>
                        </div>
                    </div>
                </section>
                <section>
                    <h3>svg</h3>
                    <div>
                        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <polygon points="100,10 40,180 190,60 10,60 160,180"
                                style={{
                                    'fill': 'lime',
                                    'stroke': 'purple',
                                    'strokeWidth': '5',
                                    'fillRule': 'evenodd'
                                }} />
                        </svg>
                    </div>
                </section>
                <section>
                    <h3>MathML(chrome 不支持)</h3>
                    <div>
                        <math xmlns="http://www.w3.org/1998/Math/MathML">

                            <mrow>
                                <msup><mi>a</mi><mn>2</mn></msup>
                                <mo>+</mo>

                                <msup><mi>b</mi><mn>2</mn></msup>
                                <mo>=</mo>

                                <msup><mi>c</mi><mn>2</mn></msup>
                            </mrow>

                        </math>
                    </div>
                    <div>
                        <math xmlns="http://www.w3.org/1998/Math/MathML">

                            <mrow>
                                <mi>A</mi>
                                <mo>=</mo>

                                <mfenced open="[" close="]">

                                    <mtable>
                                        <mtr>
                                            <mtd><mi>x</mi></mtd>
                                            <mtd><mi>y</mi></mtd>
                                        </mtr>

                                        <mtr>
                                            <mtd><mi>z</mi></mtd>
                                            <mtd><mi>w</mi></mtd>
                                        </mtr>
                                    </mtable>

                                </mfenced>
                            </mrow>
                        </math>
                    </div>
                </section>
                <section>
                    <h3>可拖放数据</h3>
                    <div>
                        <div id="div1" onDrop={this.handleDrop} onDragOver={this.handleDragOver}>拖放图片到这里
                        </div>
                        <br />
                        <img src="/assets/images/rock.jpg" alt="rock.jpg" id="drag1" draggle="true" onDragStart={this.handleDragStart} width="300" height="200" />
                    </div>
                </section>
                <section>
                    <h3>地理位置</h3>
                    <div>
                        <button onClick={this.getPosition}>定位</button>
                        <dir>
                            纬度: {this.state.position.latitude}
                            经度: {this.state.position.longitude}
                        </dir>
                    </div>
                    <div>
                        <h6>调用百度地图</h6>
                        <div id="mapholder">

                        </div>
                    </div>
                </section>
                <section>
                    <h3>视频</h3>
                    <div>
                        <video width="320" height="240" controls>
                            <source src="/assets/videos/sex_is_zero.mp4" type="video/mp4" />
                        </video>
                    </div>
                </section>
                <section>
                    <h3>音频</h3>
                    <div>
                        <audio id="fade" src="/assets/audios/Fade.mp3" controls></audio>
                    </div>
                </section>
                <section>
                    normal <strong>strong</strong> normal <em>emphasis</em> normal
                </section>
                <section>
                    <h3>Input</h3>
                    <form action="" autoComplete="on" noValidate>
                        <div>
                            color: <input type="color" />
                        </div>
                        <div>date: <input type="date" /></div>
                        <div>dateTime: <input type="datetime" /></div>
                        <div>dateTimeLocal: <input type="datetime-local" /></div>
                        <div>
                            email: <input type="email" />
                        </div>
                        <div>
                            month: <input type="month" />
                        </div>
                        <div>number range:<input type="number" min="1" max="10" required autoFocus /></div>
                        <div>range: <input type="range" min="1" max="10" /></div>
                        <div>search: <input name="search" type="search" /></div>
                        <div>telephone: <input type="tel" /></div>
                        <div>time: <input type="time" /></div>
                        <div>url: <input type="url" /></div>
                        <div>week: <input type="week" /></div>
                        <div>password: <input name="password" type="password"/></div>
                        <button type="submit">submit</button>
                    </form>
                </section>
                <section>
                    <h3>新的表单元素</h3>
                    <div>
                        <h6>{'<datalist> 元素'}</h6>
                        <form method="get">
                            <input list="browsers" name="browser" />
                            <datalist id="browsers">
                                <option value="Internet Explorer" />
                                <option value="Firefox" />
                                <option value="Chrome" />
                                <option value="Opera" />
                                <option value="Safari" />
                            </datalist>
                            <input type="submit" />
                        </form>
                    </div>
                </section>
                <footer>
                    <p>Posted by: li</p>
                    <p><time pubdate="2020-03-02" dateTime="2020-03-01">到期时间</time></p>
                </footer>

            </div>
        )
    }
}

export default Html5;