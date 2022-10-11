'use strict';

class Message {
  constructor (content, authorId, timestamp) {
    this.content = content;
    this.authorId = authorId;
    this.timestamp = timestamp;
  }
}

function genRandomMs () {
  // Returns a random number between 0 and 10 seconds, in milliseconds
  return Math.floor(Math.random() * 1e4);
}

function prettifyDate (timestamp) {
  // Returns the date in hh:mm am/pm format
  const options = { hour: '2-digit', minute: '2-digit' };
  return new Date(timestamp).toLocaleTimeString('en-US', options);
}

function showMessage (msg) {
  const { content, authorId, timestamp } = msg;
  const $HtmlMsg = $(`
    <div class="message ${authorId ? 'right' : 'left'}">
      <div class="message-text">${content}</div>
      <div class="message-time">${prettifyDate(Number(timestamp))}</div>
    </div>
  `);
  $('.messages-container').append($HtmlMsg);
}

function simulateIncomingMessages () {
  setTimeout(() => {
    $.get('https://cw-quotes.herokuapp.com/api/quotes/random', async data => {
      const msg = new Message(data.result.text, false, Date.now());

      await sendInfo(msg);
      showMessage(msg);
      scrollToBottom ();
    });
  }, genRandomMs());
}

function scrollToBottom () {
  const $messages = $('.messages-container');
  $messages.animate({
    scrollTop: $messages[0].scrollHeight
  });
}

async function getOldMessages () {
  try {
    const response = await fetch('http://localhost:3000/message', {
      method: 'GET',
    });

    const messages = await response.json();
    if (messages.length) {
      messages.forEach(el => {
        showMessage(el);
        scrollToBottom ();
      });
    }
  } catch (err) {
    console.log(err.message);
  }
}

async function sendInfo (message) {
  try {
    await fetch('http://localhost:3000/message', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  } catch (err) {
    console.log(err.message);
  }
}

$(() => {
  getOldMessages();
  scrollToBottom();

  $('#msg-form').on('submit', async (e) => {
    e.preventDefault();
    const content = $('#text').val();
    if (content) {
      $('#text').val('');
      const msg = new Message(content, true, Date.now());

      await sendInfo(msg);
      showMessage(msg);
      scrollToBottom ();
      simulateIncomingMessages();
    }
  });
});
