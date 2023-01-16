const SET_POSTS = 'SET_POSTS';
const ADD_POST = 'ADD_POST';

const defaultState = {
   posts: [{
      "id": 1,
      "name": {
         "firstName": "Elon",
         "lastName": "Musk"
      },
      "profession": "Генеральним директором та головним інженером компанії SpaceX та Tesla",
      "site": "tesla.com, spacex.com",
      "img": {
         "face": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/274px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
         "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1200px-Tesla_Motors.svg.png"
      },
      "description": "Aмериканський підприємець, інженер та мільярдер. Він є засновником, генеральним директором та головним інженером компанії SpaceX; інвестором, генеральним директором та архітектором продукту компанії Tesla; засновником The Boring Company;співзасновником Neuralink та OpenAI; власником «Твіттер»."
   },
   {
      "id": 2,
      "name": {
         "firstName": "Eon",
         "lastName": "Musk"
      },
      "profession": "Генеральним директором та головним інженером компанії SpaceX та Tesla",
      "site": "tesla.com, spacex.com",
      "img": {
         "face": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/274px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
         "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1200px-Tesla_Motors.svg.png"
      },
      "description": "Aмериканський підприємець, інженер та мільярдер. Він є засновником, генеральним директором та головним інженером компанії SpaceX; інвестором, генеральним директором та архітектором продукту компанії Tesla; засновником The Boring Company;співзасновником Neuralink та OpenAI; власником «Твіттер»."
   },
   {
      "id": 3,
      "name": {
         "firstName": "on",
         "lastName": "Musk"
      },
      "profession": "Генеральним директором та головним інженером компанії SpaceX та Tesla",
      "site": "tesla.com, spacex.com",
      "img": {
         "face": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/274px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
         "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1200px-Tesla_Motors.svg.png"
      },
      "description": "Aмериканський підприємець, інженер та мільярдер. Він є засновником, генеральним директором та головним інженером компанії SpaceX; інвестором, генеральним директором та архітектором продукту компанії Tesla; засновником The Boring Company;співзасновником Neuralink та OpenAI; власником «Твіттер»."
   }
   ],
   // isFetching: true
}

export const postsReducer = (state = defaultState, action) => {
   switch (action.type) {
      case SET_POSTS:
         return { ...state, posts: action.payload }
      case ADD_POST:
         return { ...state, posts: [...state.posts, action.payload] }
      default:
         return state;
   }
}

export const setPostsAction = (payload) => ({ type: SET_POSTS, payload });
export const addPostsAction = (payload) => ({ type: ADD_POST, payload })