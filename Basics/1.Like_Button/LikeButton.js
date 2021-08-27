class LikeButton extends React.Component{
    render(){
        return React.createElement('button', 'null', 'Like');
    }
}

const app = document.getElementById('app');
ReactDOM.render(
    React.createElement(LikeButton),
    app
);