import React from 'react';

function StarVote({ voteNumber }: any) {
  return (
    <div className='flex gap-1'>
      {[...Array(voteNumber).keys()].map((item) => {
        return <img key={item} src='/images/vote.png' />;
      })}
    </div>
  );
}

export default StarVote;
