import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-contnet: center;

    &>*{
        :not(:last-child){
            margin-bottom: 16px;
        }
    }
`;
/*
    &>* : 해당 컴포넌트의 직속자식 요소들을 가르킴
    :not(:last-child) : 마지막 자식요소를 제외한
*/

function PostList(props){
    const {posts, onClickItem} = props;

    return (
        <Wrapper>
            {posts.map((post, index) => {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;