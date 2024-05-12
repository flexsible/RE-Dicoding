import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ThreadReplyInput({ replyThread }) {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  function replyThreadHandler() {
    if (text.trim()) {
      replyThread(text);
      setText('');
      navigate('/');
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 300) {
      setText(target.value);
    }
  }

  return (
    <div className="thread-reply-input">
      <textarea type="text" placeholder="Create your thread" value={text} onChange={handleTextChange} />
      <p className="thread-reply-input__char-left">
        <strong>{text.length}</strong>
        /300
      </p>
      <button type="submit" onClick={replyThreadHandler}>Reply</button>
    </div>
  );
}

ThreadReplyInput.propTypes = {
  replyThread: PropTypes.func.isRequired,
};

export default ThreadReplyInput;
