import React from 'react';
import ReactDOM from 'react-dom';        
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
  return ( 
    <div className = "ui container comments" >
      <ApprovalCard>
        <h4>Warning!</h4>
        <div> Are you sure you want to do this?</div>
      </ApprovalCard>
    <ApprovalCard>
    <CommentDetail 
    author = "Sam" 
    timeAgo = "Today at 6:00 PM" 
    thought="Nice"
    avatar={faker.image.avatar()} />
    </ApprovalCard>

    <ApprovalCard>
    <CommentDetail 
    author = "Alex" 
    timeAgo = "Today at 2:00 AM" 
    thought="Great"
    avatar={faker.image.avatar()}/>
    </ApprovalCard>

    <ApprovalCard>
    <CommentDetail 
    author = "Jane" 
    timeAgo = "Yesterday at 12:00 PM" 
    thought="Wonderful"
    avatar={faker.image.avatar()}/>
    </ApprovalCard>

    <ApprovalCard>
    <CommentDetail 
    author = "Nancy" 
    timeAgo = "Today at 9:00 AM" 
    thought="Well Done"
    avatar={faker.image.avatar()}/>
    </ApprovalCard>

    </div>
  );
};
ReactDOM.render( < App /> , document.querySelector("#root"));   