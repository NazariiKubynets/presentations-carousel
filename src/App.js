import './App.css';
import MyCarousel from './Components/Carousel/MyCarousel';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import ListComments from './Components/ListComments/ListComments';
import { getComments } from './Components/actions/comments';
import MyModal from './Components/Ui/MyModal/MyModal';
import MyForm from './Components/Form/MyForm';


function App() {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const visible = useSelector(state => state.comments.visible);
  const comments = useSelector(state => state.comments.comments);
  const visibleModal = useSelector(state => state.posts.visibleModal);
  const [postId, setPostId] = useState('1');

  useEffect(() => {
    dispatch(getComments(postId));
  }, [postId])

  return (
    <div className="App">
      <MyModal visible={visibleModal} dispatch={dispatch}>
        <MyForm dispatch={dispatch} />
      </MyModal>
      {!visibleModal &&
        <MyCarousel
          posts={posts}
          postId={postId}
          setPostId={setPostId}
          dispatch={dispatch}
          visible={visibleModal}
        />}
      {
        visible &&
        <ListComments visibleModal={visibleModal} comments={comments} />
      }
    </div>
  );
}

export default App;
 //hello