import React from 'react';
import './Carousel.css';


const Carousel = props => (
    // <div className="card">
    //     <img src="/august.jpg" alt="Avatar" style={{ width: '100%' }} />
    // </div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item">
                <img class="d-block w-100" src="/facial.jpg" alt="Third slide" />
            </div>
            <div class="carousel-item active">
                <img class="d-block w-100" src="/august.jpg" alt="First slide" />
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="/august2.png" alt="Second slide" />
            </div>
        </div>
    </div>
);

export default Carousel;
// import React from 'react';
// import ItemsCarousel from 'react-items-carousel';
// import range from 'lodash/range';


// var createChildren = n => range(n).map(i => <div key={i} style={{ height: 600, background: '#333' }}><img src="/august.jpg"></img></div>);
// export default class Test extends React.Component {

//     componentWillMount() {
//         this.setState({
//             children: [],
//             activeItemIndex: 0,
//         });

//         setTimeout(() => {
//             this.setState({
//                 children: createChildren(5),
//             })
//         }, 100);
//     }



//     changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

//     render() {
//         const {
//             activeItemIndex,
//             children,
//         } = this.state;

//         return (
//             <ItemsCarousel
//                 // Placeholder configurations
//                 enablePlaceholder
//                 numberOfPlaceholderItems={5}
//                 minimumPlaceholderTime={1000}
//                 placeholderItem={<div style={{ height: 600, background: '#900' }}>Placeholder</div>}

//                 // Carousel configurations
//                 numberOfCards={3}
//                 gutter={12}
//                 showSlither={true}
//                 firstAndLastGutter={true}
//                 freeScrolling={false}

//                 // Active item configurations
//                 requestToChangeActive={this.changeActiveItem}
//                 activeItemIndex={activeItemIndex}
//                 activePosition={'center'}

//                 chevronWidth={24}
//                 rightChevron={'>'}
//                 leftChevron={'<'}
//                 outsideChevron={false}
//             >
//                 {children}
//             </ItemsCarousel>
//         );
//     }
// } 