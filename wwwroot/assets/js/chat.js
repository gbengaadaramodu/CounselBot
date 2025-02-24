﻿function mychat() {
    let chatReply = document.querySelector('#tynBotReply');
    let chatInput = document.querySelector('#tynBotInput0');
    let getInput = chatInput.innerText;
    if (getInput !== '') {
        let markupTemplate = `
          <div class="tyn-qa-item">
              <div class="tyn-qa-avatar">
                  <div class="tyn-media tyn-size-md">
                      <img src="images/avatar/1.jpg" alt="">
                  </div>
              </div>
              <div class="tyn-qa-message tyn-text-block"> ${getInput} </div>
          </div>`;

        chatReply.insertAdjacentHTML("beforeend", markupTemplate)

        chatInput.innerHTML = "";
    }
    let chatBody = document.querySelector('#tynBotBody');
    //   let simpleBody = SimpleBar.instances.get(document.querySelector('#tynBotBody'));
    // let height = chatBody.querySelector('.simplebar-content > *').scrollHeight;
    chatBody.scrollTop = chatBody.scrollHeight;
    //  chatBody.scrollTop = simpleBody.scrollHeight;

    return getInput;

}

function aichat(message) {
    let chatReply = document.querySelector('#tynBotReply');
    if (message !== '') {
        let markupTemplate = `
         <div class="tyn-qa-item">
                    <div class="tyn-qa-avatar">
                        <div class="tyn-qa-avatar-wrap">
                            <div class="tyn-media tyn-size-md">
                                <img src="images/avatar/bot-1.jpg" alt="">
                            </div>
                                                     <ul class="d-flex flex-column mt-2">
                            <li>
                            <button class="btn btn-icon btn-md btn-pill btn-transparent">
                            <!-- hand-thumbs-up-fill -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                            <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                            </svg>
                            </button>
                            </li>
                            <li>
                            <button class="btn btn-icon btn-md btn-pill btn-transparent">
                            <!-- hand-thumbs-down -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
                            <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1" />
                            </svg>
                            </button>
                            </li>
                            </ul> 
                        </div>
                    </div>
                    <div class="tyn-qa-message tyn-text-block">

                        ${message}

                    </div><!-- .tyn-qa-message -->
                </div>`;

        chatReply.insertAdjacentHTML("beforeend", markupTemplate)
    }

    let chatBody = document.querySelector('#tynBotBody');
    chatBody.scrollTop = chatBody.scrollHeight;

    return message;

}
function requestchat(message) {
    let chatReply = document.querySelector('#tynBotReply');

    if (message !== '') {

        let markupTemplate = `
          <div class="tyn-qa-item">
              <div class="tyn-qa-avatar">
                  <div class="tyn-media tyn-size-md">
                      <img src="images/avatar/1.jpg" alt="">
                  </div>
              </div>
              <div class="tyn-qa-message tyn-text-block"> ${message} </div>
          </div>`;

        chatReply.insertAdjacentHTML("beforeend", markupTemplate)
    }
    let chatBody = document.querySelector('#tynBotBody');
    chatBody.scrollTop = chatBody.scrollHeight;

}

window.addEventListener('DOMContentLoaded', mychat);