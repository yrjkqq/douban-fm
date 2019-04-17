import React from 'react';

class ArtistList extends React.Component {

    componentDidMount() {
        fetch('api/artists', { method: 'get', credentials: 'include' })
            .then((response) => {
                response.json().then(resp => console.log(resp));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                ArtistList...
            </div>
        )
    }
}

export default function FM(props) {
    return (
        <div>
            <h3>DEMO</h3>
            <ul>
                <li>2019.04.13 部署路由</li>
                <li>2019.04.17 学完一遍 css3 </li>
                <li>2019.04.17 启动第一版</li>
            </ul>
            <h6>Artists</h6>
            <ArtistList />
        </div>
    )
}