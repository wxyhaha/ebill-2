import Layout from '../components/Layout';
import React from 'react';
import useTags from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px;
  background: white;

  > li {
    border-bottom: 1px solid #d5d5d5;
    line-height: 20px;
    margin-left: 16px;
    > a{
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
    }
  }
`;

const Button = styled.button`
  border: none;
  background: #f5f5f5;
  padding: 8px 0;

  .icon {
    height: 36px;
    width: 36px;
    fill: #666666;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Space = styled.div`
  height: 32px;
`;

function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <Link to={'/tags/' + tag}>
              <span className='oneLine'>{tag}</span>
              <Icon name='right'/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Button>
          <Icon name='add'/>
        </Button>
      </Center>
    </Layout>
  );
}

export default Tags;