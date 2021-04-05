import React from 'react';
import {useParams} from 'react-router-dom';
import useTags from '../useTags';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import Button from '../components/Button';
import styled from 'styled-components';

type Prams = {
  id: string
}
const Div = styled.div`
  > Button {
    .icon {
      fill: red;
    }
  }
`;
const Topbar=styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 18px;
  padding: 14px;
  background: white;
`;
const Tag: React.FC = () => {
  const {findTag} = useTags();
  let {id} = useParams<Prams>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topbar>
        <Icon name='left'/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder='标签名'/>
        </label>
      </div>
      <Div>
        <Button>
          <Icon name='remove'/>
        </Button>
      </Div>
    </Layout>
  );
};

export default Tag;