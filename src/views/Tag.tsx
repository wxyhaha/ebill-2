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
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 18px;
  padding: 14px;
  background: white;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
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
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Prams>();
  const tag = findTag(parseInt(idString));
  return (
    <Layout>
      <Topbar>
        <Icon name='left'/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      {tag ? <div>
        <InputWrapper>
          <Input label='标签名' type='text' placeholder='标签名'
                 value={tag.name}
                 onChange={(e) => {
                   updateTag(tag.id, {name: e.target.value});
                 }}
          />
        </InputWrapper>
        <Center>
          <ButtonWrapper>
            <Space/>
            <Button onClick={() => deleteTag(tag.id)}>
              <Icon name='remove'/>
            </Button>
          </ButtonWrapper>
        </Center>
      </div> : <Center>tag不存在</Center>}
    </Layout>
  );
};

export default Tag;