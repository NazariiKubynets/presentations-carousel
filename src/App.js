import './App.css';
import MyCarousel from './Components/Carousel/MyCarousel';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { getPosts } from './Components/actions/posts';
import ListComments from './Components/ListComments/ListComments';
import { getComments } from './Components/actions/comments';
import MyModal from './Components/Ui/MyModal/MyModal';
import MyForm from './Components/Form/MyForm';


function App() {

  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const visible = useSelector(state => state.comments.visible);
  const comments = useSelector(state => state.comments.comments);
  const [postId, setPostId] = useState('1');
  const [visibleModal, setVisibleModal] = useState(false);

  useEffect(() => {
    dispatch(getComments(postId));
  }, [postId])

  useEffect(() => {
    dispatch(getPosts());
  }, [])

  const test=()=>{
    console.log(posts);
  }

  return (
    <div className="App">
      <button onClick={test}>test</button>
      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <MyForm setVisible={setVisibleModal} dispatch={dispatch}/>
      </MyModal>
      {!visibleModal &&
        <MyCarousel
          posts={posts}
          postId={postId}
          setPostId={setPostId}
          setVisible={setVisibleModal}
        />}
      {
        visible && <ListComments comments={comments} />
      }
    </div>
  );
}

export default App;
