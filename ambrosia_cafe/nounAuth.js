var OAuth = require('oauth')
// `npm install oauth` to satisfy
// website: https://github.com/ciaranj/node-oauth

var KEY = "<eaf86636b44049d7b4ed48b694f19a6f>"
var SECRET = "<734d6af4a0104a43a2127917e73b82e7>"

var oauth = new OAuth.OAuth(
	'http://api.thenounproject.com',
	'http://api.thenounproject.com',
	KEY,
	SECRET,
	'1.0A',
	null,
	'HMAC-SHA1',
	undefined,
	{"Accept": "application/json"}
)
oauth.get(
	'http://api.thenounproject.com/icon/6324',
	KEY,
	SECRET,
	function (e, data, res){
		if (e) console.error(e)
		console.log(require('util').inspect(data))
	}
)


class ImageSlider extends React.Component {

	constructor(){
        super();
        this._handleClick = this._handleClick.bind(this);
        this.state = {firstImg : ''};
    }
    
    _handleClick(e){
        this.setState({firstImg : e.target.src});
    }

render() {
    var mainImg = this.state.firstImg ? this.state.firstImg : this.props.images[0];

  return(
		<div>
          <div>{this.props.images.map((image, key) => {
              return(
              	<img key={key} className ={mainImg==image? "selectedThumbnail" :"allThumbnail"}  									src={image} onClick={this._handleClick}/>
                    )})}
          </div>

          <div>
            <img className ="focusMainImg" src={mainImg}/>
          </div>
    </div>
	);
};
}

class ImageSlideShow extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {};
        this.state.images= [];
				this.state.images = ['http://imagemania.in/wp-content/gallery/car-images/bmw-cars-picture.jpg','http://desktopbackgrounds4u.com/wp-content/gallery/car-wallpaper-download/car-wallpapers-5.jpg','http://drop.ndtv.com/albums/AUTO/top-10-concept-cars-at-the-2015-geneva-motor-show/bentley640_640x480.jpg'];
        }
    
	render(){
     
		return (
              <div>
                	<ImageSlider images = {this.state.images} />
               </div>
    )
	}
}

React.render(<ImageSlideShow />, document.getElementById('container'));

