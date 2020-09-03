import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'; 
import ApprovalCard from './ApprovalCard'; 
import faker from 'faker'; 

const App = () => {
    return (
        <div className="ui container comments">

           <ApprovalCard>
               <div>
               <h4>Warning!</h4>
               Are you sure you want to do this?
               </div> 
           </ApprovalCard>

           <ApprovalCard>
           <CommentDetail 
           author="Sam"
           timeAgo="Today at 4:00 PM" 
           comment="Hi There" 
           image={faker.image.avatar()}
           /> 
           </ApprovalCard>

           <ApprovalCard> 
           <CommentDetail 
           author="Alex" 
           timeAgo="Today at 1:00 PM" 
           comment="Nice post" 
           image={faker.image.avatar()}
           /> 
           </ApprovalCard> 
           
           <ApprovalCard>
           <CommentDetail 
           author="Jane" 
           timeAgo="Today at 12:00 PM" 
           comment="What are you up to?" 
           image={faker.image.avatar()}
           /> 
           </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

