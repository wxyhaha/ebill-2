import React from 'react';
import {useParams} from 'react-router-dom';
import useTags from '../useTags';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import Button from '../components/Button';
import styled from 'styled-components';
import Input from '../components/Input';
import Center from '../components/Center';
import Space from '../components/Space';

type Prams = {
  id: string
}
const Topbar=styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 18px;
  padding: 14px;
  background: white;
`;
const InputWrapper=styled.div`
  background: white;
  padding:0 16px;
  margin-top: 8px;
`;
const ButtonWrapper = styled.div`
  > Button {
    .icon {
      fill: red;
    }
  }
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
      <InputWrapper>
        <Input label='标签名' type='text' placeholder='标签名' value={tag.name}/>
      </InputWrapper>
      <Center>
      <ButtonWrapper>
        <Space/>
        <Button>
          <Icon name='remove'/>
        </Button>
      </ButtonWrapper>
      </Center>
    </Layout>
  );
};

export default Tag;