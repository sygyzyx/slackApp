const { App } = require('@slack/bolt');
require("dotenv").config();

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN_eachpersonApp,
    signingSecret: process.env.SLACK_SIGNING_SECRET_eachpersonApp,
    socketMode: true, 
    appToken: process.env.SLACK_APP_TOKEN_eachpersonApp,
    port: process.env.PORT || 3000
  
  });


//SHORTCUT
app.shortcut('form_call', async ({ shortcut, ack, client, logger }) => {

    try {
      // Acknowledge shortcut request
      await ack();
  
      // Call the views.open method using one of the built-in WebClients
      const result = await client.views.open({
        trigger_id: shortcut.trigger_id,
        view: {
            "type": "modal",
            callback_id: 'formSubmit',
            "title": {
                "type": "plain_text",
                "text": "My App",
                "emoji": true
            },
            "submit": {
                "type": "plain_text",
                "text": "Submit",
                "emoji": true
            },
            "close": {
                "type": "plain_text",
                "text": "Cancel",
                "emoji": true
            },
            "blocks": [
                {
                    "type": "header",
                    "text": {
                        "type": "plain_text",
                        "text": "Choose Who to Recognize",
                        "emoji": true
                    }
                },
                {
                    "type": "input",
                    "element": {
                        "type": "multi_users_select",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Select users",
                            "emoji": true
                        },
                        "action_id": "multi_users_select-action"
                    },
                    "label": {
                        "type": "plain_text",
                        "text": "Send To",
                        "emoji": true
                    }
                },
                {
                    "type": "input",
                    "element": {
                        "type": "multi_users_select",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Select users",
                            "emoji": true
                        },
                        "action_id": "multi_users_select-action"
                    },
                    "label": {
                        "type": "plain_text",
                        "text": "CC a Team Member",
                        "emoji": true
                    }
                },
                {
                    "type": "header",
                    "text": {
                        "type": "plain_text",
                        "text": "How Are You Recognizing",
                        "emoji": true
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Reason for Recognizing"
                    },
                    "accessory": {
                        "type": "static_select",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Select an item",
                            "emoji": true
                        },
                        "options": [
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "Great Job !!",
                                    "emoji": true
                                },
                                "value": "value-1"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "Outstanding performance !!",
                                    "emoji": true
                                },
                                "value": "value-2"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "Excellent Job !!",
                                    "emoji": true
                                },
                                "value": "value-3"
                            }
                        ],
                        "action_id": "static_select-action"
                    }
                },
                {
                    "type": "input",
                    "element": {
                        "type": "radio_buttons",
                        "options": [
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "Yes",
                                    "emoji": true
                                },
                                "value": "value-1"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "No",
                                    "emoji": true
                                },
                                "value": "value-2"
                            }
                        ],
                        "action_id": "radio_buttons-action"
                    },
                    "label": {
                        "type": "plain_text",
                        "text": "Add a Reward?",
                        "emoji": true
                    }
                },
                {
                    "type": "header",
                    "text": {
                        "type": "plain_text",
                        "text": "Make It Personal",
                        "emoji": true
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "input",
                    "element": {
                        "type": "plain_text_input",
                        "action_id": "plain_text_input-action"
                    },
                    "label": {
                        "type": "plain_text",
                        "text": "Add a Personal Message",
                        "emoji": true
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "image",
                    "image_url": "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHw%3D&w=1000&q=80",
                    "alt_text": "inspiration"
                },
                {
                    "type": "image",
                    "image_url": "https://cdn.create.vista.com/api/media/small/208061328/stock-photo-cup-black-coffee-laptop-black",
                    "alt_text": "inspiration"
                },
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Submit and Send your E-Card"
                    },
                    "accessory": {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "Send E-card",
                            "emoji": true
                        },
                        "value": "click_me_123",
                        "action_id": "ecardButton"
                    }
                }
            ]
        }
      });
  
      logger.info(result);
    }
    catch (error) {
      logger.error(error);
    }
  });

// Listens to incoming messages that contain "hello"
app.message('Hello', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say({
      blocks: [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `Hey there !! <@${message.user}>, How's your Day`
          },
          "accessory": {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Click Me"
            },
            "action_id": "button_click"
          }
        }
      ],
      text: `Hey there <@${message.user}>!`
    });
  });

//Function runs when the user mentions the App
app.event('app_mention', async ({ say }) => {
    await say({
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Click Me To Access the Form"
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Click Me",
                        "emoji": true
                    },
                    "value": "click_me_123",
                    "action_id": "formOpenButton"
                }
            }
        ]
    })
  });
  
// Update the FORM on submission
app.view('formSubmit', async ({ ack, body }) => {
    await ack({
      response_action: 'update',
      view:{
        "type": "modal",
        "title": {
            "type": "plain_text",
            "text": "My App",
            "emoji": true
        },
        "close": {
            "type": "plain_text",
            "text": "Cancel",
            "emoji": true
        },
        "blocks": [
            {
                type: 'section',
                text: {
                  type: 'plain_text',
                  text: 'Your Form Has Been Submitted'
                }
              },
              {
                type: 'image',
                image_url: 'https://cdn.dribbble.com/users/87229/screenshots/2190376/sendmail.gif',
                alt_text: 'Form Submitted !'
              }
        ]
    },
    });
  });

