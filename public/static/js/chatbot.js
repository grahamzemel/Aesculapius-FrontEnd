function includecss(file) {
  const link = document.createElement('link');
  link.href = file;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.defer = true;
  document.getElementsByTagName('head').item(0).appendChild(link);
}
/* module for importing other js files */
function include(file) {
  const script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;
  document.getElementsByTagName('head').item(0).appendChild(script);
}
includecss('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css');
includecss('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
includecss('./static/css/style.css');

include('https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
include('./static/js/lib/materialize.min.js');
include('./static/js/lib/uuid.min.js');
include('./static/js/lib/chart.min.js');
include('./static/js/lib/showdown.min.js');
/* import components */
include('./static/js/components/index.js');

const jsFileUrl = document.currentScript.src;
const url = new URL(jsFileUrl);

// alert(url.hostname + ":"+ url.port + ":"+url.pathname);


var chatbothtml = `
      <!--chatbot widget -->
      <div id="modal1" class="modal">
        <canvas id="modal-chart"></canvas>
      </div>
      <div class="widget">
        <div class="chat_header">
          <!--Add the name of the bot here -->
          <span class="chat_header_title">Aesculapius Bot</span>
          <span class="dropdown-trigger" href="#" data-target="dropdown1">
            <i class="material-icons">X</i>
          </span>
          <!-- Dropdown menu-->
          <ul id="dropdown1" class="dropdown-content">
            <li><a href="#" id="clear">Clear</a></li>
            <li><a href="#" id="restart">Restart</a></li>
            <li><a href="#" id="close">Close</a></li>
          </ul>
        </div>
        <div id="talkButton">
          <i class="fa fa-microphone" aria-hidden="true""></i>
        </div>
        <!--Chatbot contents goes here -->
        <div class="chats" id="chats">
          <div class="clearfix"></div>
        </div>
        <!--keypad for user to type the message -->
        <div class="keypad">
          <textarea
            id="userInput"
            placeholder="Type a message..."
            class="usrInput"
          ></textarea>

          <div id="sendButton">
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      <!--bot profile-->
      <div class="profile_div" id="profile_div">
        <img class="imgProfile" src="static/img/sara_avatar.png" />
      </div>

      <!-- Bot pop-up intro -->
      <div class="tap-target" data-target="profile_div">
        <div class="tap-target-content">
          <h5 class="white-text">Hey there 👋</h5>
          <p class="white-text">
            I can help you get started and answer your questions.
          </p>
        </div>
      </div>
`;

document.getElementById('chatbot').innerHTML = chatbothtml;

window.addEventListener('load', () => {
  // initialization
  $(document).ready(() => {
    // drop down menu for close, restart conversation & clear the chats.
    $(".dropdown-trigger").dropdown();

    // initiate the modal for displaying the charts,
    // if you dont have charts, then you comment the below line
    //  $(".modal").modal();

    // enable this if u have configured the bot to start the conversation.
    // showBotTyping();
    // $("#userInput").prop('disabled', true);

    // if you want the bot to start the conversation
    // customActionTrigger();
  });
  // Toggle the chatbot screen
  $("#profile_div").click(() => {
    $(".profile_div").toggle();
    $(".widget").toggle();
  });

  // clear function to clear the chat contents of the widget.
  $("#clear").click(() => {
    $(".chats").fadeOut("normal", () => {
      $(".chats").html("");
      $(".chats").fadeIn();
    });
  });

  // close function to close the widget.
  $("#close").click(() => {
    $(".profile_div").toggle();
    $(".widget").toggle();
    scrollToBottomOfResults();
  });
});
