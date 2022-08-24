const { App } = require('@slack/bolt');
const { channel } = require('slack-block-builder');
require("dotenv").config();

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN_eachpersonApp,
    signingSecret: process.env.SLACK_SIGNING_SECRET_eachpersonApp,
    socketMode: true, 
    appToken: process.env.SLACK_APP_TOKEN_eachpersonApp,
    port: process.env.PORT || 3000
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

//FORM MODAL OPENS THROUGH HOME (This contains the Main Form modal)
app.action('button_click', async ({ ack, body, client, logger }) => {
    await ack();
  
    try {
      const result = await client.views.open({
        trigger_id: body.trigger_id,
        view: {
            "type": "modal",
            callback_id:'view_submit',
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
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Click me to change the image"
                    },
                    "accessory": {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "Click Me",
                            "emoji": true
                        },
                        "value": "click_me_123",
                        "action_id": "button-change"
                    }
                },
                {
                    "type": "image",
                    "image_url": "https://i1.wp.com/thetempest.co/wp-content/uploads/2017/08/The-wise-words-of-Michael-Scott-Imgur-2.jpg?w=1024&ssl=1",
                    "alt_text": "inspiration",
                },
                {
                    "type": "input",
                    "block_id":'select_conversation',
                    "element": {
                        "type": "conversations_select",
                        
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Select where to Post the message",
                            "emoji": true
                        },
                        "action_id": "conversation_select"
                    },
                    "label": {
                        "type": "plain_text",
                        "text": "Select where to Send",
                        "emoji": true
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

app.action('button-change', async ({ ack, body, client, logger }) => {
    await ack();
  
    try {
      const result = await client.views.update({
        view_id: body.view.id,
        hash: body.view.hash,
        view: {
            "type": "modal",
            "callback_id": "view_submit",
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
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Click me to change the image"
                    },
                    "accessory": {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "Click Me",
                            "emoji": true
                        },
                        "value": "click_me_123",
                        "action_id": "button-change"
                    }
                },
                {
                    "type": "image",
                    "image_url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "alt_text": "inspiration"
                },
                {
                    "type": "input",
                    "block_id": "select_conversation",
                    "element": {
                        "type": "conversations_select",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Select where to Post the message",
                            "emoji": true
                        },
                        "action_id": "conversation_select"
                    },
                    "label": {
                        "type": "plain_text",
                        "text": "Select where to Send",
                        "emoji": true
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

app.action('button-change', async ({ ack, body, client, logger }) => {
    await ack();
  
    try {
      const result = await client.views.update({
        view_id: body.view.id,
        hash: body.view.hash,
        view: {
            "type": "modal",
            "callback_id": "view_submit",
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
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Click me to change the image"
                    },
                    "accessory": {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "Click Me",
                            "emoji": true
                        },
                        "value": "click_me_123",
                        "action_id": "button-change"
                    }
                },
                {
                    "type": "image",
                    "image_url": "https://cdn.pixabay.com/photo/2018/09/07/11/32/photo-manipulation-3660491__340.jpg",
                    "alt_text": "inspiration"
                },
                {
                    "type": "input",
                    "block_id": "select_conversation",
                    "element": {
                        "type": "conversations_select",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Select where to Post the message",
                            "emoji": true
                        },
                        "action_id": "conversation_select"
                    },
                    "label": {
                        "type": "plain_text",
                        "text": "Select where to Send",
                        "emoji": true
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

app.action('button-change', async ({ ack, body, client, logger }) => {
    await ack();
  
    try {
      const result = await client.views.update({
        view_id: body.view.id,
        hash: body.view.hash,
        view: {
            "type": "modal",
            "callback_id": "view_submit",
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
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Click me to change the image"
                    },
                    "accessory": {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "Click Me",
                            "emoji": true
                        },
                        "value": "click_me_123",
                        "action_id": "button-change"
                    }
                },
                {
                    "type": "image",
                    "image_url": "https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000",
                    "alt_text": "inspiration"
                },
                {
                    "type": "input",
                    "block_id": "select_conversation",
                    "element": {
                        "type": "conversations_select",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Select where to Post the message",
                            "emoji": true
                        },
                        "action_id": "conversation_select"
                    },
                    "label": {
                        "type": "plain_text",
                        "text": "Select where to Send",
                        "emoji": true
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

app.view('view_submit', async ({ ack, body, client,logger,view}) => {
    await ack();
    const val = view['state']['values']['select_conversation']['conversation_select']
    //const val = view['state']['values']['select_conversation']['conversation_select'] takes values you need to define yourself in code by 'id' and 'action_id'
    const user = body['user']['id'];
    image_location = view.blocks[1]
    img = image_location.image_url
    
    console.log('DATA AFTER THIS')
    console.log(img)
    console.log(val)
    try {
        await client.chat.postMessage({
            "channel": val.selected_conversation,
            blocks:[
                {
                    "type": "image",
                    "image_url": img,
                    "alt_text": "inspiration"
                }
            ]
        });
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