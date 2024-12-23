import React from 'react';

function StarVote({ voteNumber }: any) {
  return (
    <div className='flex '>
      {[...Array(voteNumber).keys()].map((item) => {
        return <img key={item} src='/images/star-on.png' />;
      })}
      {[...Array(5 - voteNumber).keys()].map((item) => {
        return <img key={item} src='/images/star-off.png' />;
      })}
    </div>
  );
}

export default StarVote;