//Ecard Button Submission Function 
app.action('ecardButton', async ({ ack, body, client, logger }) => {
    await ack();
  
    try {
      const result = await client.views.update({
        view_id: body.view.id,
        hash: body.view.hash,
        view: {
            "type": "modal",
            "title": {
                "type": "plain_text",
                "text": "My App",
                "emoji": true
            },
            "close": {
                "type": "plain_text",
                "text": "Cancel",
                "emoji": true,
            },
            "blocks": [
                {
                    type: 'section',
                    text: {
                      type: 'plain_text',
                      text: 'Your E-Card Has Been Sent'
                    }
                  },
                  {
                    type: 'image',
                    image_url: 'https://media.giphy.com/media/SVZGEcYt7brkFUyU90/giphy.gif',
                    alt_text: 'Yay! The modal was updated'
                  }
            ]
        }
      });
      logger.info(result);
    }
    catch (error) {
      logger.error(error);
    }
  });

//FORM ACCESS THROUGH App HOME
app.event('app_home_opened', async ({ event, client, logger }) => {
    try {
      // Call views.publish with the built-in client
      const result = await client.views.publish({
        user_id: event.user,
        view: {
            "type": "home",
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*Please Fill Out This Form, <@" + event.user + "> :house: :scroll:*"
                    },
                    "accessory": {
                        "type": "image",
                        "image_url": "https://cdn.dribbble.com/users/614270/screenshots/6060454/form-drib.gif",
                        "alt_text": "cute cat"
                    }
                },
                {
                    "type": "actions",
                    "elements": [
                        {
                            "type": "button",
                            "text": {
                                "type": "plain_text",
                                "text": "Click Me",
                                "emoji": true
                            },
                            "value": "click_me_123",
                            "action_id": "formOpenButton"
                        }
                    ]
                }
            ]
        }
      });
  
      logger.info(result);
    }
    catch (error) {
      logger.error(error);
    }
  });

  //FORM MODAL OPENS THROUGH HOME (This contains the Main Form modal)
app.action('formOpenButton', async ({ ack, body, client, logger }) => {
    await ack();
  
    try {
      const result = await client.views.open({
        trigger_id: body.trigger_id,
        view: {
            "type": "modal",
            "callback_id": "formSubmit",
            "title": {
                "type": "plain_text",
                "text": "Each Person",
                "emoji": true
            },
            "submit": {
                "type": "plain_text",
                "text": "Submit",
                "emoji": true
            },
            "close": {
                "type": "plain_text",
                "text": "Cancel",
                "emoji": true
            },
            "blocks": [
                {
                    "type": "header",
                    "text": {
                        "type": "plain_text",
                        "text": "Choose Who to Recognize",
                        "emoji": true
                    }
                },
                {
                    "type": "input",
                    "element": {
                        "type": "multi_users_select",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Select users",
                            "emoji": true
                        },
                        "action_id": "multi_users_select-action"
                    },
                    "label": {
                        "type": "plain_text",
                        "text": "Send To",
                        "emoji": true
                    }
                },
                {
                    "type": "input",
                    "element": {
                        "type": "multi_users_select",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Select users",
                            "emoji": true
                        },
                        "action_id": "multi_users_select-action"
                    },
                    "label": {
                        "type": "plain_text",
                        "text": "CC a Team Member",
                        "emoji": true
                    }
                },
                {
                    "type": "header",
                    "text": {
                        "type": "plain_text",
                        "text": "How Are You Recognizing",
                        "emoji": true
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Reason for Recognizing"
                    },
                    "accessory": {
                        "type": "static_select",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Select an item",
                            "emoji": true
                        },
                        "options": [
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "Great Job !!",
                                    "emoji": true
                                },
                                "value": "value-1"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "Outstanding performance !!",
                                    "emoji": true
                                },
                                "value": "value-2"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "Excellent Job !!",
                                    "emoji": true
                                },
                                "value": "value-3"
                            }
                        ],
                        "action_id": "static_select-action"
                    }
                },
                {
                    "type": "header",
                    "text": {
                        "type": "plain_text",
                        "text": "Make It Personal",
                        "emoji": true
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Image"
                    },
                    "accessory": {
                        "type": "image",
                        "image_url": "https://cdn.create.vista.com/api/media/small/208061328/stock-photo-cup-black-coffee-laptop-black",
                        "alt_text": "cute cat"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Image"
                    },
                    "accessory": {
                        "type": "image",
                        "image_url": "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHw%3D&w=1000&q=80",
                        "alt_text": "cute cat"
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "input",
                    "element": {
                        "type": "plain_text_input",
                        "action_id": "plain_text_input-action"
                    },
                    "label": {
                        "type": "plain_text",
                        "text": "Add a Personal Message",
                        "emoji": true
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Submit and Send your E-Card"
                    },
                    "accessory": {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "Send E-card",
                            "emoji": true
                        },
                        "value": "click_me_123",
                        "action_id": "ecardButton"
                    }
                }
            ]
        }
      });
      logger.info(result);
    }
    catch (error) {
      logger.error(error);
    }
  });


  (async () => {
    // Start your app
    await app.start();
  
    console.log('⚡️ Bolt app is running!');
  })();