const SET_POSTS = 'SET_POSTS';
const ADD_POST = 'ADD_POST';
const SET_VISIBLE_MODAL = 'SET_VISIBLE_MODAL';

const defaultState = {
   posts: [{
      "id": 1,
      "name": {
         "firstName": "Elon",
         "lastName": "Musk"
      },
      "profession": "CEO and Chief Engineer of SpaceX and Tesla",
      "site": "tesla.com, spacex.com",
      "img": {
         "face": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/274px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
         "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1200px-Tesla_Motors.svg.png"
      },
      "description": "American entrepreneur, engineer and billionaire. He is the founder, CEO and chief engineer of SpaceX; investor, CEO and product architect of Tesla; founder of The Boring Company; co-founder of Neuralink and OpenAI; owner of \"Twitter\"."
   },
   {
      "id": 2,
      "name": {
         "firstName": "Mark",
         "lastName": "Zuckerberg"
      },
      "profession": "Co-founder and CEO of Meta and Breakthrough Starshotof",
      "site": "meta.com, breakthroughinitiatives.org",
      "img": {
         "face": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/800px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
         "logo": "https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png"
      },
      "description": "American media magnate, Internet entrepreneur and philanthropist. He is known as the co-founder of the company Meta (formerly Facebook, Inc.) and is its chairman, chief executive officer and controlling shareholder. He is also a co-founder of the Breakthrough Starshot solar sail spacecraft development project and one of the members of his board of directors."
   },
   {
      "id": 3,
      "name": {
         "firstName": "Steve",
         "lastName": "Jobs"
      },
      "profession": "Entrepreneur, inventor, industrial designer, co-founder and CEO of Apple, NeXT and Pixar companies",
      "site": "apple.com, pixar.com",
      "img": {
         "face": "https://www.iphones.ru/wp-content/uploads/2021/06/20090909-wwdc-story-steve-jobs-02.jpg",
         "logo": "https://www.svgrepo.com/show/162625/apple-logo.svg"
      },
      "description": "American entrepreneur, inventor and industrial designer, widely recognized as a pioneer of the era of information technologies[5][6]. One of the founders, chairman of the board of directors and CEO of Apple Corporation. One of the founders and CEO of the Pixar film studio."
   }
   ],
   visibleModal: false
}

export const postsReducer = (state = defaultState, action) => {
   switch (action.type) {
      case SET_POSTS:
         return { ...state, posts: action.payload }
      case ADD_POST:
         return { ...state, posts: [...state.posts, action.payload] }
      case SET_VISIBLE_MODAL:
         return { ...state, visibleModal: action.payload }
      default:
         return state;
   }
}

export const setPostsAction = (payload) => ({ type: SET_POSTS, payload });
export const addPostsAction = (payload) => ({ type: ADD_POST, payload });
export const setVisibleModelAction = (payload) => ({ type: SET_VISIBLE_MODAL, payload });