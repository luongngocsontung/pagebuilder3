import { Layout } from 'antd';
import 'antd/dist/antd.css';
import DragOverDiv from './components/DragOverDiv/DragOverDiv';
import RightSideBar from './components/Edit/RightSideBar/RighSideBar';
import HoverDiv from './components/HoverDiv/HoverDiv';
import SelectedDiv from './components/SelectedDiv/SelectedDiv';
import SideBar from './components/SideBar/SideBar';
import RenderUI from './render/RenderUI';

function App() {
  return (
    <Layout className='layout'>
      <SideBar />
      <RenderUI id="0" />
      <RightSideBar />
      <HoverDiv />
      <SelectedDiv />
      <DragOverDiv />
    </Layout>
  );
}

export default App;