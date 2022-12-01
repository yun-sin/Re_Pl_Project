import React, { memo } from 'react';
import styled from 'styled-components';

const Item = styled.li`
    display: flex;
    flex-flow: row nowrap;
    padding: 10px;
    border-bottom: 1px solid lightgray;

    &:hover {
        cursor: pointer;
        background-color: #ccc;
    }

    &:last-child {
        border-bottom: none;
    }

    .recommend-Item__1 {
        flex: 0 0 auto;

        img {
            width: 150px;
            height: 100px;
            repeat: no-repeat;
            object-fit: cover;
        }
    }

    .recommend-Item__2 {
        flex: 2 1 auto;
        padding: 10px;

        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;

        h4 {
            font-size: 20px;
            font-weight: 600;
            color: skyblue;
        }
        p {
            color: gray;
            font-weight: 500;
        }
    }

    .recommend-Item__3 {
        flex: 2 1 auto;

        display: flex;
        flex-flow: row nowrap;
        padding: 10px 5px;
        justify-content: flex-end;
        align-items: flex-end;

        p {
            margin: 0 10px;

            span {
                font-size: 16px;
                font-weight: 600;
            }
        }
    }
`

const RecommendListItem = memo(props => {
    return (
        <Item>
            <div className='recommend-Item__1'>
                <img src={props.img} alt={props.alt} />
            </div>
            <div className='recommend-Item__2'>
                <h4>{props.title}</h4>
                <p>{props.address}</p>
            </div>
            <div className='recommend-Item__3'>
                <p>후기 <span>{props.commend}</span></p>
                <p>O <span>{props.reaction}</span></p>
            </div>
        </Item>
    );
});

export default RecommendListItem;